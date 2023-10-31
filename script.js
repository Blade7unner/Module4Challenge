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
    }
    // Add questions here
];
    
const quizSection = document.getElementById('quiz');
const resultSection = document.getElementById('result');
const scoreDisplay = document.getElementById('score');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const questionData = questions[currentQuestion];
        quizSection.querySelector('h2').textContent = `Question ${currentQuestion + 1}`;
        quizSection.querySelector('p').textContent = questionData.question;
        const optionsList = quizSection.querySelector('ul');
        optionsList.innerHTML = '';


