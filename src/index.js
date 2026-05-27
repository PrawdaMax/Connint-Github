export default function shuffleArray(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((currentItem, nextItem) => currentItem.sort - nextItem.sort)
    .map(({ value }) => value);
};
