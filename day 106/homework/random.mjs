// Random utility functions
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];
export const generateRandomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;
export const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);