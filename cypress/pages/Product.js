class ProductPage {
  getsale_Image() {
    return cy.get("#sale_image");
  }
  getSearch() {
    return cy.get("#search_product");
  }
  getSearchbtn() {
    return cy.get("#submit_search");
  }
}

export const productpage = new ProductPage();


class AddToCart {
  visit(endpoint) {
    cy.visit(Cypress.env("globalUrl") + endpoint);
  }

  getFirstCart() {
    return cy.get(".features_items > :nth-child(3)");
  }
  getFirstProductimg() {
    return cy
      .get(
        ".features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > img"
      )
      .should("be.visible")
      .and("have.attr", "src", "/get_product_picture/1");
  }
  getFirstCart2() {
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