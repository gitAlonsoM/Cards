// js/ui.js

// Helper function defined at the top of the file, before it's used.
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const ui = {
    dom: {
        deckSelectionScreen: document.getElementById('deck-selection-screen'),
        deckListContainer: document.getElementById('deck-list-container'),
        createDeckBtn: document.getElementById('create-deck-btn'),
        
        deckDetailScreen: document.getElementById('deck-detail-screen'),
        backToDecksBtn: document.getElementById('back-to-decks-btn'),
        deckTitle: document.getElementById('deck-title'),
        progressStats: document.getElementById('progress-stats'),
        totalProgress: document.getElementById('total-progress'),
        startBtn: document.getElementById('start-btn'),
        addCardsAiBtn: document.getElementById('add-cards-ai-btn'),
        resetProgressBtn: document.getElementById('reset-progress-btn'),
        deleteDeckBtn: document.getElementById('delete-deck-btn'),

        quizContainer: document.getElementById('quiz-container'),
        progress: document.getElementById('progress'),
        score: document.getElementById('score'),
        deleteCardBtn: document.getElementById('delete-card-btn'),
        cardImage: document.getElementById('card-image'),
        
        cardCategory: document.getElementById('card-category'),
        codeSnippetContainer: document.getElementById('code-snippet-container'),
        codeSnippet: document.getElementById('code-snippet'),

        cardHintContainer: document.getElementById('card-hint-container'),
        cardHint: document.getElementById('card-hint'),
        questionText: document.getElementById('question-text'),
        optionsContainer: document.getElementById('options-container'),
        nextBtn: document.getElementById('next-btn'),

        resultsScreen: document.getElementById('results-screen'),
        finalScore: document.getElementById('final-score'),
        finalMessage: document.getElementById('final-message'),
        restartBtn: document.getElementById('restart-btn'),

        aiDeckModal: document.getElementById('ai-deck-modal'),
        aiDeckForm: document.getElementById('ai-deck-form'),
        cancelAiDeckBtn: document.getElementById('cancel-ai-deck-btn'),
        submitAiDeckBtn: document.getElementById('submit-ai-deck-btn'),
        aiSubmitText: document.getElementById('ai-submit-text'),
        aiSpinner: document.getElementById('ai-spinner')
    },

    showScreen(screenName) {
        console.log(`DEBUG: showScreen called. Attempting to show: ${screenName}`);
        ['deckSelectionScreen', 'deckDetailScreen', 'quizContainer', 'resultsScreen'].forEach(id => {
            if (this.dom[id]) this.dom[id].classList.add('hidden');
        });

        if (this.dom[screenName]) {
            this.dom[screenName].classList.remove('hidden');
        } else {
            console.error(`DEBUG: Screen with key "${screenName}" not found in ui.dom object.`);
        }
    },

    renderDeckList(decks, onSelect, onCreate) {
        this.dom.deckListContainer.innerHTML = '';
        Object.values(decks).forEach(deck => {
            const card = document.createElement('div');
            card.className = 'deck-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer text-left';
            card.onclick = () => {
                console.log(`DEBUG: Deck card clicked. Calling onSelect for deck.id: ${deck.id}`);
                onSelect(deck.id);
            };
            
            const name = document.createElement('h2');
            name.className = 'text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2';
            name.textContent = deck.name;
            
            const description = document.createElement('p');
            description.className = 'text-sm text-gray-500 dark:text-gray-400 mb-3';
            description.textContent = deck.description;

            const count = document.createElement('p');
            count.className = 'text-gray-600 dark:text-gray-400';
            count.textContent = `${deck.cards.length} tarjetas`;
            
            card.appendChild(name);
            card.appendChild(description);
            card.appendChild(count);
            this.dom.deckListContainer.appendChild(card);
        });
        this.dom.createDeckBtn.onclick = onCreate;
    },

    updateDeckDetailView(deck, progress) {
        this.dom.deckTitle.textContent = deck.name;
        const learnedCount = progress.learned.size;
        const reviewCount = progress.needsReview.size;
        const totalCount = deck.cards.length;
        const unseenCount = totalCount - learnedCount - reviewCount;

        this.dom.progressStats.innerHTML = `
            <div><p class="text-4xl font-bold text-emerald-500">${learnedCount}</p><p class="text-sm text-gray-500 dark:text-gray-400">Aprendidas</p></div>
            <div><p class="text-4xl font-bold text-red-500">${reviewCount}</p><p class="text-sm text-gray-500 dark:text-gray-400">Por Repasar</p></div>
            <div><p class="text-4xl font-bold text-gray-400">${Math.max(0, unseenCount)}</p><p class="text-sm text-gray-500 dark:text-gray-400">Nuevas</p></div>
        `;
        this.dom.totalProgress.textContent = `Has dominado ${learnedCount} de ${totalCount} tarjetas.`;
        this.dom.addCardsAiBtn.classList.toggle('hidden', !deck.isAiGenerated);
        this.dom.deleteDeckBtn.classList.toggle('hidden', !deck.isAiGenerated);

        if (totalCount > 0 && learnedCount === totalCount && reviewCount === 0) {
            this.dom.totalProgress.textContent = "¡FELICITACIONES! Has dominado todas las tarjetas de este mazo.";
            this.dom.startBtn.textContent = "¡Mazo Completado!";
            this.dom.startBtn.disabled = true;
        } else if (totalCount === 0) {
            this.dom.totalProgress.textContent = "Este mazo está vacío. ¡Añade tarjetas para empezar!";
            this.dom.startBtn.textContent = "Mazo Vacío";
            this.dom.startBtn.disabled = true;
        } else {
            this.dom.startBtn.textContent = "Comenzar Test";
            this.dom.startBtn.disabled = false;
        }
    },

    displayQuestion(question, currentIndex, totalQuestions) {
        const DEFAULT_IMAGE_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1600px-No-Image-Placeholder.svg.png';
        this.dom.progress.textContent = `Pregunta ${currentIndex + 1} de ${totalQuestions}`;
        this.dom.cardCategory.textContent = question.category;

        if(this.dom.cardHintContainer.querySelector('.tts-button')) {
            this.dom.cardHintContainer.querySelector('.tts-button').remove();
        }
        
        const hintText = question.hint.replace(/\n/g, '<br>');
        this.dom.cardHint.innerHTML = hintText;
        const lang = question.category.toLowerCase().includes('english') ? 'en-US' : 'es-ES';
        const speakBtn = createSpeakButton(question.hint, lang); // This will now work
        this.dom.cardHintContainer.appendChild(speakBtn);
        
        const formatText = (text) => text.replace(/`(.*?)`/g, '<code class="bg-gray-200 dark:bg-gray-700 text-red-500 rounded px-1 py-0.5 text-sm">$1</code>');
        this.dom.questionText.innerHTML = formatText(question.question);
        
        this.dom.cardImage.classList.add('hidden');
        this.dom.codeSnippetContainer.classList.add('hidden');

        if (question.codeSnippet) {
            // Handle code snippet display
            this.dom.codeSnippet.textContent = question.codeSnippet;
            // Force highlight.js to re-process the element
            this.dom.codeSnippet.removeAttribute('data-highlighted');
            hljs.highlightElement(this.dom.codeSnippet);
            this.dom.codeSnippetContainer.classList.remove('hidden');
        } else if (question.imageUrl) {
            // Handle image display
            this.dom.cardImage.classList.remove('hidden');
            this.dom.cardImage.src = question.imageUrl || DEFAULT_IMAGE_URL;
            this.dom.cardImage.onerror = () => { this.dom.cardImage.src = DEFAULT_IMAGE_URL; };
        }

        this.dom.optionsContainer.innerHTML = '';
        const shuffledOptions = shuffleArray([...question.options]);
        shuffledOptions.forEach(option => {
            const button = document.createElement('button');
            button.innerHTML = formatText(option);
            button.dataset.option = option;
            button.classList.add('option-btn', 'w-full', 'p-4', 'border-2', 'border-gray-300', 'dark:border-gray-600', 'rounded-lg', 'text-left', 'hover:bg-gray-50', 'dark:hover:bg-gray-700');
            this.dom.optionsContainer.appendChild(button);
        });
        
        this.dom.nextBtn.disabled = true;
    },

    updateQuizFeedback(selectedButton, correctAnswer, isCorrect) {
        if (isCorrect) {
            selectedButton.classList.add('correct');
        } else {
            selectedButton.classList.add('incorrect');
            Array.from(this.dom.optionsContainer.children).forEach(button => {
                if (button.dataset.option === correctAnswer) button.classList.add('correct');
            });
        }
        Array.from(this.dom.optionsContainer.children).forEach(button => button.disabled = true);
        this.dom.nextBtn.disabled = false;
    },

    showAiModal(show = true) {
        if (show) {
            this.dom.aiDeckForm.reset();
            this.dom.aiDeckModal.classList.remove('hidden');
        } else {
            this.dom.aiDeckModal.classList.add('hidden');
        }
    },

    setAiFormLoading(isLoading, addCardsMode = false) {
        if (isLoading) {
            this.dom.submitAiDeckBtn.disabled = true;
            this.dom.aiSubmitText.classList.add('hidden');
            this.dom.aiSpinner.classList.remove('hidden');
            
            if (addCardsMode) {
                this.dom.addCardsAiBtn.disabled = true;
                this.dom.addCardsAiBtn.innerHTML = `<div class="spinner !border-white/50 !border-t-white" style="margin: auto;"></div>`;
            }
        } else {
            this.dom.submitAiDeckBtn.disabled = false;
            this.dom.aiSubmitText.classList.remove('hidden');
            this.dom.aiSpinner.classList.add('hidden');

            if (addCardsMode) {
                this.dom.addCardsAiBtn.disabled = false;
                this.dom.addCardsAiBtn.innerHTML = `<i class="fas fa-plus mr-2"></i> Añadir 30 más`;
            }
        }
    },

    displayResults(score, totalQuestions) {
        this.showScreen('resultsScreen');
        this.dom.finalScore.textContent = `${score} / ${totalQuestions}`;
        let message = '';
        const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
        if (percentage === 100) message = '¡Perfecto! Dominaste esta ronda.';
        else if (percentage >= 70) message = '¡Excelente trabajo! Sigamos practicando.';
        else if (percentage >= 50) message = '¡Buen intento! Las tarjetas que fallaste volverán.';
        else message = '¡No te desanimes! La repetición es la clave del éxito.';
        this.dom.finalMessage.textContent = message;
    }
};