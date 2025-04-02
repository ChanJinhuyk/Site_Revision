import React, { useState } from 'react';
import questions from '../data/questions.json';

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleAnswer = (answer) => {
        setUserAnswers([...userAnswers, answer]);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizCompleted(true);
        }
    };

    const calculateScore = () => {
        return userAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;
    };

    return (
        <div className="quiz">
            {quizCompleted ? (
                <div className="quiz-completed">
                    <h2>Quiz terminé!</h2>
                    <p>Votre score: <strong>{calculateScore()}</strong> sur <strong>{questions.length}</strong></p>
                    <button onClick={() => window.location.reload()}>Recommencer</button>
                </div>
            ) : (
                <div className="quiz-question">
                    <h2>{questions[currentQuestionIndex].question}</h2>
                    <div className="quiz-options">
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <button key={index} onClick={() => handleAnswer(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;