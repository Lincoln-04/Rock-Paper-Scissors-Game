let score = JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties:0
};

updatescoreElement();

function playGame(playerMove) {
const computerMove = getComputerMove();
let result = '';

if (computerMove === playerMove) {
  result = 'It\'s a Tie';
  score.ties += 1;
} else if (
  (playerMove === 'scissors' && computerMove === 'paper') ||
  (playerMove === 'paper' && computerMove === 'rock') ||
  (playerMove === 'rock' && computerMove === 'scissors')
) {
  result = 'You Won!';
  score.wins +=1;
} else {
  result = 'You Lose!';
  score.losses += 1;
}
localStorage.setItem('score',JSON.stringify(score));
document.querySelector('.js-result').innerHTML= `${result}`;
document.querySelector('.js-moves').innerHTML=  
`You <img src="${playerMove}-emoji.png" class="icons"> <img src="${computerMove}-emoji.png" class="icons"> Computer`;
updatescoreElement();
}
function updatescoreElement()
{
document.querySelector('.js-score').innerHTML
=  `Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;
}
function getComputerMove() {
const randomNumber = Math.random();

if (randomNumber < 1 / 3) {
  return 'rock';
} else if (randomNumber < 2 / 3) {
  return 'paper';
} else {
  return 'scissors';
}
}