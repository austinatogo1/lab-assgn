//Handle Button Clicks
const colorButton = document.getElementById('colorButton');

/**
 * Changes the background color of the body to a random color
 */
function changeBackgroundColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}

/**
 * Resets the background color to white
 */
function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
}

// Capture Keyboard Input
/**
 * Updates a paragraph to show the key pressed by the user
 * @param {Event} event - The keyboard event
 */
function displayKeyPress(event) {
    const display = document.getElementById('keyDisplay');
    if (display) {
        display.textContent = `Key pressed: ${event.key}`;
    }
}

//Process Text Input
/**
 * Displays real-time input from a text field
 */
function displayUserInput() {
    const inputField = document.getElementById('userInput');
    const outputDisplay = document.getElementById('outputDisplay');
    if (inputField && outputDisplay) {
        outputDisplay.textContent = inputField.value;
    }
}

//Combine Multiple Events (Initialization)
function init() {
    // Click Listener
    if (colorButton) {
        colorButton.addEventListener('click', changeBackgroundColor);
    }

    // Double Click Listener to Reset
    document.body.addEventListener('dblclick', resetBackgroundColor);

    // Keydown Listener
    document.addEventListener('keydown', displayKeyPress);

    // Input Listener for real-time updates
    const inputField = document.getElementById('userInput');
    if (inputField) {
        inputField.addEventListener('input', displayUserInput);
    }
}

// ... (previous functions remain the same)

/**
 * Task 2 - Step 4 (Extended): Add Hover Effects
 * Highlights the button when the mouse enters
 */
function handleMouseOver() {
    const colorButton = document.getElementById('colorButton');
    if (colorButton) {
        colorButton.style.transform = 'scale(1.1)';
        colorButton.style.transition = 'transform 0.2s';
        colorButton.style.boxShadow = '0px 4px 15px rgba(0,0,0,0.3)';
    }
}

/**
 * Resets the button style when the mouse leaves
 */
function handleMouseOut() {
    const colorButton = document.getElementById('colorButton');
    if (colorButton) {
        colorButton.style.transform = 'scale(1)';
        colorButton.style.boxShadow = 'none';
    }
}

// Update the init() function to include these listeners
function init() {
    const colorButton = document.getElementById('colorButton');
    
    if (colorButton) {
        colorButton.addEventListener('click', changeBackgroundColor);
        // Added Mouseover and Mouseout
        colorButton.addEventListener('mouseover', handleMouseOver);
        colorButton.addEventListener('mouseout', handleMouseOut);
    }

    document.body.addEventListener('dblclick', resetBackgroundColor);
    document.addEventListener('keydown', displayKeyPress);

    const inputField = document.getElementById('userInput');
    if (inputField) {
        inputField.addEventListener('input', displayUserInput);
    }
}

// Run init when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Export functions for Jest testing
if (typeof module !== 'undefined') {
    module.exports = { 
        changeBackgroundColor, 
        resetBackgroundColor, 
        displayKeyPress, 
        displayUserInput 
    };
}