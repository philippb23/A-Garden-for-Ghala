
// Find the screens
const welcomeScreen = document.getElementById("welcome-screen");
const forestScreen = document.getElementById("forest-screen");
const lilyScreen = document.getElementById("lily-screen");
const beachScreen = document.getElementById("beach-screen");
const puzzleScreen = document.getElementById("puzzle-screen");
const leoScreen = document.getElementById("leo-screen");

// Find the buttons
const enterButton = document.getElementById("enter-button");
const backButton = document.getElementById("back-button");

const lilyButton = document.getElementById("lily-button");
const lilyBackButton = document.getElementById("lily-back-button");

const beachButton = document.getElementById("beach-button");
const beachBackButton = document.getElementById("beach-back-button");

const puzzleButton = document.getElementById("puzzle-button");
const puzzleBackButton = document.getElementById("puzzle-back-button");

const leoButton = document.getElementById("leo-button");
const leoLilyBackButton = document.getElementById("leo-lily-back-button");
const leoForestBackButton = document.getElementById("leo-forest-back-button");


// Enter the Forgotten Forest
enterButton.addEventListener("click", function () {

    welcomeScreen.classList.remove("active");
    forestScreen.classList.add("active");

});


// Return to the Welcome screen
backButton.addEventListener("click", function () {

    forestScreen.classList.remove("active");
    welcomeScreen.classList.add("active");

});


// Follow the Path of Light to the Lily Clearing
lilyButton.addEventListener("click", function () {

    forestScreen.classList.remove("active");
    lilyScreen.classList.add("active");

});


// Return from the Lily Clearing to the Forest
lilyBackButton.addEventListener("click", function () {

    lilyScreen.classList.remove("active");
    forestScreen.classList.add("active");

});


// Follow the Path of Whispers to the Beach
beachButton.addEventListener("click", function () {

    forestScreen.classList.remove("active");
    beachScreen.classList.add("active");

});


// Return from the Beach to the Forest
beachBackButton.addEventListener("click", function () {

    beachScreen.classList.remove("active");
    forestScreen.classList.add("active");

});

// Enter the Puzzle
puzzleButton.addEventListener("click", function () {

    lilyScreen.classList.remove("active");
    puzzleScreen.classList.add("active");

});


// Return from the Puzzle to the Lily Clearing
puzzleBackButton.addEventListener("click", function () {

    puzzleScreen.classList.remove("active");
    lilyScreen.classList.add("active");

});


// Enter Leo's Hidden Clearing
leoButton.addEventListener("click", function () {

    puzzleScreen.classList.remove("active");
    leoScreen.classList.add("active");
    startLeoBreathing();

    // Reset the cinematic entrance
    leoScreen.classList.remove(
        "leo-intro-playing",
        "leo-controls-hidden"
    );

    // Restart the entrance animation
    void leoScreen.offsetWidth;

    // Begin the cinematic introduction
    leoScreen.classList.add(
        "leo-intro-playing",
        "leo-controls-hidden"
    );

    // Restore navigation after the introduction
    setTimeout(function () {
        leoScreen.classList.remove("leo-controls-hidden");
    }, 9000);

});


// Return from Leo's Clearing to Lily Clearing
leoLilyBackButton.addEventListener("click", function () {

    leoScreen.classList.remove("active");
    leoScreen.classList.remove("leo-intro-playing", "leo-controls-hidden");
    lilyScreen.classList.add("active");
    
    stopLeoBreathing();
    stopLeoPurr();

});


// Return from Leo's Clearing to Forest
leoForestBackButton.addEventListener("click", function () {

    leoScreen.classList.remove("active");
    leoScreen.classList.remove("leo-intro-playing", "leo-controls-hidden");
    forestScreen.classList.add("active");
    
    stopLeoBreathing();
    stopLeoPurr();

});




   

/* =================================
   Lily Discovery System
================================= */

// Find all interactive lilies
const lilyFlowers = document.querySelectorAll(".lily-interactive");

// Find the discovery counter
const discoveryCount = document.getElementById("discovery-count");

// Find the message elements

const lilyMessage = document.getElementById("lily-message");
const lilyMessageTitle = document.getElementById("lily-message-title");
const lilyMessageText = document.getElementById("lily-message-text");
const closeMessageButton = document.getElementById("close-message-button");

// Discovery Journal elements
const journal = document.getElementById("discovery-journal");
const journalEntries = document.getElementById("journal-entries");
const openJournalButton = document.getElementById("open-journal-button");
const closeJournalButton = document.getElementById("close-journal-button");

