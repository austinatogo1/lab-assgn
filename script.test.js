const { changeBackgroundColor, resetBackgroundColor, displayKeyPress, displayUserInput } = require('./script');

describe('Event Listener Functionality', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <button id="colorButton">Change Color</button>
            <p id="keyDisplay"></p>
            <input id="userInput" type="text" />
            <div id="outputDisplay"></div>
        `;
    });

    test('changeBackgroundColor() updates body style', () => {
        changeBackgroundColor();
        expect(document.body.style.backgroundColor).not.toBe('');
    });

    test('resetBackgroundColor() sets background to white', () => {
        document.body.style.backgroundColor = 'red';
        resetBackgroundColor();
        expect(document.body.style.backgroundColor).toBe('white');
    });

    test('displayKeyPress() updates text content', () => {
        const event = { key: 'Enter' };
        displayKeyPress(event);
        expect(document.getElementById('keyDisplay').textContent).toBe('Key pressed: Enter');
    });

    test('displayUserInput() mirrors input value', () => {
        const input = document.getElementById('userInput');
        input.value = 'Hello World';
        displayUserInput();
        expect(document.getElementById('outputDisplay').textContent).toBe('Hello World');
    });
});

test('handleMouseOver() applies scaling effect', () => {
    const button = document.getElementById('colorButton');
    handleMouseOver();
    expect(button.style.transform).toBe('scale(1.1)');
});

test('handleMouseOut() resets scaling effect', () => {
    const button = document.getElementById('colorButton');
    handleMouseOut();
    expect(button.style.transform).toBe('scale(1)');
});