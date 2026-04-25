/**
 * Task: changeBackgroundColor generates a valid color
 * Logic: Must produce a string that JSDOM can recognize as a color.
 */
function changeBackgroundColor() {
    // Generate an RGB string as some test environments prefer it over Hex
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    
    document.body.style.backgroundColor = rgbColor;
}

/**
 * Task: resetBackgroundColor clears the body background color
 * Test Requirement: Expected "", Received "rgb(...)". 
 * Logic: Setting to "" removes the inline style entirely.
 */
function resetBackgroundColor() {
    document.body.style.backgroundColor = "";
}

/**
 * Task: displayKeyPress updates the display
 * Test Requirement: Expected "Key pressed: B"
 */
function displayKeyPress(event) {
    const display = document.getElementById('keyDisplay');
    if (display) {
        // Must match the "Key pressed: X" format exactly
        display.textContent = `Key pressed: ${event.key}`;
    }
}

/**
 * Task: displayUserInput updates in real-time
 * Test Requirement: Expected "You typed: Hello"
 */
function displayUserInput() {
    const inputField = document.getElementById('userInput');
    const outputDisplay = document.getElementById('outputDisplay');
    if (inputField && outputDisplay) {
        // Must match the "You typed: X" format exactly
        outputDisplay.textContent = `You typed: ${inputField.value}`;
    }
}

/**
 * Event Listener Initialization
 */
function init() {
    const colorButton = document.getElementById('colorButton');
    const inputField = document.getElementById('userInput');

    if (colorButton) {
        colorButton.addEventListener('click', changeBackgroundColor);
    }

    // Double-click on body to reset
    document.body.addEventListener('dblclick', resetBackgroundColor);

    // Keydown listener
    document.addEventListener('keydown', displayKeyPress);

    // Input listener for real-time updates
    if (inputField) {
        inputField.addEventListener('input', displayUserInput);
    }
}

// Ensure the script runs after HTML is loaded
document.addEventListener('DOMContentLoaded', init);

// Required for Jest testing environment
if (typeof module !== 'undefined') {
    module.exports = { 
        changeBackgroundColor, 
        resetBackgroundColor, 
        displayKeyPress, 
        displayUserInput 
    };
}