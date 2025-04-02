export const filterQuestionsByCategory = (questions, category) => {
    return questions.filter(question => question.category === category);
};

export const calculateScore = (userAnswers, correctAnswers) => {
    return userAnswers.reduce((score, answer, index) => {
        return score + (answer === correctAnswers[index] ? 1 : 0);
    }, 0);
};

export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};