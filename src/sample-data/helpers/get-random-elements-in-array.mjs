import getRandomElementInArray from './get-random-element-in-array';
import getRandomNumberInRange from './get-random-number-in-range';

export default array => {
  const items = getRandomNumberInRange(0, array.length);
  return new Array(items).fill(0).map(() => getRandomElementInArray(array));
};
