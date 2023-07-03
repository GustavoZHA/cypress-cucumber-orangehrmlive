# cypress-cucumber-orangehrmlive

Config Cucumber:
Stepl: 
npm init
provide package details
Step2: 
npm install cypress --save-dev
Step3: 
npm i -D cypress cypress-cucumber-preprocessor
npm install --save-dev cypress-cucumber-preprocessor
Step4: need to add below lines in cypress.config.js under e2e

const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/*.feature",
  },
});

Step5: need to add package.js

 "cypress-cucumber-preprocessor" : {
    "nonGlobalStepDefinitions": true,
    "step_definitions": "cypress/e2e/newtours"
  }
  
Step6: create cucumber file in application login.feature
Step 7: create folder for step defination in e2e application login
file name should be same as feature file name

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Step8: run and check