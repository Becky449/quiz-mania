import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';
import quizData from './QuizData';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption) => {
    // Check if the selected option matches the correct answer
    const isCorrect = selectedOption === quizData[currentQuestionIndex].correctAnswer;
    // Increment score only if the answer is correct
    if (isCorrect) {
      setScore(score + 1);
    }
    // Move to the next question regardless of the answer
    const nextQuestionIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(nextQuestionIndex);
  };

  // Check if there are more questions to show
  const hasMoreQuestions = currentQuestionIndex < quizData.length;

  return (
    <div>
      {/* Render Question component with current question */}
      {hasMoreQuestions && (
        <Question
          question={quizData[currentQuestionIndex]}
          handleAnswer={handleAnswer}
        />
      )}
      {/* Render Score component */}
      <Score score={score} />
    </div>
  );
};

export default Quiz;
