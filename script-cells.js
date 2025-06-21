const questions = [
  {
    question: "What is the basic unit of life?",
    options: ["Atom", "Organ", "Cell"],
    answer: "Cell"
  },
  {
    question: "Which part is only found in plant cells?",
    options: ["Nucleus", "Chloroplast", "Cell membrane"],
    answer: "Chloroplast"
  },
  {
    question: "What is the function of the nucleus?",
    options: ["Make food", "Control the cell", "Store water"],
    answer: "Control the cell"
  },
  {
    question: "Which part protects and supports plant cells?",
    options: ["Cell wall", "Cytoplasm", "Mitochondria"],
    answer: "Cell wall"
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
  alert(selected === correct ? "✅ Correct!" : "❌ Not quite. Try again.");
}