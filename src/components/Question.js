import React from 'react';

const Question = ({ question, handleAnswer }) => {
  const { prompt, options } = question;

  const handleRadioChange = (event) => {
    const selectedOption = event.target.value;
    handleAnswer(selectedOption);
  };

  return (
    <div>
      <h2>{prompt}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name="options"
                value={option}
                onChange={handleRadioChange}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
