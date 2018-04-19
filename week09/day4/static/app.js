let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let theQuestion = document.querySelector('h2');
let scoreTable = document.querySelector('header');
let container = document.querySelector('.container');
let score = 0;
let rounds = 0;

function writeQuestionOut(index) {
  fetch('/api/questions')
    .then((res) => res.json())
    .then((question) => {
      scoreTable.innerText = `SCORE: ${score}`
      theQuestion.innerText = question[index].question;
      one.innerText = question[index].answer;
      two.innerText = question[index + 1].answer;
      three.innerText = question[index + 2].answer;
      four.innerText = question[index + 3].answer;
    });
}

writeQuestionOut(rounds);

one.addEventListener('click', () => {
  fetchMyAnswer(one, rounds);
});
two.addEventListener('click', () => {
  fetchMyAnswer(two, rounds + 1);
});
three.addEventListener('click', () => {
  fetchMyAnswer(three, rounds + 2);
});
four.addEventListener('click', () => {
  fetchMyAnswer(four, rounds + 3);
});

function fetchMyAnswer(button, index) {
  fetch('/api/questions')
    .then((res) => res.json())
    .then((question) => {
      if (question[rounds] !== undefined && question[rounds].is_correct !== undefined) {
        if (question[index].is_correct === 1) {
          button.classList.add('correct');
          score++;
          if (rounds <= question.length - 4) {
            rounds += 4;
          }
        } else {
          button.classList.add('incorrect')
          if (rounds <= question.length - 4) {
            rounds += 4;
          }
        }
        seeYourScores()

        setTimeout(() => {
          reset();
          writeQuestionOut(rounds);
        }, 1000);
      }
    });
};

function reset() {
  one.classList.remove('correct');
  one.classList.remove('incorrect');
  two.classList.remove('correct');
  two.classList.remove('incorrect');
  three.classList.remove('correct');
  three.classList.remove('incorrect');
  four.classList.remove('correct');
  four.classList.remove('incorrect');
}

function ggwp() {

  let finalScore = document.createElement('h1');
  finalScore.setAttribute('class', 'final');
  finalScore.innerText = `You scored ${score}/10`;
  container.appendChild(finalScore);
}
let message = document.createElement('h1');
message.innerText = 'Watch your score';

message.addEventListener('click', () => {
  container.removeChild(message);
  ggwp()
})

function seeYourScores() {
  if (rounds === 40) {
    message.setAttribute('class', 'final');
    message.classList.add('clickme');
    container.appendChild(message);
  }
}

