/// <reference types="cypress" />

import { productpage } from "../pages/Product";
import { registr } from "../pages/SignUp";
import { shopping } from "../pages/HomePage";
import { inputs } from "../test-data/data";
// import { paginationtexts, message } from "../../utils/messages";

describe("Product page -Checkout ", () => {
  it("Verify search field by category", () => {
    registr.visit("products");
    shopping.getFirstCartImg();
    shopping.getFirstCart2().should("have.css", "color", inputs.buttonColor);
    shopping
      .getFirstCartTitle()
      .should("have.css", "color", inputs.addCartTitlecolor);
    shopping
      .getFirsrtCartBtn()
      .and("have.css", "background-color", inputs.addCartBtnColor);
    shopping
      .getFirstCartView()
      .contains("View Product")
      .should("have.css", "color", inputs.viewProductColor);
    shopping.getFirsrtCartBtn().click();
    shopping.getModal().should("be.visible").find(".icon-box").should("exist");
    shopping
      .getModal()
      .should("be.visible")
      .find(".modal-title")
      .should("exist");
    shopping
      .getModal()
      .should("be.visible")
      .find(".modal-body > :nth-child(2)")
      .should("exist");
    shopping
      .getModal()
      .should("be.visible")
      .find(".modal-footer > .btn")
      .should("exist");
  });
});

let productName, productCost, productQuantity;
describe("checkout from HomePage", () => {
  it("Verify cart adding from home page", () => {
    registr.visit();
    cy.get(".overlay-content>h2")
      .eq(0)
      .invoke("text")
      .then(($val) => {
        productCost = $val;
      });
    cy.get(".overlay-content>p")
      .eq(0)
      .invoke("text")
      .then(($text) => {
        productName = $text;
      });
    cy.get(".add-to-cart").eq(0).click();
    cy.get("u").click();
    cy.get(".product_image").should("be.exist");
    cy.then(() => {
      cy.get(".cart_total_price").should("contain", productCost);
    });
    cy.get(".disabled").should("contain", "1");
    cy.get(".col-sm-6 > .btn").click();
    cy.get(".modal-footer > .btn").click();
    cy.get(".modal-body > :nth-child(1)").and(
      "have.text",
      "Register / Login account to proceed on checkout.".trim()
    );
  });
});

describe("Product page Search functionality", () => {
  it("Searches for a brand name and compares the result", () => {
    const brandName = "Dress";
    registr.visit("products");
    productpage.getsale_Image();
    productpage.getSearch().type(brandName);
    productpage.getSearchbtn().click();
    // Get the search result and compare it to the expected result
    cy.get(".productinfo > p")
      .should("be.visible")
      .and("contain.text", "Dress");
  });
});
