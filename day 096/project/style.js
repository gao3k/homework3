let cookies = 0;
let multiplier = 1;
let autoClickers = 0;

const elements = {
    cookies: document.getElementById('cookies'),
    multiplier: document.getElementById('multiplier'),
    autoClickers: document.getElementById('autoClickers'),
    multiplierCost: document.getElementById('multiplierCost'),
    autoClickerCost: document.getElementById('autoClickerCost'),
    buyMultiplier: document.getElementById('buyMultiplier'),
    buyAutoClicker: document.getElementById('buyAutoClicker')
};

function updateDisplay() {
    elements.cookies.textContent = Math.floor(cookies);
    elements.multiplier.textContent = multiplier;
    elements.autoClickers.textContent = autoClickers;
    
    const multiplierCost = Math.floor(10 * Math.pow(1.5, multiplier - 1));
    const autoClickerCost = Math.floor(15 * Math.pow(1.8, autoClickers));
    
    elements.multiplierCost.textContent = multiplierCost;
    elements.autoClickerCost.textContent = autoClickerCost;
    
    elements.buyMultiplier.disabled = cookies < multiplierCost;
    elements.buyAutoClicker.disabled = cookies < autoClickerCost;
}

document.getElementById('cookie-btn').addEventListener('click', () => {
    cookies += multiplier;
    updateDisplay();
});

elements.buyMultiplier.addEventListener('click', () => {
    const cost = Math.floor(10 * Math.pow(1.5, multiplier - 1));
    if (cookies >= cost) {
        cookies -= cost;
        multiplier += 1;
        updateDisplay();
    }
});

elements.buyAutoClicker.addEventListener('click', () => {
    const cost = Math.floor(15 * Math.pow(1.8, autoClickers));
    if (cookies >= cost) {
        cookies -= cost;
        autoClickers += 1;
        updateDisplay();
    }
});

setInterval(() => {
    if (autoClickers > 0) {
        cookies += autoClickers * multiplier;
        updateDisplay();
    }
}, 1000);

updateDisplay();