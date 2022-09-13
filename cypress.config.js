const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: 'https://alura-fotos.herokuapp.com',
    registerUrl: 'https://alura-fotos.herokuapp.com/#/home/signup'
  }
});
