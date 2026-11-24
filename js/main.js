/* =================================
   1. Screens and Buttons
================================= */

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


/* =================================
   2. Screen Navigation
================================= */

/* ---------- Welcome and Forest ---------- */

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


/* ---------- Lily Clearing ---------- */

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



/* ---------- Beach ---------- */

// Beach ambience audio
const beachWaves = document.getElementById("beach-waves");
const beachSeagulls = document.getElementById("beach-seagulls");

// Volume settings
beachWaves.volume = 0.2;
beachWaves.loop = true;

beachSeagulls.volume = 0.4;

// Smooth ocean volume transition
let waveFadeInterval = null;

function fadeWaves(targetVolume, duration) {

    // Stop any previous fade
    clearInterval(waveFadeInterval);

    const startVolume = beachWaves.volume;
    const difference = targetVolume - startVolume;
    const steps = 30;
    const intervalTime = duration / steps;
    let currentStep = 0;

    waveFadeInterval = setInterval(function () {

        currentStep++;

        beachWaves.volume = startVolume +
            (difference * currentStep / steps);

        if (currentStep >= steps) {
            beachWaves.volume = targetVolume;
            clearInterval(waveFadeInterval);
            waveFadeInterval = null;
        }

    }, intervalTime);
}


// Randomized seagull calls
let seagullTimer = null;

function scheduleSeagullCall() {

    // Only play while the Beach is active
    if (!beachScreen.classList.contains("active")) {
        return;
    }

    // Wait a random 5-10 seconds
    const delay = Math.random() * 5000 + 5000;

    seagullTimer = setTimeout(function () {

        if (!beachScreen.classList.contains("active")) {
            return;
        }

        // Play the seagull recording
        beachSeagulls.currentTime = 0;

        if (beachScreen.classList.contains("active")) {

    	    beachSeagulls.play().catch(function (error) {
        	 console.log("Seagull audio could not start:", error);
    });

}

        // Schedule the next call
        scheduleSeagullCall();

    }, delay);
}


// Follow the Path of Whispers to the Beach
beachButton.addEventListener("click", function () {

    forestScreen.classList.remove("active");
    beachScreen.classList.add("active");

    // Start ocean waves with fade-in
    beachWaves.volume = 0;

    beachWaves.play().then(function () {
        fadeWaves(0.2, 3000);
    }).catch(function (error) {
        console.log("Beach waves could not start:", error);
});
	
    // Start the Seagulls sounds
	scheduleSeagullCall();
});


// Return to the Forest
beachBackButton.addEventListener("click", function () {

    beachScreen.classList.remove("active");
    forestScreen.classList.add("active");

    // Fade out ocean waves
    fadeWaves(0, 1000);

    setTimeout(function () {
        beachWaves.pause();
        beachWaves.currentTime = 0;
    }, 1000);

    // Stop seagull scheduling
    clearTimeout(seagullTimer);
    seagullTimer = null;

    // Stop any playing seagull audio immediately
    beachSeagulls.pause();
    beachSeagulls.currentTime = 0;

});


/* ---------- Puzzle ---------- */

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


/* ---------- Leo's Clearing ---------- */

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
   3. Lily Discovery System
================================= */

/* ---------- Elements ---------- */

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


/* ---------- State and Messages ---------- */

// Track discovered special lilies
let discoveredLilies = new Set();

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


/* ---------- Saving and Restoring ---------- */

// Save and restore discovered lilies

const DISCOVERY_STORAGE_KEY = "gardenForGhala_discoveredLilies";

// Load previously discovered lilies
try {

    const savedDiscoveries = JSON.parse(
        localStorage.getItem(DISCOVERY_STORAGE_KEY) || "[]"
    );

    if (Array.isArray(savedDiscoveries)) {

        savedDiscoveries.forEach(function (id) {

            const exists = Object.values(lilyMessages).some(function (item) {
                return item.id === id;
            });

            if (exists) {
                discoveredLilies.add(id);
            }

        });

    }

} catch (error) {

    console.log("Could not load saved discoveries.");

}

// Update the counter when the garden opens
discoveryCount.textContent = discoveredLilies.size;


/* =================================
   4. Discovery Journal System
================================= */

/* ---------- State ---------- */

// Remember where the message was opened from
let returnToJournal = false;

// Track which lily currently has its message open
let activeLilyId = null;


/* ---------- Message and Journal Display ---------- */

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


/* ---------- Lily Clicks ---------- */

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

            // Update the discovery counter
            discoveryCount.textContent = discoveredLilies.size;

            // Save discoveries in the browser
            localStorage.setItem(
                DISCOVERY_STORAGE_KEY,
                JSON.stringify(Array.from(discoveredLilies))
            );

        }

        // Remember the active lily
        activeLilyId = lilyId;

        // Display its message
        showDiscovery(discovery);

    });

});


