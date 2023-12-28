class SignUp {
  visit(endpoint) {
    cy.visit(Cypress.env("globalUrl") + endpoint);
  }

  getUsername() {
    return cy.getByData("signup-name");
  }

  getEmail() {
    return cy.getByData("signup-email");
  }

  submit() {
    return cy.getByData("signup-button");
  }

  generateRandomName(length, email = "") {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return `test${result}${email}`;
  }

  getGender() {
    return cy.get("#id_gender1");
  }

  getPassword() {
    return cy.getByData("password");
  }
  getDayofBirth() {
    return cy.getByData("days");
  }
  getDateofMonth() {
    return cy.getByData("months");
  }
  getDateofYear() {
    return cy.getByData("years");
  }
  getourNewsLetter() {
    return cy.get("#newsletter");
  }
  getOptin() {
    return cy.get("#optin");
  }
  getFirst_name() {
    return cy.getByData("first_name");
  }
  getLast_name() {
    return cy.getByData("last_name");
  }
  getCompany() {
    return cy.getByData("company");
  }
  getAddress() {
    return cy.getByData("address");
  }
  getCountry() {
    return cy.getByData("country");
  }
  getState() {
    return cy.getByData("state");
  }
  getCity() {
    return cy.getByData("city");
  }
  getZipcode() {
    return cy.getByData("zipcode");
  }
  getMobile_number() {
    return cy.getByData("mobile_number");
  }
  getCreateAccount() {
    return cy.getByData("create-account");
  }
}

export const registr = new SignUp();
