/**
 * @jest-environment jsdom
 */

const {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput
} = require("../script");

beforeEach(() => {
  document.body.innerHTML = `
    <button id="colorBtn"></button>
    <p id="keyDisplay"></p>
    <input id="textInput" />
    <p id="textDisplay"></p>
  `;
});

test("changes background color", () => {
  changeBackgroundColor();
  expect(document.body.style.backgroundColor).toBe("lightblue");
});

test("resets background color", () => {
  document.body.style.backgroundColor = "red";
  resetBackgroundColor();
  expect(document.body.style.backgroundColor).toBe("white");
});

test("displays key press", () => {
  displayKeyPress({ key: "A" });
  expect(document.getElementById("keyDisplay").textContent)
    .toBe("Key Pressed: A");
});

test("displays user input", () => {
  document.getElementById("textInput").value = "Hello";
  displayUserInput();
  expect(document.getElementById("textDisplay").textContent)
    .toBe("Hello");
});