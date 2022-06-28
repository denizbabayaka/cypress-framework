const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 30000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos/testEExucitionVideos',
  retries: {
    runMode: 1,
    openMode: 1,
  },
  env: {
    webdriveruni_homepage: 'http://www.webdriveruniversity.com/',
    first_name: 'sarah',
    automationteststore_homepage: 'https://www.automationteststore.com/',
  },
  projectId: 'i8t2qj',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  experimentalStudio: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      //return require('./cypress/plugins/index.js')(on, config)
      on ('file:preprocessor', cucumber())
    },
    baseUrl: 'http://www.webdriveruniversity.com/',
    specPattern: 'cypress/integration/**/*.{js,jsx,ts,tsx,feature}',
    

  },
})
