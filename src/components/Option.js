import React from 'react';

const Option = ({ option, handleClick }) => {
  return (
    <div onClick={() => handleClick(option)}>
      {option}
    </div>
  );
};

export default Option;
