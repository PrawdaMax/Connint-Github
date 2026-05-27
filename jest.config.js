// jest.config.js
module.exports = {
  testEnvironment: 'node', // sets the test environment to Node.js
  moduleFileExtensions: ['js', 'json'], // recognize .js and .json files
  testMatch: ['**/?(*.)+(spec).js'], // run files ending with .spec.js
  // Uncomment the transform section if you're using ES6+ features that need Babel
  // transform: {
  //   '^.+\\.jsx?$': 'babel-jest'
  // },
};
