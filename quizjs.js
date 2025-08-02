const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "London", "Paris", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "Java", "HTML", "C++"],
    answer: "HTML"
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Structure", "Code Style Sheet"],
    answer: "Cascading Style Sheets"
  }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionElement.textContent = current.question;
  optionsElement.innerHTML = "";

  current.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(button, current.answer);
    optionsElement.appendChild(button);
  });
}

function checkAnswer(button, correctAnswer) {
  const buttons = document.querySelectorAll("#options button");
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    } else {
      btn.classList.add("wrong");
    }
  });

  if (button.textContent === correctAnswer) {
    score++;
  }
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
};

function showScore() {
  questionElement.textContent = "Quiz Completed!";
  optionsElement.innerHTML = "";
  nextBtn.style.display = "none";
  scoreElement.textContent = `Your Score: ${score} / ${quizData.length}`;
}

loadQuestion();
