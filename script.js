const questions = [
    {
        question: "What is JavaScript?",
        options: ["A programming language", "A fruit", "A car"],
        answer: 0
    },
    {
        question: "What is HTML?",
        options: ["A markup language", "A planet", "A programming language"],
        answer: 0
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheet", "Computer Style Sheet", "Creative Style Sheet"],
        answer: 0
    },
    {
        question: "How do you declare a variable in JavaScript?",
        options: ["x = 10;", "var x = 10;", "int x = 10;"],
        answer: 1
    },
    {
        question: "What is the purpose of `addEventListener` in JavaScript?",
        options: ["To do math calculations", "To add two numbers", "To attach an event handler to an element"],
        answer: 2
    }

    // More questions here
];
    
const quizSection = document.getElementById('quiz');
const resultSection = document.getElementById('result');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start');

let currentQuestion = 0;
let score = 0;
let timeLeft = 60; // timeLeft variable

function loadQuestion() {
    if (currentQuestion <= questions.length - 1 ) {
        const questionData = questions[currentQuestion];
        quizSection.querySelector('h2').textContent = `Question ${currentQuestion + 1}`;
        quizSection.querySelector('p').textContent = questionData.question;
        const optionsList = quizSection.querySelector('ul');
        optionsList.innerHTML = '';
        questionData.options.forEach((option, index) => {
            const optionButton = document.createElement('button');
            optionButton.textContent = option;
            optionButton.addEventListener('click', () => checkAnswer(index));
            optionsList.appendChild(document.createElement('li')).appendChild(optionButton);
        });
    } else {
        showResult();
    }
}
function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].answer) {
      score++;
    } else {
      timeLeft -= timePenalty;
      if (timeLeft < 0) timeLeft = 0;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      endQuiz(); // Call the function to handle the end of the quiz
    }
  }

  function showResult() {
    quizSection.classList.add('hidden');
    resultSection.classList.remove('hidden');
    scoreDisplay.textContent = score;
  }

  // Function to handle the end of the quiz
function endQuiz() {
    clearInterval(timer); // Stop the timer
    showResult();
  }
  

loadQuestion();

const startButton = document.getElementById('start');
let timer;

startButton.addEventListener('click', startQuiz);

function startQuiz() {
   
    startButton.style.display = 'none';
  
    timer = setInterval(updateTimer, 1000); 
    loadQuestion(); 
  }

  const timePenalty = 10;
let timeLeft = 60;

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].answer) {
        score++;
  } else {
    timeLeft -= timePenalty;
    if (timeLeft < 0) timeLeft = 0;
  }
  currentQuestion++;
  loadQuestion();
}




