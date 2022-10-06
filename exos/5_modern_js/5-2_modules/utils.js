import { yearToMs } from './constants.js';

export function computeAge(birth, died) {
  const end = died ? new Date(died) : new Date();
  const start = new Date(birth);

  return Math.floor((end - start) / yearToMs);
}
