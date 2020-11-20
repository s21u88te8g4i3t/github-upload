import {promises as fs } from 'fs';

const greet = async () => {
  try {
    return await fs.readFile('./assets/greet.txt', 'utf-8');
  } catch (error) {
    throw error;
  }
};

export {greet};
