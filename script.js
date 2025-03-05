const colorDisplay = document.getElementById('colorDisplay');
const options = document.querySelectorAll('.colorOption');
const message = document.getElementById('message');
const resetButton = document.getElementById('resetButton');

let correctColor;

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function generateOptions() {
    const colors = [];
    for (let i = 0; i < 3; i++) {
        colors.push(generateRandomColor());
    }
    correctColor = colors[Math.floor(Math.random() * 3)];
    colorDisplay.textContent = correctColor;
    options.forEach((option, index) => {
        option.style.backgroundColor = colors[index];
    });
}

function checkColor(event) {
    const selectedColor = event.target.style.backgroundColor;
    if (selectedColor === correctColor) {
        message.textContent = "Correct!";
        options.forEach(option => {
            option.style.backgroundColor = correctColor;
            option.style.pointerEvents = 'none';
        });
    } else {
        message.textContent = "Try Again!";
        event.target.style.opacity = '0';
    }
}

function resetGame() {
    generateOptions();
    message.textContent = "";
    options.forEach(option => {
        option.style.opacity = '1';
        option.style.pointerEvents = 'auto';
    });
}

options.forEach(option => {
    option.addEventListener('click', checkColor);
});

resetButton.addEventListener('click', resetGame);

// Initialize the game
generateOptions();