// Track discovered special lilies
const discoveredLilies = new Set();


// Personal messages assigned to special lilies
const lilyMessages = {

    testLily: {
        id: "test-lily",
        title: "A little discovery",
        message: "A little discovery, just for you.",
        language: "en",
        direction: "ltr"
    }

};





/* =================================
   Discovery Journal System
================================= */

// Remember where the message was opened from
let returnToJournal = false;


// Display a discovery message
function showDiscovery(discovery, fromJournal = false) {

    returnToJournal = fromJournal;

    lilyMessageTitle.textContent = discovery.title;
    lilyMessageText.textContent = discovery.message;

    lilyMessageText.dir = discovery.direction || "auto";

    lilyMessage.hidden = false;
    journal.hidden = true;

}


// Build the journal using discovered entries only
function renderJournal() {

    journalEntries.innerHTML = "";

    const entries = Object.values(lilyMessages).filter(function (item) {
        return discoveredLilies.has(item.id);
    });

    if (entries.length === 0) {

        const emptyMessage = document.createElement("p");

        emptyMessage.classList.add("journal-empty");
        emptyMessage.textContent =
            "Your discoveries will be collected here.";

        journalEntries.appendChild(emptyMessage);

        return;
    }

    entries.forEach(function (discovery) {

    const entryButton = document.createElement("button");

    entryButton.type = "button";
    entryButton.classList.add("journal-entry");
    entryButton.textContent = discovery.title;

    entryButton.addEventListener("click", function (event) {

        event.preventDefault();

        console.log("Journal entry clicked:", discovery.id);

        showDiscovery(discovery, true);

    });

    journalEntries.appendChild(entryButton);

});

}


// Handle lily clicks

// Track which lily currently has its message open
let activeLilyId = null;


// Handle lily clicks
lilyFlowers.forEach(function (lily) {

    lily.addEventListener("click", function () {

        const lilyId = lily.dataset.lilyId;

        // If the lily is already bloomed, close it
        if (lily.classList.contains("bloomed")) {

    // Start the closing animation
    lily.classList.remove("bloomed");
    lily.classList.add("closing");

    // Remove the closing class after the animation
    setTimeout(function () {
        lily.classList.remove("closing");
    }, 500);

    // Close its message if it is currently displayed
    if (activeLilyId === lilyId) {
        lilyMessage.hidden = true;
        activeLilyId = null;
    }

    return;
}

        // Bloom the lily
        lily.classList.add("bloomed");

        // Ordinary lilies do not reveal messages
        if (lily.dataset.special !== "true") {
            return;
        }

        // Find this lily's message
        const discovery = Object.values(lilyMessages).find(function (item) {
            return item.id === lilyId;
        });

        if (!discovery) {
            return;
        }

        // Count the discovery only once
        if (!discoveredLilies.has(lilyId)) {

            discoveredLilies.add(lilyId);

            discoveryCount.textContent = discoveredLilies.size;

        }

        // Remember the active lily
        activeLilyId = lilyId;

        // Display its message
        showDiscovery(discovery);

    });

});


// Open the journal
openJournalButton.addEventListener("click", function () {

    renderJournal();

    lilyMessage.hidden = true;
    journal.hidden = false;

});


// Close the journal
closeJournalButton.addEventListener("click", function () {

    journal.hidden = true;

});


// Close a message
closeMessageButton.addEventListener("click", function () {

    lilyMessage.hidden = true;

    // Return to the journal if the message came from there
    if (returnToJournal) {

        renderJournal();

        journal.hidden = false;

    }

    returnToJournal = false;

});


/* =================================
   Leo Interaction System
================================= */

// Leo's interaction elements
const leoBench = document.getElementById("leo-bench");
const leoResponse = document.getElementById("leo-cat-response");

// Sound files (we will add the actual recordings later)
const leoMeowSounds = [
    "assets/audio/leo/meow-1.mp3",
    "assets/audio/leo/meow-2.mp3",
    "assets/audio/leo/meow-3.mp3",
    "assets/audio/leo/meow-4.mp3"
];

const leoPurrSounds = [
    "assets/audio/leo/purr-1.mp3",
    "assets/audio/leo/purr-2.mp3",
    "assets/audio/leo/purr-3.mp3"
];

// Leo's quiet background breathing
const leoBreathingSound = new Audio(
    "assets/audio/leo/leo-breathing.mp3"
);

leoBreathingSound.volume = 0.08;
leoBreathingSound.loop = true;

// Start Leo's breathing
function startLeoBreathing() {

    if (leoBreathingSound.paused) {

        leoBreathingSound.play().catch(function () {
            console.log("Leo's breathing audio could not start.");
        });

    }

}


