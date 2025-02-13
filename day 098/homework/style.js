let playerData = {
    name: '',
    score: 0,
    level: 1,
    backgroundColor: '#ffffff'
};

let currentNumber;

// Check if user data exists
window.onload = function() {
    const savedData = localStorage.getItem('playerData');
    if (savedData) {
        playerData = JSON.parse(savedData);
        document.getElementById('nameModal').classList.add('hidden');
        initializeGame();
    }
};

function saveName() {
    const nameInput = document.getElementById('nameInput');
    if (nameInput.value.trim() === '') {
        alert('გთხოვთ შეიყვანოთ სახელი');
        return;
    }
    
    playerData.name = nameInput.value;
    localStorage.setItem('playerData', JSON.stringify(playerData));
    document.getElementById('nameModal').classList.add('hidden');
    initializeGame();
}

function initializeGame() {
    document.getElementById('gameContainer').classList.remove('hidden');
    document.getElementById('playerNameDisplay').textContent = playerData.name;
    document.getElementById('scoreDisplay').textContent = playerData.score;
    document.body.style.backgroundColor = playerData.backgroundColor;
    document.getElementById('colorPicker').value = playerData.backgroundColor;
    updateDifficultyDisplay();
    generateNewNumber();
}

function setBackgroundColor() {
    const color = document.getElementById('colorPicker').value;
    document.body.style.backgroundColor = color;
    playerData.backgroundColor = color;
    localStorage.setItem('playerData', JSON.stringify(playerData));
}

function generateNewNumber() {
    const max = Math.pow(2, playerData.level);
    currentNumber = Math.floor(Math.random() * max) + 1;
    updateDifficultyDisplay();
}

function updateDifficultyDisplay() {
    const max = Math.pow(2, playerData.level);
    document.getElementById('rangeDisplay').textContent = `1-${max}`;
}

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = parseInt(guessInput.value);
    const messageElement = document.getElementById('message');

    if (isNaN(guess)) {
        messageElement.textContent = 'გთხოვთ შეიყვანოთ რიცხვი';
        messageElement.className = 'message error';
        return;
    }

    if (guess === currentNumber) {
        playerData.score += 1;
        playerData.level += 1;
        messageElement.textContent = 'სწორია! +1 ქულა';
        messageElement.className = 'message success';
        document.getElementById('scoreDisplay').textContent = playerData.score;
        localStorage.setItem('playerData', JSON.stringify(playerData));
        generateNewNumber();
    } else {
        messageElement.textContent = 'არასწორია, სცადეთ თავიდან';
        messageElement.className = 'message error';
    }

    guessInput.value = '';
}