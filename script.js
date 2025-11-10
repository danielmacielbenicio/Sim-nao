const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const card = document.getElementById('card');
const pad = 10;
let isAbsolute = false;


function moveNoToRandomPosition() {
const cardRect = card.getBoundingClientRect();
const nRect = noBtn.getBoundingClientRect();
const maxX = cardRect.width - nRect.width - pad;
const maxY = cardRect.height - nRect.height - pad - 40;
const x = Math.floor(Math.random() * maxX);
const y = Math.floor(Math.random() * maxY);
noBtn.style.left = x + 'px';
noBtn.style.top = y + 'px';
}


noBtn.addEventListener('mouseenter', () => {
if (isAbsolute) {
moveNoToRandomPosition();
}
});


noBtn.addEventListener('click', (e) => {
e.preventDefault();
if (!isAbsolute) {
noBtn.style.position = 'absolute';
isAbsolute = true;
}
moveNoToRandomPosition();
});


yesBtn.addEventListener('click', () => {
alert('Você clicou em SIM 😄');
});