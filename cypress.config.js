const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://l15-ojq8lhcdm-ados-projects-0eb7f124.vercel.app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
