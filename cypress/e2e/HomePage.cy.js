/// <reference types="cypress" />

import { pagination, shopping } from "../pages/HomePage";
import { registr } from "../pages/SignUp";
import { colorPagination, inputs } from "../test-data/data";
import { paginationtexts, message } from "../test-data/messages";

describe("Home page", () => {

  it("checks for pagination icons", () => {
    registr.visit();
    cy.get(".item").then(($elem) => {
      expect($elem).to.contain(paginationtexts.headingAuto);
      expect($elem).to.contain(paginationtexts.headingEx);
      expect($elem).to.contain(paginationtexts.heading);
    });
    pagination
      .getbtnTC()
      .should("be.visible")
      .and("contain", paginationtexts.buttonTC);
      pagination
      .getbtnTC()
      .should("have.css", "background-color", colorPagination.butonTC);
      pagination.getbtnTC().trigger("mouseover");
      pagination
      .getbtnAPIList()
      .should("have.css", "background-color", colorPagination.butonTC)
      .and("contain", paginationtexts.buttonAPIList);
    cy.wait(7000);
    cy.get(".item")
      .should("have.class", "active")
      .find("img")
      .should("be.visible")
      .and("have.attr", "src", "/static/images/home/girl2.jpg");
  });
});

let numberCount, number;
describe("Home page left section", () => {
  it("Check Category $ Brands section", () => {
    registr.visit();
    cy.get("ul>li").each(($el, index, $list) => {
      expect($list).to.have.length(57);
    });
    cy.get(".left-sidebar > h2").should("contain", "Category");
    cy.get('[data-parent="#accordian"]').eq(0).click();
    cy.get("#Women > .panel-body").then(($el) => {
      expect($el).to.contain("Dress");
      expect($el).to.contain("Tops");
      expect($el).to.contain("Saree");
    });
    cy.get('[data-parent="#accordian"]').eq(1).click();
    cy.get("#Men > .panel-body").then(($el) => {
      expect($el).to.contain("Tshirts");
      expect($el).to.contain("Jeans");
    });
    cy.get(":nth-child(3) > .panel-heading > .panel-title > a").click();
    cy.get("#Kids > .panel-body").then(($el) => {
      expect($el).to.contain("Dress");
      expect($el).to.contain("Tops & Shirts");
    });
    cy.get(".brands_products").should("contain", "Brands");

    cy.get(".brands-name").then(($el) => {
      expect($el).to.contain("Polo");
      cy.get(".nav > :nth-child(1) > a > .pull-right")
        .invoke("text")
        .then(($el) => {
          numberCount = $el;
          number = parseInt(numberCount.slice(1, 2));
          cy.log(typeof number);
        });
      cy.get(".brands-name > .nav > :nth-child(1) > a").click();
      cy.get(".product-overlay").each(($el, index, $list) => {
        expect($list).to.have.length(number);
      });
      expect($el).to.contain("H&M");
      cy.get(".nav > :nth-child(2) > a > .pull-right")
        .invoke("text")
        .then(($el) => {
          numberCount = $el;
          number = parseInt(numberCount.slice(1, 2));
          cy.log(typeof number);
        });
      cy.get(".brands-name > .nav > :nth-child(2) > a").click();
      cy.get(".product-overlay").each(($el, index, $list) => {
        expect($list).to.have.length(number);
      });
      expect($el).to.contain("Madame");
      cy.get(".nav > :nth-child(3) > a > .pull-right")
        .invoke("text")
        .then(($el) => {
          numberCount = $el;
          number = parseInt(numberCount.slice(1, 2));
          cy.log(typeof number);
        });
      cy.get(".brands-name > .nav > :nth-child(3) > a").click();
      cy.get(".product-overlay").each(($el, index, $list) => {
        expect($list).to.have.length(number);
      });
      expect($el).to.contain("Mast & Harbour");
      cy.get(".nav > :nth-child(4) > a > .pull-right")
        .invoke("text")
        .then(($el) => {
          numberCount = $el;
          number = parseInt(numberCount.slice(1, 2));
          cy.log(typeof number);
        });
      cy.get(".brands-name > .nav > :nth-child(4) > a").click();
      cy.get(".product-overlay").each(($el, index, $list) => {
        expect($list).to.have.length(number);
      });
      expect($el).to.contain("Babyhug");
      cy.get(".nav > :nth-child(5) > a > .pull-right")
        .invoke("text")
        .then(($el) => {
          numberCount = $el;
          number = parseInt(numberCount.slice(1, 2));
          cy.log(typeof number);
        });
      cy.get(".brands-name > .nav > :nth-child(5) > a").click();
      cy.get(".product-overlay").each(($el, index, $list) => {
        expect($list).to.have.length(number);
      });
      expect($el).to.contain("Allen Solly Junior");
      cy.get(".nav > :nth-child(6) > a > .pull-right")
        .invoke("text")
        .then(($el) => {
          numberCount = $el;
          number = parseInt(numberCount.slice(1, 2));
          cy.log(typeof number);
        });
      cy.get(".brands-name > .nav > :nth-child(6) > a").click();
      cy.get(".product-overlay").each(($el, index, $list) => {
        expect($list).to.have.length(number);
      });
      expect($el).to.contain("Kookie Kids");
      cy.get(".nav > :nth-child(7) > a > .pull-right")
        .invoke("text")
        .then(($el) => {
          numberCount = $el;
          number = parseInt(numberCount.slice(1, 2));
          cy.log(typeof number);
        });
      cy.get(".brands-name > .nav > :nth-child(7) > a").click();
      cy.get(".product-overlay").each(($el, index, $list) => {
        expect($list).to.have.length(number);
      });
      expect($el).to.contain("Biba");
      cy.get(".nav > :nth-child(8) > a > .pull-right")
        .invoke("text")
        .then(($el) => {
          numberCount = $el;
          number = parseInt(numberCount.slice(1, 2));
          cy.log(typeof number);
        });
      cy.get(".brands-name > .nav > :nth-child(8) > a").click();
      cy.get(".product-overlay").each(($el, index, $list) => {
        expect($list).to.have.length(number);
      });
    });
  });
});

describe("Home page Subscribe form", () => {
  it("allow users to subscribe to the email list", () => {
    registr.visit();
    cy.get(".single-widget").should("contain", "Subscription");
    cy.get(".single-widget").should(
      "contain",
      "Get the most recent updates from our site and be updated your self..."
    );
    cy.get("#susbscribe_email").type("test@test.com");
    cy.get("#subscribe").click();
    cy.get(".alert-success").should("exist").contains(message.successSubscribe);
  });
  // if message contains this email
  //  cy.get('.alert-success').should("exist").contain("test@test.com"")
  it("does NOT allow invalid email address", () => {
    registr.visit();
    cy.get("#susbscribe_email").type("test");
    cy.get("#subscribe").click();
    // cy.get('.alert-success').should("not exist");
  });
});

describe("Home page Feachtures items", () => {
  it("Number of oll product Items", () => {
    registr.visit();
    cy.get(".features_items > .title").contains("Features Items");
    cy.get(".product-overlay").its("length").should("eq", 34);
    shopping.getFirstCartView().click();
    cy.url("includes", "product_details/1");
  });
});