// Pause breathing during interaction
function pauseLeoBreathing() {

    leoBreathingSound.pause();

}


// Stop breathing when leaving the clearing
function stopLeoBreathing() {

    leoBreathingSound.pause();
    leoBreathingSound.currentTime = 0;

}

// Interaction settings
const holdDuration = 250;

let holdTimer = null;
let isHolding = false;
let activePurr = null;
let responseTimer = null;
let currentMeow = -1;
let currentPurr = -1;
let interactionActive = false;


// Choose a random sound without immediately repeating the previous one
function chooseSound(sounds, previousIndex) {

    if (sounds.length === 1) {
        return 0;
    }

    let nextIndex;

    do {
        nextIndex = Math.floor(Math.random() * sounds.length);
    } while (nextIndex === previousIndex);

    return nextIndex;
}


// Display Leo's response
function showLeoResponse(message) {

    clearTimeout(responseTimer);

    leoResponse.textContent = message;
    leoResponse.hidden = false;

}


// Hide Leo's response
function hideLeoResponse() {

    clearTimeout(responseTimer);

    responseTimer = setTimeout(function () {
        leoResponse.hidden = true;
    }, 1000);

}


// Play a random meow
function playLeoMeow() {

    currentMeow = chooseSound(leoMeowSounds, currentMeow);

    const meow = new Audio(leoMeowSounds[currentMeow]);

    meow.volume = 0.65;

    meow.play().catch(function () {
        console.log("Leo's meow recording is not available yet.");
    });

}


// Start a random looping purr
function startLeoPurr() {

    currentPurr = chooseSound(leoPurrSounds, currentPurr);

    activePurr = new Audio(leoPurrSounds[currentPurr]);

    activePurr.volume = 0.45;
    activePurr.loop = true;

    activePurr.play().catch(function () {
        console.log("Leo's purr recording is not available yet.");
    });

}


// Stop the purring immediately
function stopLeoPurr() {

    if (activePurr) {
        activePurr.pause();
        activePurr.currentTime = 0;
        activePurr = null;
    }

}


// Begin interaction
function beginLeoInteraction() {

    if (interactionActive) {
        return;
    }

    interactionActive = true;
    pauseLeoBreathing();
    
    isHolding = false;

    leoBench.classList.add("leo-reacting");

    holdTimer = setTimeout(function () {

        isHolding = true;

        leoBench.classList.remove("leo-reacting");
        leoBench.classList.add("leo-purring");

        showLeoResponse("Prrrr...");

        startLeoPurr();

    }, holdDuration);

}


// End interaction
function endLeoInteraction() {

    if (!interactionActive) {
        return;
    }

    interactionActive = false;

    clearTimeout(holdTimer);

    leoBench.classList.remove(
        "leo-reacting",
        "leo-purring"
    );

    if (isHolding) {

        // Stop purring when Leo is released
        stopLeoPurr();

    } else {

        // A short tap produces a meow
        showLeoResponse("Meow!");

        playLeoMeow();

    }

    isHolding = false;

    hideLeoResponse();
    
    startLeoBreathing();

}


// Mouse and touchscreen interaction
leoBench.addEventListener("pointerdown", function (event) {

    if (event.button !== 0 && event.pointerType === "mouse") {
        return;
    }

    event.preventDefault();

    leoBench.setPointerCapture(event.pointerId);

    beginLeoInteraction();

});


leoBench.addEventListener("pointerup", function () {

    endLeoInteraction();

});


leoBench.addEventListener("pointercancel", function () {
    
    startLeoBreathing();

    if (isHolding) {
        stopLeoPurr();
    }

    clearTimeout(holdTimer);

    interactionActive = false;
    isHolding = false;

    leoBench.classList.remove(
        "leo-reacting",
        "leo-purring"
    );

    hideLeoResponse();

});


// Keyboard support: Enter or Space
leoBench.addEventListener("keydown", function (event) {

    if (event.key !== "Enter" && event.key !== " ") {
        return;
    }

    event.preventDefault();

    if (event.repeat) {
        return;
    }

    beginLeoInteraction();

});


leoBench.addEventListener("keyup", function (event) {

    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        endLeoInteraction();
    }

});


// Stop purring if the browser window loses focus
window.addEventListener("blur", function () {

    clearTimeout(holdTimer);

    stopLeoPurr();

    interactionActive = false;
    isHolding = false;

    leoBench.classList.remove(
        "leo-reacting",
        "leo-purring"
    );

    hideLeoResponse();

});




