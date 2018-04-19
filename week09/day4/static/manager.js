let deleterBox = document.querySelector('.deleter');


fetch('/api/questions')
  .then((res) => res.json())
  .then((question) => {
     console.log(question.length)
      // for (let i = 0; i < question.length; i + 4) {
      //   console.log(question[i])
      // }
    });