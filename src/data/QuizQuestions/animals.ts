// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import BrandLogo from '../../assets/images/brand-logo.jpg'
import Car from '../../assets/images/car.jpg'
import Mosque from '../../assets/images/mosque.jpg'

export const animals: Topic = {
  topic: 'Animaux',
  level: 'Facile',
  totalQuestions: 6,
  totalScore: 100,
  totalTime: 60,
  questions: [
    {
      question: 'Quel est l\'oiseau le plus petit du monde?',
      choices: ['Oiseau-mouche', 'Pigeon', 'Aigle', 'Pivert'],
      type: 'MCQs',
      correctAnswers: ['Oiseau-mouche'],
      score: 10,
    },
    {
      question: 'Quel est l\'oiseau le plus grand du monde?',
      choices: ['Gypaète barbu', 'Autruche', 'Aigle royal', 'Cigogne'],
      type: 'MCQs',
      correctAnswers: ['Autruche'],
      score: 10,
    },
    {
      question: 'Que mange le Gypaète barbu?',
      choices: ['Frites', 'Graines', 'Poulet rôti', 'Os'],
      type: 'MCQs',
      correctAnswers: ['Os'],
      score: 20,
    },
    {
      question: 'Ou vit le kangourou?',
      choices: ['Espagne', 'Etats-Unis', 'Australie', 'Allemagne'],
      type: 'MCQs',
      correctAnswers: ['Australie'],
      score: 10,
    },
    {
      question: 'Combien d\'espèces de papillons de jour vivent en France?',
      choices: ['203', '301', '77', '190',],
      type: 'MCQs',
      correctAnswers: ['301'],
      score: 40,
    },
    {
      question: 'Que mangent les écureuils',
      choices: ['Steak haché', 'Noisettes', 'Homard', 'Herbe',],
      type: 'MCQs',
      correctAnswers: ['Noisettes'],
      score: 10,
    },
  ],
}
