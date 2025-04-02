const API_URL = "http://localhost:3000/generate-quiz"; // URL de votre backend
const quizContainer = document.getElementById("quiz-questions");
const generateQuizBtn = document.getElementById("generate-quiz-btn");

// Fonction pour appeler l'API backend et générer un quiz
async function generateQuiz() {
    quizContainer.innerHTML = "<p>Chargement des questions...</p>"; // Message de chargement

    try {
        // Appel au backend pour récupérer les questions
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                topic: "Programmation en Python", // Sujet du quiz
                numberOfQuestions: 5, // Nombre de questions à générer
            }),
        });

        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des questions.");
        }

        const data = await response.json();
        displayQuestions(data.questions);
    } catch (error) {
        quizContainer.innerHTML = `<p>Erreur : ${error.message}</p>`;
    }
}

// Fonction pour afficher les questions
function displayQuestions(questionsText) {
    quizContainer.innerHTML = ""; // Réinitialise le contenu précédent

    // Divise les questions générées en tableau
    const questions = questionsText.split("\n").filter((q) => q.trim() !== "");

    questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        // Affiche la question
        const questionText = document.createElement("p");
        questionText.textContent = `${index + 1}. ${question}`;
        questionDiv.appendChild(questionText);

        quizContainer.appendChild(questionDiv);
    });
}

// Ajoute un événement au bouton de génération
generateQuizBtn.addEventListener("click", generateQuiz);