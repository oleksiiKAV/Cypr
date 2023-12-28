/// <reference types="cypress" />

import { registr } from "../pages/SignUp";
import { inputs } from "../test-data/data";

let userName, secondUserName;
describe("registr", () => {
  it("Verify that the form UI matches with the requirements", () => {
    registr.visit("login");
    cy.get(".signup-form > h2").contains("New User Signup!");
    registr.getUsername().should("have.attr", "placeholder", "Name");
    registr.getEmail().should("have.attr", "placeholder", "Email Address");
    registr
      .getUsername()
      .should("have.css", "background-color", inputs.backgroundColor);
    registr
      .submit()
      .contains("Signup")
      .and("have.css", "background-color", inputs.buttonColor);
    registr.submit().each(($el) => {
      $el.trigger("mouseover");
      expect($el).to.have.css("background-color", inputs.hoveredBtnColor);
    });
  });

  it("Verify registr functionality with valid credentials", () => {
    registr.visit("login");
    registr.getUsername().type(registr.generateRandomName(5, ""));
    registr
      .getUsername()
      .invoke("val")
      .then((val) => {
        userName = val;
      });
    registr
      .getEmail()
      .type(registr.generateRandomName(5, "@gmail.com"));
    registr.submit().click();
    cy.get('[data-qa="name"]')
      .invoke("val")
      .then((text) => {
        secondUserName = text;
        cy.log(secondUserName);
      });
    cy.url().should("include", "/signup");
  });
  it("Verify registr functionality with empty username", () => {
    registr.visit("login");
    const emptyUserName = registr.getUsername().clear();
    emptyUserName.blur();
    registr.getUsername().should("have.attr", inputs.requiredField);
    registr
      .getEmail()
      .type(registr.generateRandomName(5, "@gmail.com"));
    registr.submit().click();
  });

  it("Verify registr functionality with empty email", () => {
    registr.visit("login");
    registr.getUsername().type(registr.generateRandomName(5));
    const emptyEmail = registr.getEmail().clear();
    emptyEmail.blur();
    registr.getEmail().should("have.attr", inputs.requiredField);
    registr.submit().click();
  });

  it("Verify registr functionality without symbol @ in email address", () => {
    registr.visit("login");
    registr.getUsername().type(registr.generateRandomName(5));
    registr
      .getEmail()
      .type(registr.generateRandomName(5, "gmail.com"));
    registr.submit().click();
  });
});

it("Verify user information", () => {
  registr.visit("login");
  registr.getUsername().type(registr.generateRandomName(5, ""));
  registr
    .getUsername()
    .invoke("val")
    .then((val) => {
      userName = val;
    });
  registr
    .getEmail()
    .type(registr.generateRandomName(5, "@gmail.com"));
  registr.submit().click();
  cy.get('[data-qa="name"]')
    .invoke("val")
    .then((text) => {
      secondUserName = text;
      cy.log(secondUserName);
    });
  cy.url().should("include", "/signup");
  cy.get(".login-form").then(($elem) => {
    expect($elem).to.contain("Enter Account Information");
  });
  cy.get(".clearfix").then(($elem) => {
    expect($elem).to.contain("Title");
  });

  registr.getGender().check();
  registr.getPassword().type(123);
  registr.getDayofBirth().select(1);
  registr.getDateofMonth().select("January");
  registr.getDateofYear().select("2021");
  registr.getourNewsLetter().check();
  registr.getOptin().check();
  registr.getFirst_name().type("myName");
  registr.getLast_name().type("myLastName");
  registr.getCompany().type("myCompany");
  registr.getAddress().type("myAddress");
  registr.getCountry().select("Canada");
  registr.getState().type("Canada");
  registr.getCity().type("Ottawa");
  registr.getZipcode().type(231);
  registr.getMobile_number().type(1234567);
  registr.getCreateAccount().click();
});
