import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // Quiz is finished
      // You can handle what happens when the quiz is finished, like showing the final score
      console.log('Quiz finished. Final score:', score);
    }
  };

  return (
    <div>
      {/* Render Question component with current question */}
      <Question
        question={questions[currentQuestionIndex]}
        handleAnswer={handleAnswer}
      />
      {/* Render Score component */}
      <Score score={score} />
    </div>
  );
};

export default Quiz;
