let deleterBox = document.querySelector('.deleter');


fetch('/api/questions')
  .then((res) => res.json())
  .then((question) => {
    question.forEach((e, i) => {
      if (i % 4 === 0) {
        let actualQuestion = document.createElement('p');
        actualQuestion.innerText = e.question;
        actualQuestion.setAttribute('class', 'actualQuestion');
        let trigger = document.createElement('p');
        trigger.setAttribute('class', 'deletebutton');
        trigger.innerText = 'delete';
        let questionHolder = document.createElement('div');
        questionHolder.setAttribute('class', 'questionHolder')
        actualQuestion.appendChild(trigger);
        questionHolder.appendChild(actualQuestion);
        deleterBox.appendChild(questionHolder);
      }
    });

  });