


    const btn = document.querySelector("#btn");

    const quizform = document.querySelector("#quizform");

    const output = document.querySelector(".output");

  

    const correctAnswers = ['90°','right angled'];

    function calculateScore(event) {
        var score = 0;
        var index = 0;
        event.preventDefault();

        const data = new FormData(quizform);


        for (let value of data.values()) {
            if (value === correctAnswers[index]) {
                score = score + 1;
               
            }
            index = index +1;
      }
        output.innerText = "The score is " + score;
     }

    btn.addEventListener('click', calculateScore,"false");






