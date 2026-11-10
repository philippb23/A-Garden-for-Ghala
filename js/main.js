
// Find the screens
const welcomeScreen = document.getElementById("welcome-screen");
const forestScreen = document.getElementById("forest-screen");

// Find the buttons
const enterButton = document.getElementById("enter-button");
const backButton = document.getElementById("back-button");


// Enter the forest
enterButton.addEventListener("click", function () {

    welcomeScreen.classList.remove("active");
    forestScreen.classList.add("active");

});


// Return to the welcome screen
backButton.addEventListener("click", function () {

    forestScreen.classList.remove("active");
    welcomeScreen.classList.add("active");

});
