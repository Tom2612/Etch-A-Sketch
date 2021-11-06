const container = document.querySelector('#container');
const square = document.querySelector('div');
const userInput = document.querySelector('#userInput');
const label = document.querySelector('#label');
const clearAll = document.querySelector('#clear');
const defaultBtn = document.querySelector('#default');
const color = document.querySelector('#userColor');

function createGrid() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.classList.add('unhover');
        container.appendChild(div);
        label.textContent = `Grid size: 16 x 16`;
    }
};

function clear() {
    updateGrid();
};

function updateGrid() {
    container.innerHTML = '';
    container.style.setProperty(
        'grid-template-columns',
        `repeat(${userInput.value}, 2fr)`
    );
    container.style.setProperty(
        'grid-template-rows',
        `repeat(${userInput.value}, 2fr)`
    );
    for (let i = 0; i < userInput.value * userInput.value; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.classList.add('unhover');
        container.appendChild(div);
    };
    label.textContent = `Grid size: ${userInput.value} x ${userInput.value}`;
};

userInput.oninput = function () {
    label.textContent = `Grid size: ${this.value} x ${this.value}`;
};

clearAll.addEventListener('click', clear);

square.addEventListener('mouseover', function (e) {
    e.target.classList.remove('unhover');
    e.target.style.backgroundColor = userColor.value;

});

defaultBtn.addEventListener('click', () => {
    container.textContent = '';
    userInput.value = 16;
    userColor.value = '#000';
    updateGrid();
})

userInput.addEventListener('change', updateGrid);

createGrid();