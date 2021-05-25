const cucumber = require('cypress-cucumber-preprocessor').default;
const { setupDb } = require('./setupDb');

module.exports = (on, config) => {
  on('task', {
    setupDb,
  });
  on('file:preprocessor', cucumber());
};

// require('@applitools/eyes-cypress')(module);
