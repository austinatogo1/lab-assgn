// ===== FUNCTIONS =====

// 1. Change background color
function changeBackgroundColor() {
  document.body.style.backgroundColor = "lightblue";
}

// 2. Reset background color
function resetBackgroundColor() {
  document.body.style.backgroundColor = "white";
}

// 3. Display key pressed
function displayKeyPress(event) {
  const keyDisplay = document.getElementById("keyDisplay");
  keyDisplay.textContent = `Key Pressed: ${event.key}`;
}

// 4. Display user input (real-time)
function displayUserInput() {
  const input = document.getElementById("textInput").value;
  const display = document.getElementById("textDisplay");
  display.textContent = input;
}


// ===== EVENT LISTENERS =====

// Button click
document.getElementById("colorBtn")
  .addEventListener("click", changeBackgroundColor);

// Double click anywhere on body
document.body
  .addEventListener("dblclick", resetBackgroundColor);

// Keyboard input
document.addEventListener("keydown", displayKeyPress);

// Real-time typing
document.getElementById("textInput")
  .addEventListener("input", displayUserInput);


// ===== EXPORTS FOR TESTING =====
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput
};