// Questions du quiz
const questions = [
    {
        question: "Que retourne la fonction len('Python') ?",
        options: ["5", "6", "7", "Erreur"],
        correctAnswer: "6"
    },
    {
        question: "Comment déclare-t-on une fonction en Python ?",
        options: ["function ma_fonction()", "def ma_fonction():", "func ma_fonction()", "lambda ma_fonction()"],
        correctAnswer: "def ma_fonction():"
    },
    {
        question: "Quelle est la sortie de print(2 ** 3) ?",
        options: ["6", "8", "9", "Erreur"],
        correctAnswer: "8"
    },
    {
        question: "Comment ajoute-t-on un élément à une liste en Python ?",
        options: ["list.add()", "list.append()", "list.insert()", "list.push()"],
        correctAnswer: "list.append()"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Sélection des éléments HTML
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");

// Affiche une question
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.onclick = () => selectAnswer(option);
        optionsElement.appendChild(button);
    });

    nextButton.style.display = "none";
}

// Gère la sélection de la réponse
function selectAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent === currentQuestion.correctAnswer) {
            button.style.backgroundColor = "#4caf50"; // Vert pour la bonne réponse
        } else if (button.textContent === selectedOption) {
            button.style.backgroundColor = "#f44336"; // Rouge pour la mauvaise réponse
        }
    });

    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    nextButton.style.display = "block";
}

// Passe à la question suivante
nextButton.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
};

// Affiche le résultat final
function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    resultContainer.style.display = "block";
    scoreElement.textContent = `Vous avez obtenu ${score} sur ${questions.length} bonnes réponses.`;
}

// Redémarre le quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    showQuestion();
}

// Démarre le quiz
showQuestion();