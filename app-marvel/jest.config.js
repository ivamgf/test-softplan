/* eslint-disable no-undef */
// jest.config.js

module.exports = {
    moduleDirectories: ['node_modules', 'src'],
    transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
    },
    bail: 1,
    verbose: true,
  };