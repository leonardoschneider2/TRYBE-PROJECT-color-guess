const dificult = 6;

// DESCRIÇÃO DAS FUNÇÕES

function confirmAnswer(event) {
  const sColor = window.getComputedStyle(event.target, null).getPropertyValue('background-color');
  const colorRight = document.querySelector('#rgb-color').textContent;
  const answer = document.querySelector('#answer');
  const score = document.querySelector('#score');
  let newScore = parseInt(score.textContent, 10);
  if (sColor === colorRight) {
    answer.innerText = 'Acertou!';
    newScore += 3;
    score.textContent = newScore;
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

function rand() {
  return Math.floor(Math.random() * 255);
}

function createBalls(num) {
  document.querySelector('#answer').innerText = 'Escolha uma cor';
  const colorRight = Math.floor(Math.random() * 6, 10);
  const content = document.querySelector('#content-ball');
  content.textContent = '';
  for (let i = 0; i < num; i += 1) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    content.appendChild(ball);
    const color = `rgb(${rand()}, ${rand()}, ${rand()})`;
    ball.style.backgroundColor = color;
    ball.addEventListener('click', confirmAnswer); // CHAMADA ESCUTADORES DE EVENTOS
    if (i === colorRight) {
      const rgb = window.getComputedStyle(ball, null).getPropertyValue('background-color');
      document.querySelector('#rgb-color').innerText = `${rgb}`;
    }
  }
}

function callCreateBalls() {
  createBalls(dificult);
}

// CHAMADA CÓDIGO INICIAL:

createBalls(dificult);

// CHAMADA ESCUTADORES DE EVENTOS

document.querySelector('#reset-game').addEventListener('click', callCreateBalls);
