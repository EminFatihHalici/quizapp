let questions = [
  {
    question: "Was ist die Hauptstadt von Frankreich?",
    answer_1: "Berlin",
    answer_2: "Madrid",
    answer_3: "Paris",
    answer_4: "Rom",
    right_answer: "Paris",
  },
  {
    question: "Welches Tier ist ein Säugetier?",
    answer_1: "Hai",
    answer_2: "Delfin",
    answer_3: "Forelle",
    answer_4: "Krokodil",
    right_answer: "Delfin",
  },
  {
    question: "Welche Programmiersprache wird im Web häufig verwendet?",
    answer_1: "Python",
    answer_2: "JavaScript",
    answer_3: "C++",
    answer_4: "Java",
    right_answer: "JavaScript",
  },
  {
    question: "Wie viele Kontinente gibt es auf der Erde?",
    answer_1: "5",
    answer_2: "6",
    answer_3: "7",
    answer_4: "8",
    right_answer: "7",
  },
  {
    question: "Welcher Planet ist der Sonne am nächsten?",
    answer_1: "Venus",
    answer_2: "Merkur",
    answer_3: "Mars",
    answer_4: "Jupiter",
    right_answer: "Merkur",
  },
];

function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;
}