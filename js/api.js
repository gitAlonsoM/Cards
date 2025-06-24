/* js\api.js */

// Handles communication with the OpenAI API.

async function generateCardsWithAI(prompt, apiKey) {
    const API_URL = 'https://api.openai.com/v1/chat/completions';
 // This is a much more sophisticated system prompt to get high-quality, contextual cards.
    const systemPrompt = `
        You are an expert language learning and technical flashcard creator. Your task is to generate 30 flashcards based on the user's prompt.
        The flashcards must be creative and contextual.

        RULES:
        1.  **Contextual Questions:** Create full-sentence questions where the correct answer fits naturally into a blank space, marked as '( ... )'.
        2.  **NO DIRECT TRANSLATIONS:** Do NOT create simple "What is 'X'?" or "Translate 'Y'" questions.
        3.  **Plausible Options:** The other two options must be plausible but incorrect distractors of the same type (e.g., if the answer is a noun, the options should also be nouns).
        4.  **JSON Structure:** Each flashcard must be a JSON object with the exact structure: {"category": "Relevant Category", "hint": "Helpful Hint", "question": "Contextual Question", "options": ["Option A", "Option B", "Correct Answer"], "correctAnswer": "The correct answer string"}.
        5.  **JSON Output:** You MUST return a single, valid JSON object with a single key "cards" that contains the array of 30 flashcard objects. Example: {"cards": [{...}, {...}]}.

        GOOD EXAMPLE (for a prompt "English kitchen items"):
        {
          "category": "Kitchenware",
          "hint": "You use this to stir soup.",
          "question": "She picked up the wooden ( ... ) to stir the hot soup on the stove.",
          "options": ["fork", "spoon", "knife"],
          "correctAnswer": "spoon"
        }

        BAD EXAMPLE (Do NOT do this):
        {
          "category": "Kitchenware",
          "hint": "A cooking tool.",
          "question": "What is the English word for 'cuchara'?",
          "options": ["spoon", "fork", "knife"],
          "correctAnswer": "spoon"
        }
    `;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-4o', // Switched to the more powerful model
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: prompt }
                ],
                temperature: 0.7, // Increased temperature for more creativity
                response_format: { "type": "json_object" } // Enforce JSON output
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('OpenAI API Error:', errorData);
            throw new Error(`Error from OpenAI: ${errorData.error.message}`);
        }

        const data = await response.json();
        const content = data.choices[0].message.content;

        // Try to parse the JSON content from the AI's response.
        try {
          const cards = JSON.parse(content).cards;
            if (Array.isArray(cards)) {
                return cards;
            }
            throw new Error("AI did not return a valid JSON array.");
        } catch (parseError) {
            console.error("Failed to parse JSON from AI response:", parseError);
            console.error("Received content:", content);
            throw new Error("The AI response was not in the correct format. Please try again.");
        }

    } catch (error) {
        console.error('Error generating cards with AI:', error);
        throw error; // Re-throw the error to be caught by the caller
    }
}