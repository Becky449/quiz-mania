// quizData.js
import React from 'react';
const quizData = [
  {
    id: 1,
    prompt: 'What is Ruby on Rails?',
    options: [
      'A programming language',
      'A web framework',
      'A database management system',
      'An operating system'
    ],
    correctAnswer: 'A web framework'
  },
  {
    id: 2,
    prompt: 'What does MVC stand for in the context of Ruby on Rails?',
    options: [
      'Model View Component',
      'Model View Controller',
      'Model View Connector',
      'Model View Composition'
    ],
    correctAnswer: 'Model View Controller'
  },
  {
    id: 3,
    prompt: 'What command is used to create a new Rails application?',
    options: [
      'rails new',
      'rails generate app',
      'rails create',
      'rails init'
    ],
    correctAnswer: 'rails new'
  },
  {
    id: 4,
    prompt: 'Which database is commonly used with Ruby on Rails?',
    options: [
      'MySQL',
      'PostgreSQL',
      'SQLite',
      'MongoDB'
    ],
    correctAnswer: 'PostgreSQL'
  },
  {
    id: 5,
    prompt: 'What is the purpose of a migration in Ruby on Rails?',
    options: [
      'To create database tables',
      'To create controllers',
      'To install gems',
      'To write test cases'
    ],
    correctAnswer: 'To create database tables'
  },
  {
    id: 6,
    prompt: 'Which command is used to generate a new migration?',
    options: [
      'rails generate migration',
      'rails new migration',
      'rails migration',
      'rails create migration'
    ],
    correctAnswer: 'rails generate migration'
  },
  {
    id: 7,
    prompt: 'What is a controller in Ruby on Rails?',
    options: [
      'A Ruby class that handles browser requests',
      'A JavaScript function that handles DOM events',
      'A database table',
      'A view template'
    ],
    correctAnswer: 'A Ruby class that handles browser requests'
  },
  {
    id: 8,
    prompt: 'Which directory contains the views in a Rails application?',
    options: [
      'app/models',
      'app/controllers',
      'app/views',
      'app/helpers'
    ],
    correctAnswer: 'app/views'
  },
  {
    id: 9,
    prompt: 'What is the purpose of the Rails console?',
    options: [
      'To run Rails commands',
      'To test code interactively',
      'To generate migration files',
      'To deploy the application'
    ],
    correctAnswer: 'To test code interactively'
  },
  {
    id: 10,
    prompt: 'Which command is used to start the Rails server?',
    options: [
      'rails start',
      'rails run',
      'rails server',
      'rails go'
    ],
    correctAnswer: 'rails server'
  }
];

export default quizData;
