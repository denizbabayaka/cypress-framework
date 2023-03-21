/// <reference types="cypress" />

describe("Test isolation example", () => {
  it("Visit the Website", () => {
    cy.visit("https://www.google.com");
  });
  it("Type a search term,and press enter", () => {
    cy.get(".gLFyf").type("hello masters!{enter}");
  });
});
