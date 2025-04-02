const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
const port = 3000;


const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route pour générer des questions
app.post("/generate-quiz", async (req, res) => {
    const { topic, numberOfQuestions } = req.body;

    try {
        const prompt = `Génère ${numberOfQuestions} questions à choix multiples sur le sujet suivant : ${topic}. 
        Chaque question doit inclure 4 options et indiquer la bonne réponse.`;

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 2000,
            temperature: 0.7,
        });

        const questions = response.data.choices[0].text.trim();
        res.json({ questions });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la génération des questions." });
    }
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});