
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

});


// Return from Leo's Clearing to Forest
leoForestBackButton.addEventListener("click", function () {

    leoScreen.classList.remove("active");
    leoScreen.classList.remove("leo-intro-playing", "leo-controls-hidden");
    forestScreen.classList.add("active");

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



