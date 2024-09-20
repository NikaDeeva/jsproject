const field = document.getElementById('footballField');
const ball = document.getElementById('ball');

field.addEventListener('click', event => {
  const fieldWidth = field.offsetWidth;
  const fieldHeight = field.offsetHeight;
  const ballWidth = ball.offsetWidth;
  const ballHeight = ball.offsetHeight;

  let clickX = event.pageX - field.offsetLeft;
  let clickY = event.pageY - field.offsetTop;

  const minX = ballWidth / 2;
  const minY = ballHeight / 2;
  const maxX = fieldWidth - ballWidth / 2;
  const maxY = fieldHeight - ballHeight / 2;

  const ballX = Math.min(Math.max(clickX, minX), maxX);
  const ballY = Math.min(Math.max(clickY, minY), maxY);

  ball.style.transform = `translate(${ballX - minX}px, ${ballY - minY}px)`;
});
