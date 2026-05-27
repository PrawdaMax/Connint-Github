const shuffleArray = require('../dist/index');

describe('shuffleArray', () => {
  test('returns a new array with the same elements as the input', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffleArray(originalArray);

    // Check that a new array is returned (not the same reference)
    expect(shuffledArray).not.toBe(originalArray);

    // Check that the array lengths are identical
    expect(shuffledArray.length).toBe(originalArray.length);

    // Check that both arrays contain the same elements, regardless of order
    const sortedOriginal = [...originalArray].sort((a, b) => a - b);
    const sortedShuffled = [...shuffledArray].sort((a, b) => a - b);
    expect(sortedShuffled).toEqual(sortedOriginal);
  });
});