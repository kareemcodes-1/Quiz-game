const quizData =  [
    {

        question: "1. Who is the Richest Man in the World?",
        options: ["Bill Gates", "Elon Musk", "Warren Buffet", "Jeff Bezos"],
        answer: 1,
    },
    {
        question: "2. Who is the toughest man in the world?",
        options: ["David Goggins", "Kai Cenat", "John Cena", "Kareem"],
        answer: 0,
    },
    {
        question: "3. What is the largest animal in the ocean?",
        options: ["Blue Whale", "Dolphin", "Octopus", "Sea Lion"],
        answer: 0,
    },
    {
        question: "4. What year did Nigeria gain independance",
        options: ["1999", "1844", "1920", "1960"],
        answer: 3,
    },
]

let currentQuestion = 0;
let score = 0;
let nextBtn = document.querySelector('.next-btn');


function displayQuiz(){
    const question = document.querySelector('.question');
    const options = document.getElementById('options');

    question.textContent = ''; 
    options.innerHTML = ''; 

        nextBtn.classList.add('disabled');
        nextBtn.disabled = true;

    question.textContent = quizData[currentQuestion].question;
    quizData[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.id = index;
        button.textContent = option;
        options.appendChild(button);

        button.addEventListener('click', () => {
            checkAnswer(Number(button.id))
        })
    });
}



function checkAnswer(answer){
    const options = document.getElementById('options');

    nextBtn.classList.remove('disabled');
    nextBtn.disabled = false;

    if(answer === quizData[currentQuestion].answer){
        options.children[answer].classList.add('green');
        options.children[answer]
        currentQuestion++;
        score+=100;
        setTimeout(() => {
            if (currentQuestion < quizData.length) {
                displayQuiz();
            }else{
                endQuiz();
            }
        }, 1000);
    }else{
        options.children[answer].classList.add('red');
        currentQuestion++;
        setTimeout(() => {
            if (currentQuestion < quizData.length) {
                displayQuiz();
            }else{
                endQuiz();
            }
        }, 1000);
    }
}



nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        displayQuiz();
    } else {
        endQuiz();
    }
});



function endQuiz(){
    document.querySelector('.box').innerHTML = `<div class="flex"><h1>Quiz ended</h1> <h1>Score: ${score}</h1></div><div class="play">Play again?</div>`;
    const playAgain = document.querySelector('.play');
    playAgain.addEventListener('click', () => {
        resetQuiz();
    });
}

function resetQuiz(){
    currentQuestion = 0;
    score = 0;
    document.querySelector('.box').innerHTML = '<div> <h3 class="question"></h3> <div class="options" id="options"> </div> </div> <button type="button" class="next-btn">Next</button>'
    displayQuiz();
}

window.addEventListener('DOMContentLoaded', () => {
    displayQuiz();
})



