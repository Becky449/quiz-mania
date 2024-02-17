import React from 'react';

const Question = ({ question, handleAnswer }) => {
  const { prompt, options } = question;

  const handleClick = (option) => {
    handleAnswer(option === question.correctAnswer);
  };

  return (
    <div>
      <h2>{prompt}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index} onClick={() => handleClick(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
