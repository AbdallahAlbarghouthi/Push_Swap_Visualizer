let stackA = [];
let stackB = [];
const recordedMoves = [];

function updateUI() {
    const stackAList = document.getElementById('stackAList');
    const stackBList = document.getElementById('stackBList');
    const recordedMovesDisplay = document.getElementById('recordedMoves');

    stackAList.innerHTML = stackA.map(item => `<li>${item}</li>`).join('');
    stackBList.innerHTML = stackB.map(item => `<li>${item}</li>`).join('');
    recordedMovesDisplay.innerHTML = recordedMoves.map(move => `<div>${move}</div>`).join('');
}

function setInitialStack() {
    const input = document.getElementById('initStack').value;
    const initA = input.split(',').map(Number).filter(num => !isNaN(num) && num !== '');
    stackA = [...initA];
    stackB = [];
    recordedMoves.splice(0, recordedMoves.length); // Clear recorded moves
    updateUI();
}

function reset() {
    stackB = [];
    recordedMoves.splice(0, recordedMoves.length);
    updateUI();
}

function rotate(stack, name) {
    if (stack.length < 2) return;
    stack.push(stack.shift());
    recordedMoves.push(name);
    updateUI();
}

function reverseRotate(stack, name) {
    if (stack.length < 2) return;
    stack.unshift(stack.pop());
    recordedMoves.push(name);
    updateUI();
}

function push(from, to, name) {
    if (from.length < 1) return;
    to.unshift(from.shift());
    recordedMoves.push(name);
    updateUI();
}

function topSwap(stack, name) {
    if (stack.length < 2) return;
    const [first, second] = stack.splice(0, 2);
    stack.unshift(second, first);
    recordedMoves.push(name);
    updateUI();
}

document.addEventListener('DOMContentLoaded', () => {
    updateUI();
});