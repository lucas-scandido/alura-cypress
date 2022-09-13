const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7bgjt7',
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: 'https://alura-fotos.herokuapp.com',
    registerUrl: 'https://alura-fotos.herokuapp.com/#/home/signup',
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/report/mochawesome-report",
      overwrite: true,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
    }
  }  
});