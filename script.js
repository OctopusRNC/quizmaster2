const questionsData = {
    1: {
        gk: [
            { question: "Who is the President of India?", answers: ["Ram Nath Kovind", "Narendra Modi", "Pranab Mukherjee", "Amit Shah"], correctAnswer: "Ram Nath Kovind" },
            { question: "What is the capital of India?", answers: ["Delhi", "Mumbai", "Chennai", "Kolkata"], correctAnswer: "Delhi" },
            // Add more questions for Class 1
        ],
        computer: [
            { question: "What does CPU stand for?", answers: ["Central Processing Unit", "Central Program Unit", "Computer Processing Unit", "Central Process Unit"], correctAnswer: "Central Processing Unit" },
            // Add more questions for Class 1 Computer
        ],
        // Add other subjects...
    },
    // Add other classes...
};

let currentClass = 1;
let currentSubject = "gk";
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentClass = parseInt(document.getElementById('class-select').value);
    currentSubject = document.getElementById('subject-select').value;
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('score').innerText = score;
    displayQuestion();
}

function displayQuestion() {
    const questionData = questionsData[currentClass][currentSubject][currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    const answersContainer = document.getElementById('answers-container');
    questionContainer.innerHTML = questionData.question;

    // Clear previous answers
    answersContainer.innerHTML = '';

    questionData.answers.forEach(answer => {
        const answerButton = document.createElement('button');
        answerButton.innerText = answer;
        answerButton.classList.add('answer-button');
        answerButton.onclick = () => checkAnswer(answer);
        answersContainer.appendChild(answerButton);
    });
}

function checkAnswer(selectedAnswer) {
    const questionData = questionsData[currentClass][currentSubject][currentQuestionIndex];
    if (selectedAnswer === questionData.correctAnswer) {
        score++;
    }
    document.getElementById('score').innerText = score;
    document.getElementById('next-button').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsData[currentClass][currentSubject].length) {
        displayQuestion();
        document.getElementById('next-button').style.display = 'none';
    } else {
        document.getElementById('question-container').innerHTML = "Quiz Over!";
        document.getElementById('answers-container').innerHTML = "";
        document.getElementById('next-button').style.display = 'none';
    }
}

// Initialize the quiz with default values
document.getElementById('start-button').click();