/* ---------- Journal and Message Buttons ---------- */

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
   5. Leo Interaction System
================================= */

/* ---------- Elements ---------- */

// Leo's interaction elements
const leoBench = document.getElementById("leo-bench");
const leoResponse = document.getElementById("leo-cat-response");


/* ---------- Sounds ---------- */

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


/* ---------- Breathing Controls ---------- */

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


/* ---------- Interaction Settings and State ---------- */

// Interaction settings
const holdDuration = 250;

let holdTimer = null;
let isHolding = false;
let activePurr = null;
let responseTimer = null;
let currentMeow = -1;
let currentPurr = -1;
let interactionActive = false;


/* ---------- Helpers ---------- */

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


/* ---------- Meow and Purr Playback ---------- */

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


/* ---------- Begin and End Interaction ---------- */

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


/* ---------- Input Listeners ---------- */

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


/* =================================
   6. Leo's Photograph Viewer
================================= */

/* ---------- Elements ---------- */

// Find the photograph viewer elements
const leoPhotoFrames = document.querySelectorAll(".leo-photo-frame");
const leoPhotoViewer = document.getElementById("leo-photo-viewer");
const leoEnlargedPhoto = document.getElementById("leo-enlarged-photo");
const closeLeoPhotoButton = document.getElementById("close-leo-photo");


/* ---------- Open ---------- */

// Open a photograph when its frame is clicked
leoPhotoFrames.forEach(function (frame) {

    frame.addEventListener("click", function () {

        const photo = frame.querySelector(".leo-photo-image");

        if (!photo) {
            return;
        }

        // Display the selected photograph
        leoEnlargedPhoto.src = photo.src;
        leoEnlargedPhoto.alt = photo.alt;

        leoPhotoViewer.hidden = false;

    });

});


/* ---------- Close ---------- */

// Close the photograph viewer
function closeLeoPhotoViewer() {

    leoPhotoViewer.hidden = true;

    // Clear the previous photograph
    leoEnlargedPhoto.src = "";

}

// Close button
closeLeoPhotoButton.addEventListener("click", function () {

    closeLeoPhotoViewer();

});

// Clicking outside the photograph also closes it
leoPhotoViewer.addEventListener("click", function (event) {

    if (event.target === leoPhotoViewer) {
        closeLeoPhotoViewer();
    }

});

// Escape key closes the viewer
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape" && !leoPhotoViewer.hidden) {
        closeLeoPhotoViewer();
    }

});


/* =================================
   7. Beach Discovery System
================================= */

/* ---------- Elements ---------- */

// Beach discovery elements
const beachShells = document.querySelectorAll(".beach-shell");

const beachDiscovery = document.getElementById("beach-discovery");
const beachDiscoveryTitle = document.getElementById("beach-discovery-title");
const beachDiscoveryText = document.getElementById("beach-discovery-text");
const closeBeachDiscoveryButton = document.getElementById("close-beach-discovery");


/* ---------- State and Messages ---------- */

// Separate storage for Beach discoveries
const BEACH_STORAGE_KEY = "gardenForGhala_beachDiscoveries";

// Track discovered shells
const discoveredShells = new Set();

// Beach discovery messages
const beachMessages = {

    "shell-one": {
        title: "A Little Piece of the Shore",
        message: "The waves have carried this little shell a long way. Now it has found its way here."
    },

    "shell-two": {
        title: "A Quiet Moment",
        message: "Some things are worth slowing down for. Even the smallest discoveries can make a place feel special."
    }

};


/* ---------- Saving and Restoring ---------- */

// Load previously discovered shells
try {

    const savedShells = JSON.parse(
        localStorage.getItem(BEACH_STORAGE_KEY) || "[]"
    );

    if (Array.isArray(savedShells)) {

        savedShells.forEach(function (id) {

            if (beachMessages[id]) {
                discoveredShells.add(id);
            }

        });

    }

} catch (error) {

    console.log("Could not load saved Beach discoveries.");

}


/* ---------- Shell Clicks ---------- */

// Handle shell clicks
beachShells.forEach(function (shell) {

    shell.addEventListener("click", function () {

        const shellId = shell.dataset.shellId;
        const discovery = beachMessages[shellId];

        if (!discovery) {
            return;
        }

        // Display the discovery
        beachDiscoveryTitle.textContent = discovery.title;
        beachDiscoveryText.textContent = discovery.message;

        beachDiscovery.hidden = false;

        // Save the discovery only once
        if (!discoveredShells.has(shellId)) {

            discoveredShells.add(shellId);

            localStorage.setItem(
                BEACH_STORAGE_KEY,
                JSON.stringify(Array.from(discoveredShells))
            );

        }

    });

});


/* ---------- Close ---------- */

// Close the Beach discovery message
closeBeachDiscoveryButton.addEventListener("click", function () {

    beachDiscovery.hidden = true;

});
