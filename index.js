/*  Task 1: changeBackgroundColor 
*/
function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

/*Task 2: resetBackgroundColor 
 */
function resetBackgroundColor() {
  document.body.style.backgroundColor = '';
}

/* Task 3: displayKeyPress(event)
*/
function displayKeyPress(event) {
  if (!event || !event.key) return;
  const display = document.getElementById('keyPressDisplay');
  if (display) {
    display.textContent = `Key pressed: ${event.key}`;
  }
}

/* Task 4: displayUserInput
 */
function displayUserInput() {
  const inputField   = document.getElementById('textInput');
  const outputDisplay = document.getElementById('textInputDisplay');
  if (inputField && outputDisplay) {
    outputDisplay.textContent = `You typed: ${inputField.value}`;
  }
}

/* setupEventListeners 
 */
function setupEventListeners() {
  // Test line 37: changeColorButton.click()
  const changeColorButton = document.getElementById('changeColorButton');
  if (changeColorButton) {
    changeColorButton.addEventListener('click', changeBackgroundColor);
  }

  const resetColorButton = document.getElementById('resetColorButton');
  if (resetColorButton) {
    resetColorButton.addEventListener('dblclick', resetBackgroundColor);
  }

  document.addEventListener('keydown', displayKeyPress);

  // Test line 82: textInput.dispatchEvent(new Event('input'))
  const textInput = document.getElementById('textInput');
  if (textInput) {
    textInput.addEventListener('input', displayUserInput);
  }
}

setupEventListeners();

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

/* ── CommonJS export for Jest ───────────────────────────── */
if (typeof module !== 'undefined') {
  module.exports = {
    setupEventListeners,
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
  };
}