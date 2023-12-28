class Pagination {
  visit(endpoint) {
    cy.visit(Cypress.env("globalUrl") + endpoint);
  }
  getbtnTC() {
    return cy.get(".active > :nth-child(1) > .test_cases_list > .btn");
  }
  getbtnAPIList() {
    return cy.get(".active > :nth-child(1) > .apis_list > .btn");
  }
}

export const pagination = new Pagination();

class AddToCart {
  visit(endpoint) {
    cy.visit(Cypress.env("globalUrl") + endpoint);
  }

  getFirstCart() {
    return cy.get(".features_items > :nth-child(3)");
  }
  getFirstCartImg() {
    return cy
      .get(
        ".features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > img"
      )
      .should("be.visible")
      .and("have.attr", "src", "/get_product_picture/1");
  }
  //   /html/body/div[2]/div/div/div/a
  getFirstCarth2() {
    return cy
      .get(
        ".features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > h2"
      )
      .contains("Rs. 500");
  }
  getFirstCartTitle() {
    return cy
      .get(
        ".features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p"
      )
      .contains("Blue Top");
  }
  getFirsrtCartBtn() {
    return cy
      .get(
        ".features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn"
      )
      .contains("Add to cart");
  }
  getFirstCartView() {
    return cy.get(
      ":nth-child(3) > .product-image-wrapper > .choose > .nav > li > a"
    );
  }

  getCartOverlay(arg) {
    return cy.get(".product-overlay").eq(arg);
  }

  getModal() {
    return cy.get(".modal-content");
  }
}
export const shopping = new AddToCart();
