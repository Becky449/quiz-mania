import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';
import quizData from './QuizData';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = () => {
    const isCorrect = selectedOption === quizData[currentQuestionIndex].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(nextQuestionIndex);
    setSelectedOption(null); // Reset selected option after answering
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div>
      <Question
        question={currentQuestion}
        handleAnswer={handleAnswer}
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      <Score score={score} />
    </div>
  );
};

export default Quiz;
