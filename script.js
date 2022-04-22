// DESCRIÇÃO DAS FUNÇÕES

function createBalls(num) {
  document.querySelector('#answer').innerText = 'Escolha uma cor';
  const colorRight = Math.floor(Math.random() * 6 );
  const content = document.querySelector('#content-ball');
  content.textContent = '';
  for (let i = 0; i < num; i += 1) {
    const ball = document.createElement('div')
    ball.className = 'ball';
    content.appendChild(ball);
    
    function rand() {
      return Math.floor(Math.random() * 255);
    }
    const color = `rgb(${rand()}, ${rand()}, ${rand()})`;
    ball.style.backgroundColor = color;
    // CHAMADA ESCUTADORES DE EVENTOS
    ball.addEventListener('click', confirmAnswer);
    
    if (i === colorRight) {
      const rgb = window.getComputedStyle(ball, null).getPropertyValue('background-color');
      console.log(i+1, rgb);
      document.querySelector('#rgb-color').innerText = `${rgb}`;
    }
  }  
}

function callCreateBalls() {
  createBalls(dificult);
}

function confirmAnswer(event) {
  const selectedColor = window.getComputedStyle(event.target, null).getPropertyValue('background-color');
  const colorRight = document.querySelector('#rgb-color').textContent;
  const answer = document.querySelector('#answer');
  const score = document.querySelector('#score');
  let newScore = parseInt(score.textContent);
  if (selectedColor === colorRight) {
    answer.innerText = 'Acertou!';
    newScore += 3;
    score.textContent = newScore;
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

// CHAMADA CÓDIGO INICIAL:

let dificult = 6;

createBalls(dificult);

// CHAMADA ESCUTADORES DE EVENTOS

document.querySelector('#reset-game').addEventListener('click', callCreateBalls);