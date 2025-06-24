/* js\tts.js */
// js/tts.js

// Handles Text-to-Speech functionality.

function speak(text, lang = 'en-US') {
    if ('speechSynthesis' in window) {
        // Cancel any previous speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    } else {
        console.error("Text-to-Speech is not supported in this browser.");
        alert("La síntesis de voz no es compatible con este navegador.");
    }
}

function createSpeakButton(textToSpeak, lang = 'en-US') {
    const button = document.createElement('button');
    button.className = 'tts-button';
    button.title = 'Escuchar pista';
    button.innerHTML = '<i class="fas fa-volume-up"></i>';
    button.onclick = (e) => {
        e.stopPropagation(); // Prevent card clicks
        speak(textToSpeak, lang);
    };
    return button;
}