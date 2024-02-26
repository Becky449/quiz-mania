import React from 'react';
import Quiz from './components/Quiz';
import './App.css';
import './styles/styles.css';

const App = () => {
  // Sample questions data
  const questions = [
    {
      id: 1,
      prompt: 'What is the capital of Kenya?',
      options: ['Eldoret', 'Kisumu', 'Nairobi', 'Mombasa'],
      correctAnswer: 'Paris',
    },
    // Add more questions here...
  ];

  return (
    <div>
      <h1>Quiz Mania</h1>
      <Quiz questions={questions} />
    </div>
  );
};

export default App;
