const questions = [
  {
    question: "Which of these is a solid?",
    options: ["Water", "Steam", "Ice"],
    answer: "Ice"
  },
  {
    question: "What happens to water when it is heated?",
    options: ["It freezes", "It melts", "It evaporates"],
    answer: "It evaporates"
  },
  {
    question: "Which state of matter fills all available space?",
    options: ["Solid", "Liquid", "Gas"],
    answer: "Gas"
  }
];

function startQuiz() {
  const container = document.getElementById("quizContainer");
  container.innerHTML = "";

  questions.forEach((q, i) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionText = document.createElement("p");
    questionText.textContent = `${i + 1}. ${q.question}`;
    questionDiv.appendChild(questionText);

    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(option, q.answer);
      questionDiv.appendChild(btn);
    });

    container.appendChild(questionDiv);
  });
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    alert("🎉 Correct!");
  } else {
    alert("❌ Oops! Try again.");
  }
}
function goToNextLesson() {
  window.location.href = "lesson-cells.html";
}
function goBack() {
  window.location.href = "lesson.html";
}
function checkMatchingQuiz() {
  const correctAnswers = {
    q1: "A", // Nucleus
    q2: "B", // Cell Wall
    q3: "C", // Cytoplasm
    q4: "D", // Chloroplast
    q5: "E"  // Mitochondria
  };

  let score = 0;
  for (let key in correctAnswers) {
    const selected = document.querySelector(`[name="${key}"]`).value;
    if (selected === correctAnswers[key]) {
      score++;
    }
  }

  alert(`You got ${score} out of 5 correct!`);
}
function checkMatchingQuiz() {
  const correctAnswers = {
    q1: "B", // Solid
    q2: "C", // Liquid
    q3: "A", // Gas
    q4: "E", // Melting
    q5: "D"  // Condensation
  };

  let score = 0;
  for (let key in correctAnswers) {
    const selected = document.querySelector(`[name="${key}"]`).value;
    if (selected === correctAnswers[key]) {
      score++;
    }
  }

  alert(`You got ${score} out of 5 correct in the matching activity!`);
}