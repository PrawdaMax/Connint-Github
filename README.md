# @yourusername/shuffle-array

> A small library that takes an array as input and returns a new array that is shuffled.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
   - [Examples](#examples)
- [Contribution](#contribution)
- [Security](#security)
- [License](#license)

## Installation

Install via npm:

```bash
npm install @yourusername/shuffle-array
```
Install via yarn:

```bash
yarn add @yourusername/shuffle-array
```

## Usage

Basic Usage

```js
import shuffleArray from '@yourusername/shuffle-array';

const startArray = [1, 2, 3, 4, 5];
const newShuffledArray = shuffleArray(startArray);

console.log(startArray);       // e.g., [1, 2, 3, 4, 5]
console.log(newShuffledArray); // e.g., [3, 1, 5, 2, 4]
```

### Examples

Shuffle a list of user IDs:

```js
import shuffleArray from '@yourusername/shuffle-array';

const userIds = ['u1', 'u2', 'u3', 'u4'];
const randomizedOrderOfUserIds = shuffleArray(userIds);

console.log(randomizedOrderOfUserIds); // e.g., ['u1', 'u3', 'u4', 'u2']
```

Use in a game for randomizing cards:

```js
import shuffleArray from '@yourusername/shuffle-array';

const deck = ['Ace of Spades', 'Two of Hearts']; // some card deck
const shuffledDeck = shuffleArray(deck);

console.log(shuffledDeck); // e.g., ['Two of Hearts', 'Ace of Spades', ...]
```

## Contribution

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for more details.

## Security

Please refer to our [SECURITY.md](./SECURITY.md) for information about our security policies, how to report vulnerabilities, and our approach to handling security concerns.

**Important Note**: This library uses non-cryptographic randomness (`Math.random()`). Do not rely on it for security-critical functionality.

## License

This project is licensed under the [MIT License](./LICENSE.md).
