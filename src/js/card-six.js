const dino = document.querySelector('.dino');
const player = document.querySelector('.dino__player');
const cactus = document.querySelector('.dino__cactus');
const pointsEl = document.querySelector('.dino__points');
const overlayEl = document.querySelector('.dino__overlay');
const resultEl = document.querySelector('.dino__results');
const btnEl = document.querySelector('.dino__btn');

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'ArrowUp') {
    event.preventDefault();
  }
}); 
let x = Math.floor(
  player.getBoundingClientRect().x + player.getBoundingClientRect().width / 2
);
let y = Math.floor(
  player.getBoundingClientRect().y + player.getBoundingClientRect().width / 2
);

let points = 0;
let timer1;
let timer2;
let timer3;
let isAnimation = false;

const resetGame = () => {
  player.style.left = '100px';
  player.style.bottom = '15px';
  cactus.style.right = '-100px';
  cactus.style.bottom = '15px';
  points = 0;
};

const cactusRun = () => {
  cactus.style.right = `${
    Number(cactus.style.right.split('px')[0]) + 8 + points * 0.05
  }px`;
  x = Math.floor(
    cactus.getBoundingClientRect().x + cactus.getBoundingClientRect().width / 2
  );
  y = Math.floor(
    cactus.getBoundingClientRect().y + cactus.getBoundingClientRect().width / 2
  );

  if (x < 0) {
    cactus.style.display = 'none';
    cactus.style.right = '-50px';
    setTimeout(() => (cactus.style.display = 'block'), 200);
  }
};

const checkCollision = () => {
  const playerRect = player.getBoundingClientRect();
  const cactusRect = cactus.getBoundingClientRect();

  const playerX = Math.floor(playerRect.x);
  const playerY = Math.floor(playerRect.y);
  const playerW = Math.floor(playerRect.width);
  const playerH = Math.floor(playerRect.height);

  const cactusX = Math.floor(cactusRect.x);
  const cactusY = Math.floor(cactusRect.y);
  const cactusW = Math.floor(cactusRect.width);
  const cactusH = Math.floor(cactusRect.height);

  if (
    playerX < cactusX + cactusW &&
    playerX + playerW > cactusX &&
    playerY < cactusY + cactusH &&
    playerY + playerH > cactusY
  ) {
    overlayEl.style.display = 'flex';
    player.style.display = 'none';
    pointsEl.style.display = 'none';
    btnEl.style.display = 'flex';
    if (points >= localStorage.getItem('dinoRecord'))
      localStorage.setItem('dinoRecord', points);
    resultEl.innerHTML = `Game over
    <br>
    ${points} points
    <br>
    Your record is ${localStorage.getItem('dinoRecord')}`;
    clearInterval(timer1);
    clearInterval(timer2);
    clearInterval(timer3);
    resetGame();
  }
};

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp' && !isAnimation) {
    isAnimation = true;
    const randomColor = `#` + Math.floor(Math.random() * 16777215).toString(16);
    player.style.fill = `${randomColor}`;
    player.style.bottom = '100px';
    setTimeout(() => (player.style.bottom = '15px'), 400);
    setTimeout(() => (isAnimation = false), 500);
  }
});
btnEl.addEventListener('click', () => {
  overlayEl.style.display = 'none';
  player.style.display = 'block';
  pointsEl.style.display = 'block';
  timer1 = setInterval(cactusRun, 50);
  timer2 = setInterval(checkCollision, 100);
  timer3 = setInterval(() => {
    points += 1;
    pointsEl.innerHTML = `${points} points`;
  }, 50);
});

const startGame = e => {
  if (e.key === ' ') {
    overlayEl.style.display = 'none';
    overlayEl.style.backgroundColor = 'darkgrey';
    timer1 = setInterval(cactusRun, 50);
    timer2 = setInterval(checkCollision, 100);
    timer3 = setInterval(() => {
      points += 1;
      pointsEl.innerHTML = `${points} points`;
    }, 50);

    document.removeEventListener('keydown', startGame);
  }
};

document.addEventListener('keydown', startGame);

resultEl.innerHTML = `Press 'Space' to start the game
<br>
Press 'ArrowUp' to jump
<br>
Your record is ${
  localStorage.getItem('dinoRecord') === null
    ? 0
    : localStorage.getItem('dinoRecord')
}`;
