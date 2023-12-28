/// <reference types="@shelex/cypress-allure-plugin" />
const { defineConfig } = require("cypress");
require('dotenv').config()
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    env: {
      globalUrl:process.env.GLOBAL_URL

    },
  },
});