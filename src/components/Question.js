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
      <div>
        {options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                name="options"
                value={option}
                onChange={handleRadioChange}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
