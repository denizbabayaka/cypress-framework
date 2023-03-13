/// <reference types="cypress" />

const apiBaseUrl = Cypress.env("API_BASE_URL");
describe("Books API", () => {
  it("Retrieves a list of books", () => {
    cy.request(`${apiBaseUrl}/api/books`)
      .its("body")
      .should("be.an", "array")
      .and("have.length.greaterThan", 0);
  });
});