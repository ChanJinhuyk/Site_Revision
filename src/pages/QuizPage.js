import React, { useState, useEffect } from 'react';
import Quiz from '../components/Quiz';
import questionsData from '../data/questions.json';

const QuizPage = () => {
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        setQuestions(questionsData);
    }, []);

    const handleScoreUpdate = (newScore) => {
        setScore(newScore);
        setSubmitted(true);
    };

    return (
        <div className="quiz-page">
            <h1>Quiz</h1>
            {submitted ? (
                <div>
                    <h2>Votre score: {score} / {questions.length}</h2>
                </div>
            ) : (
                <Quiz questions={questions} onScoreUpdate={handleScoreUpdate} />
            )}
        </div>
    );
};

export default QuizPage;