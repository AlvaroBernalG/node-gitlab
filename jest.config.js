const base = require('./jest.config.base');

module.exports = {
  ...base,
  projects: ['<rootDir>', '<rootDir>/packages/*'],
};
