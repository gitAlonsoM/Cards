/* js\storage.js */
// js/storage.js

// Manages all interactions with localStorage.

const STORAGE_KEYS = {
    DECKS: 'flashcard_decks_v1',
    PROGRESS_PREFIX: 'deck-progress_v1-',
    API_KEY: 'openai_api_key_v1'
};

function getAllDecksFromStorage() {
    const storedDecks = localStorage.getItem(STORAGE_KEYS.DECKS);
    return storedDecks ? JSON.parse(storedDecks) : {};
}

function saveDecksToStorage(decks) {
    localStorage.setItem(STORAGE_KEYS.DECKS, JSON.stringify(decks));
}

function getDeckProgressFromStorage(deckId) {
    const progress = localStorage.getItem(`${STORAGE_KEYS.PROGRESS_PREFIX}${deckId}`);
    if (progress) {
        const parsed = JSON.parse(progress);
        // Ensure sets are properly reconstructed
        return {
            learned: new Set(parsed.learned || []),
            needsReview: new Set(parsed.needsReview || [])
        };
    }
    return { learned: new Set(), needsReview: new Set() };
}

function saveDeckProgressToStorage(deckId, progress) {
    const dataToStore = {
        learned: [...progress.learned],
        needsReview: [...progress.needsReview]
    };
    localStorage.setItem(`${STORAGE_KEYS.PROGRESS_PREFIX}${deckId}`, JSON.stringify(dataToStore));
}

function deleteDeckProgressFromStorage(deckId) {
    localStorage.removeItem(`${STORAGE_KEYS.PROGRESS_PREFIX}${deckId}`);
}


function getApiKeyFromStorage() {
    return localStorage.getItem(STORAGE_KEYS.API_KEY);
}

function saveApiKeyToStorage(apiKey) {
    if (apiKey) { // Only save if a key is provided
        localStorage.setItem(STORAGE_KEYS.API_KEY, apiKey);
    }
}