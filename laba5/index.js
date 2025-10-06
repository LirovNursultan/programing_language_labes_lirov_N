let count = 0;
let intervalId = null;
const counterDisplay = document.getElementById('counter');
const body = document.body;
const speedPlus = document.getElementById('speedPlus');
const reset = document.getElementById('reset');
const speedMinus = document.getElementById('speedMinus');

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateCounter() {
    counterDisplay.textContent = formatTime(count);
}

function changeSpeed(action) {
    if (intervalId) {
        clearInterval(intervalId);
    }
    if (action === 'increase') {
        body.style.backgroundColor = 'lightgreen';
        counterDisplay.style.color = 'lightcoral';
        intervalId = setInterval(() => {
            count++;
            updateCounter();
        }, 1000);
    } else if (action === 'decrease') {
        body.style.backgroundColor = 'lightcoral';
        counterDisplay.style.color = 'lightgreen';
        intervalId = setInterval(() => {
            if (count > 0) {
                count--;
                updateCounter();
            }
        }, 1000);
    }
}

function resetCounter() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
    count = 0;
    updateCounter();
    body.style.backgroundColor = 'grey';
    counterDisplay.style.color = 'black';
}

speedPlus.addEventListener('click', () => changeSpeed('increase'));
reset.addEventListener('click', resetCounter);
speedMinus.addEventListener('click', () => changeSpeed('decrease'));

updateCounter();