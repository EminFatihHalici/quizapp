let questions = [
  {
    question: "Was ist die Hauptstadt von Frankreich?",
    answer_1: "Berlin",
    answer_2: "Madrid",
    answer_3: "Paris",
    answer_4: "Rom",
    right_answer: 3,
  },
  {
    question: "Welches Tier ist ein Säugetier?",
    answer_1: "Hai",
    answer_2: "Delfin",
    answer_3: "Forelle",
    answer_4: "Krokodil",
    right_answer: 2,
  },
  {
    question: "Welche Programmiersprache wird im Web häufig verwendet?",
    answer_1: "Python",
    answer_2: "JavaScript",
    answer_3: "C++",
    answer_4: "Java",
    right_answer: 2,
  },
  {
    question: "Wie viele Kontinente gibt es auf der Erde?",
    answer_1: "5",
    answer_2: "6",
    answer_3: "7",
    answer_4: "8",
    right_answer: 3,
  },
  {
    question: "Welcher Planet ist der Sonne am nächsten?",
    answer_1: "Venus",
    answer_2: "Merkur",
    answer_3: "Mars",
    answer_4: "Jupiter",
    right_answer: 2,
  },
];

let currentQuestion = 0;

let rightQuestions = 0;

let AUDIO_SUCCES = new Audio('audio/success.mp3'); 
let AUDIO_FAIL = new Audio('audio/failure.mp3');

function init() {
  showQuestion();
  document.getElementById("allQuestions").innerHTML = questions.length;
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById('endScreen').style = "";
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('amountOfQuestions').innerHTML = questions.length;
    document.getElementById('amountRightQuestions').innerHTML = rightQuestions;
    document.getElementById('headerImage').src = './assets/tropy.png';
  } else {
    let question = questions[currentQuestion];

    let percent = (currentQuestion + 1) / questions.length;
    percent = percent * 100;
    document.getElementById('progress').innerHTML = `${percent} %`;
    document.getElementById('progress').style = `width: ${percent}%;`;
    document.getElementById("question-number").innerHTML = currentQuestion + 1;
    document.getElementById("questiontext").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);

  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (selectedQuestionNumber == question["right_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    rightQuestions++;
    AUDIO_SUCCES.play();
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
      AUDIO_FAIL.play();
  }
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("next-button").disabled = true;
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}

function restartGame() {
  document.getElementById('headerImage').src = "./assets/logo.png";
  document.getElementById('questionBody').style = "";
  document.getElementById('endScreen').style = 'display: none';
  currentQuestion = 0;
  rightQuestions = 0;
  init();
}


