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

function init() {
  showQuestion();
  document.getElementById("allQuestions").innerHTML = questions.length;
}

function showQuestion() {
  let question = questions[currentQuestion];

  document.getElementById("questiontext").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function answer(selection) {
  let question = questions[currentQuestion];
  console.log("Selected answer is", selection);
  let selectedQuestionNumber = selection.slice(-1);
  console.log("slectedQUestionNumber is", selectedQuestionNumber);
  console.log("Current Question is", question["right_answer"]);

  if (selectedQuestionNumber == question["right_answer"]) {
    console.log("Richtige Antwort");
    document.getElementById(selection).parentNode.classList.add("bg-success");
  } else {
    console.log("Falsche Antwort");
    document.getElementById(selection).parentNode.classList.add('bg-danger');
  }
}
