// js/main.js
// Main application logic, state management, and event listeners.

document.addEventListener('DOMContentLoaded', () => {
    // --- App State ---
    let state = {
        allDecks: {},
        currentDeckId: null,
        currentProgress: { learned: new Set(), needsReview: new Set() },
        quiz: {
            questions: [],
            currentIndex: 0,
            score: 0,
            hasAnswered: false,
        },
        constants: {
            QUIZ_LENGTH: 10
        }
    };

    // --- Initialization ---
    function initializeApp() {
        loadDecks();
        renderUI();
        setupEventListeners();
    }

    function loadDecks() {
        const staticDecks = {
            [techDeckData.id]: techDeckData,
            [nounsDeckData.id]: nounsDeckData,
            [plsqlDeckData.id]: plsqlDeckData,
            [shellDeckData.id]: shellDeckData

        };
        const storedDecks = getAllDecksFromStorage();
        state.allDecks = { ...staticDecks, ...storedDecks };
    }

    function saveDecks() {
        const aiDecks = {};
        for (const deckId in state.allDecks) {
            if (state.allDecks[deckId].isAiGenerated) {
                aiDecks[deckId] = state.allDecks[deckId];
            }
        }
        saveDecksToStorage(aiDecks);
    }
    
    function renderUI() {
       ui.renderDeckList(state.allDecks, selectDeck, () => {
        console.log("DEBUG: 'Crear Mazo con IA' button clicked.");
        // Pre-fill the API key from storage when the modal is opened
        const storedApiKey = getApiKeyFromStorage();
        if (storedApiKey) {
            ui.dom.aiDeckForm.elements['api-key-input'].value = storedApiKey;
        }
        ui.showAiModal(true);
    });
    }

    // --- Event Listeners Setup ---
    function setupEventListeners() {
        console.log("DEBUG: Setting up event listeners...");
        ui.dom.backToDecksBtn.addEventListener('click', goBackToDecks);
        ui.dom.startBtn.addEventListener('click', startGame);
        ui.dom.resetProgressBtn.addEventListener('click', resetCurrentDeckProgress);
        ui.dom.deleteDeckBtn.addEventListener('click', deleteCurrentDeck);
        ui.dom.addCardsAiBtn.addEventListener('click', addMoreCards);
        ui.dom.nextBtn.addEventListener('click', handleNextQuestion);
        ui.dom.restartBtn.addEventListener('click', () => ui.showScreen('deckDetailScreen'));
        ui.dom.deleteCardBtn.addEventListener('click', deleteCurrentCard);
        
        // AI Modal
        ui.dom.aiDeckForm.addEventListener('submit', handleAiDeckFormSubmit);
        ui.dom.cancelAiDeckBtn.addEventListener('click', () => ui.showAiModal(false));
        
        // Quiz option clicks (event delegation)
        ui.dom.optionsContainer.addEventListener('click', (e) => {
            if (e.target.matches('.option-btn')) {
                selectAnswer(e.target);
            }
        });
    }

    // --- Deck Management ---
    function selectDeck(deckId) {
        console.log(`DEBUG: selectDeck called with ID: ${deckId}`);
        state.currentDeckId = deckId;
        const deck = state.allDecks[deckId];
        console.log('DEBUG: Found deck object:', deck);
        
        state.currentProgress = getDeckProgressFromStorage(deckId);
        console.log('DEBUG: Loaded progress for deck:', state.currentProgress);
        
        ui.updateDeckDetailView(deck, state.currentProgress);
        ui.showScreen('deckDetailScreen'); 
    }

    function goBackToDecks() {
        state.currentDeckId = null;
        renderUI();
        ui.showScreen('deckSelectionScreen');
    }
    
    function resetCurrentDeckProgress() {
        const deckName = state.allDecks[state.currentDeckId].name;
        if (confirm(`¿Estás seguro de que quieres borrar el progreso del mazo "${deckName}"?`)) {
            deleteDeckProgressFromStorage(state.currentDeckId);
            state.currentProgress = { learned: new Set(), needsReview: new Set() };
            ui.updateDeckDetailView(state.allDecks[state.currentDeckId], state.currentProgress);
        }
    }

    function deleteCurrentDeck() {
        const deckName = state.allDecks[state.currentDeckId].name;
        if (confirm(`¿Estás seguro de que quieres ELIMINAR PERMANENTEMENTE el mazo "${deckName}"? Esta acción no se puede deshacer.`)) {
            deleteDeckProgressFromStorage(state.currentDeckId);
            delete state.allDecks[state.currentDeckId];
            saveDecks();
            goBackToDecks();
        }
    }

    // --- AI Deck Creation ---
    async function handleAiDeckFormSubmit(e) {
        e.preventDefault();
        const title = e.target.elements['deck-title-input'].value;
        const prompt = e.target.elements['deck-prompt-input'].value;
        const apiKey = e.target.elements['api-key-input'].value;
        saveApiKeyToStorage(apiKey);
        ui.setAiFormLoading(true);

        try {
            const newCards = await generateCardsWithAI(prompt, apiKey);
            const newDeckId = `ai_${Date.now()}`;
            const newDeck = {
                id: newDeckId,
                name: title,
                description: prompt,
                cards: newCards,
                isAiGenerated: true,
                useImages: false
            };

            state.allDecks[newDeckId] = newDeck;
            saveDecks();
            renderUI();
            ui.showAiModal(false);
            selectDeck(newDeckId);

        } catch (error) {
            alert(`Error al generar el mazo: ${error.message}`);
        } finally {
            ui.setAiFormLoading(false);
        }
    }

    async function addMoreCards() {
        const deck = state.allDecks[state.currentDeckId];
         let apiKey = getApiKeyFromStorage();

    // If no key is stored, prompt the user for it
    if (!apiKey) {
        apiKey = prompt("Por favor, introduce tu API Key de OpenAI para añadir más tarjetas:");
    }
    
    // If user cancels the prompt or there's no key, exit
    if (!apiKey) return;

    // Save the key (either the stored one again or the newly prompted one)
    saveApiKeyToStorage(apiKey);

        ui.setAiFormLoading(true, true);

        try {
            const newCards = await generateCardsWithAI(deck.description, apiKey);
            deck.cards.push(...newCards);
            saveDecks();
            ui.updateDeckDetailView(deck, state.currentProgress);
            alert(`${newCards.length} nuevas tarjetas añadidas al mazo "${deck.name}"!`);
        } catch (error) {
            alert(`Error al añadir tarjetas: ${error.message}`);
        } finally {
            ui.setAiFormLoading(false, true);
        }
    }

    // --- Card Management ---
    function deleteCurrentCard() {
        if (!state.quiz.hasAnswered) {
            alert("Debes responder la pregunta antes de poder eliminarla.");
            return;
        }

        const currentQuestion = state.quiz.questions[state.quiz.currentIndex];
        const deck = state.allDecks[state.currentDeckId];
        
        if (confirm(`¿Seguro que quieres eliminar esta tarjeta?\n\nPregunta: ${currentQuestion.question}`)) {
            deck.cards = deck.cards.filter(card => card.question !== currentQuestion.question);
            
            state.currentProgress.learned.delete(currentQuestion.question);
            state.currentProgress.needsReview.delete(currentQuestion.question);

            if (deck.isAiGenerated) {
                saveDecks();
            }
            saveDeckProgressToStorage(state.currentDeckId, state.currentProgress);

            alert("Tarjeta eliminada.");
            handleNextQuestion();
        }
    }

    // --- Quiz Logic ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    function startGame() {
        const deckCards = state.allDecks[state.currentDeckId].cards;
        if (deckCards.length === 0) return;

        const allCardQuestions = deckCards.map(c => c.question);
        
        let quizPool = [];
        const reviewList = shuffleArray([...state.currentProgress.needsReview]);
        quizPool.push(...reviewList);

        const neededForQuiz = state.constants.QUIZ_LENGTH - quizPool.length;
        if (neededForQuiz > 0) {
            let unseenList = allCardQuestions.filter(q => 
                !state.currentProgress.learned.has(q) && !state.currentProgress.needsReview.has(q)
            );
            quizPool.push(...shuffleArray(unseenList).slice(0, neededForQuiz));
        }

        const stillNeeded = state.constants.QUIZ_LENGTH - quizPool.length;
        if (stillNeeded > 0 && state.currentProgress.learned.size > 0) {
            let reinforcementList = shuffleArray([...state.currentProgress.learned]);
            quizPool.push(...reinforcementList.slice(0, stillNeeded));
        }
        
        state.quiz.questions = shuffleArray([...new Set(quizPool)])
            .map(q_text => deckCards.find(c => c.question === q_text))
            .filter(Boolean);
            
        if (state.quiz.questions.length === 0) {
            alert("¡No hay tarjetas disponibles para esta ronda! Puede que ya las hayas dominado todas.");
            ui.updateDeckDetailView(state.allDecks[state.currentDeckId], state.currentProgress);
            return;
        }

        state.quiz.score = 0;
        state.quiz.currentIndex = 0;
        state.quiz.hasAnswered = false;
        
        ui.showScreen('quizContainer'); // This is the only call needed.
        
        
        const currentDeck = state.allDecks[state.currentDeckId];
        // This is the single, correct call with all required arguments.
        ui.displayQuestion(state.quiz.questions[0], 0, state.quiz.questions.length, currentDeck);
        ui.dom.score.textContent = `Aciertos: 0`;
    }

    function selectAnswer(selectedButton) {
        if (state.quiz.hasAnswered) return;
        state.quiz.hasAnswered = true;

        const selectedOption = selectedButton.dataset.option;
        const currentQuestion = state.quiz.questions[state.quiz.currentIndex];
        const questionId = currentQuestion.question;

        const isCorrect = selectedOption === currentQuestion.correctAnswer;
        if (isCorrect) {
            state.quiz.score++;
            ui.dom.score.textContent = `Aciertos: ${state.quiz.score}`;
            state.currentProgress.learned.add(questionId);
            state.currentProgress.needsReview.delete(questionId);
        } else {
            state.currentProgress.needsReview.add(questionId);
            state.currentProgress.learned.delete(questionId);
        }

        ui.updateQuizFeedback(selectedButton, currentQuestion.correctAnswer, isCorrect);
    }
    
    function handleNextQuestion() {
        state.quiz.currentIndex++;
        if (state.quiz.currentIndex < state.quiz.questions.length) {
            state.quiz.hasAnswered = false;
            // The redundant call that was causing the error has been removed.
            const currentDeck = state.allDecks[state.currentDeckId];
            // This is the single, correct call with all required arguments.
            ui.displayQuestion(state.quiz.questions[state.quiz.currentIndex], state.quiz.currentIndex, state.quiz.questions.length, currentDeck);
        } else {
            showResults();
        }
    }

    function showResults() {
        saveDeckProgressToStorage(state.currentDeckId, state.currentProgress);
        ui.displayResults(state.quiz.score, state.quiz.questions.length);
        ui.updateDeckDetailView(state.allDecks[state.currentDeckId], state.currentProgress);
    }

    // --- Run App ---
    initializeApp();
});