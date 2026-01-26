"use strict";

const questions = [
  {
    question: "2 + 2",
    answers: [4, 3, 8, 1],
    correct: 0, // 4
  },
  {
    question: "2 - 2",
    answers: [10, 3, 0, 1],
    correct: 2, // 0
  },
  {
    question: "2 + 777",
    answers: [7, 999, 898, 779],
    correct: 3, // 779
  },
  {
    question: "1 + 256",
    answers: [574, 257, 256, -1],
    correct: 1, // 257
  },
];

let scor = 0;
let questionIndex = 0;

const questionTitle = document.querySelector(".question-title");
const questinsList = document.querySelector(".quiz-list");
const button = document.querySelector(".quiz-button");
const labels = document.querySelectorAll(".span");
const quizContaiter = document.querySelector(".qize-contaoner");

showQuestion(questions[questionIndex]);

function showQuestion(questionObj) {
  const { question, answers, correct } = questionObj;
  questionTitle.textContent = question;

  labels.forEach((label, index) => {
    label.textContent = answers[index];
  });
}

function clearRadio() {
  const inputs = questinsList.querySelectorAll("input[type='radio']");
  inputs.forEach((input) => (input.checked = false));
}

button.addEventListener("click", () => {
  const checkInput = questinsList.querySelector("input[type='radio']:checked");

  if (!checkInput) {
    button.blur();
    return;
  }

  if (+checkInput.value === questions[questionIndex].correct) {
    scor++;
  }

  questionIndex++;

  if (questionIndex >= questions.length) {
    questionTitle.textContent = ` Your resalt: ${scor}`;
    button.textContent = "restart";

    button.onclick = () => {
      history.go();
    };
  }

  clearRadio();
  showQuestion(questions[questionIndex]);
});
