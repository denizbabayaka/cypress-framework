/// <reference types="cypress" />

describe("Disable logs for request", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/login");
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });

  it("Login with logs", () => {
    cy.wait(1000);
  });
});
