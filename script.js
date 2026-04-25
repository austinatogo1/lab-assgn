
function changeBackgroundColor() {
    // Generates a valid hex color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = randomColor;
}


function resetBackgroundColor() {
    // Clears the style by setting it back to white/empty
    document.body.style.backgroundColor = 'white';
}


function displayKeyPress(event) {
    const display = document.getElementById('keyDisplay');
    if (display) {
        // Updates display directly with the key value
        display.textContent = `Key pressed: ${event.key}`;
    }
}


function displayUserInput() {
    const inputField = document.getElementById('userInput');
    const outputDisplay = document.getElementById('outputDisplay');
    if (inputField && outputDisplay) {
        // Real-time update of text content
        outputDisplay.textContent = inputField.value;
    }
}


function init() {
    const colorButton = document.getElementById('colorButton');
    const inputField = document.getElementById('userInput');

    // Button Click -> Change Color
    if (colorButton) {
        colorButton.addEventListener('click', changeBackgroundColor);
    }

    // Body Double-Click -> Reset Color
    document.body.addEventListener('dblclick', resetBackgroundColor);

    // Document Keydown -> Display Key
    document.addEventListener('keydown', displayKeyPress);

    // Input Realtime -> Display User Input
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