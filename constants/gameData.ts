
import { StepData } from '../types';

export const GAME_DATA: StepData[] = [
  {
    id: 1,
    location: 'Reception',
    question: 'What color is a pumpkin?',
    answers: ['orange'],
    hint: 'Where engines roar and helmets shine.',
  },
  {
    id: 2,
    location: 'Motorcycle Arcade',
    question: 'What spooky vehicle does a witch ride on Halloween?',
    answers: ['broom', 'broomstick'],
    hint: 'Aim, strike, and find your next clue where balls collide.',
  },
  {
    id: 3,
    location: 'Pool Room',
    question: 'How many balls does an official pool game have?',
    answers: ['15', 'fifteen'],
    hint: 'Where orange balls fly through hoops.',
  },
  {
    id: 4,
    location: 'Basketball Arcade',
    question: 'Name the fruit we carve for Halloween.',
    answers: ['pumpkin'],
    hint: 'Step into another reality.',
  },
  {
    id: 5,
    location: 'VR Zone',
    question: 'What does VR stand for?',
    answers: ['virtual reality'],
    hint: 'One poster hides the next clue — look for the one that celebrates Halloween.',
  },
  {
    id: 6,
    location: 'Poster Wall',
    question: 'What animal silhouette is on the Halloween poster?',
    answers: ['bat'],
    hint: 'Where bright screens shine and eyes wander before the adventure begins.',
  },
  {
    id: 7,
    location: 'Entrance by TV',
    question: "What's the next big event coming to Skate & Play?",
    answers: ["new year's eve", 'new years eve', 'new year eve'],
    hint: 'Lace up for fun — your next clue waits where skates begin to roll.',
  },
  {
    id: 8,
    location: 'Skate Rental Station',
    question: 'How did you pose on your skates: smile, spin, or spooky?',
    answers: ['smile', 'spin', 'spooky'],
    hint: 'Where friendly faces welcome guests before the feast begins.',
  },
  {
    id: 9,
    location: 'EXIT Lounge',
    question: 'What is the name of our restaurant inside Skate & Play?',
    answers: ['exit lounge'],
    hint: 'Lights, camera... say cheese.',
  },
  {
    id: 10,
    location: 'Photo Booth',
    question: 'What kind of spooky pose did you strike in your photo: smile, scream, or silly?',
    answers: ['smile', 'scream', 'silly'],
    hint: 'Hang your coat and claim your treat.',
  },
  {
    id: 11,
    location: 'Coat Room (Final)',
    question: 'How many hanging bats are above you?',
    answers: [],
    isNumericRange: true, // Any number 0-50
    hint: 'You have completed the quest!',
  },
];
