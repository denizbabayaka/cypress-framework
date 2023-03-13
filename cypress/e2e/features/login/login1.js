/// <reference types="cypress" />
import {
  And,
  Before,
  Given,
  Then,
  When,
} from "cypress-cucumber-preprocessor/steps";

// Scenario 1

Given("I navigate to the Website", () => {
  cy.visit("http://automationpractice.com/");
});

When("I entered valid crediential", (datatable) => {
  datatable.hashes().forEach((element) => {
    cy.contains("Sign in").click();

    cy.get("#email").clear();

    cy.get("#email").type(element.email);

    cy.get("#passwd").clear();

    cy.get("#passwd").type(element.validpassword);
  });
});

When("User click on sign in button", () => {
  cy.get("#SubmitLogin").click();
});

Then("Validate the title after login", () => {
  cy.title().should("eq", "My account — My Store");
});

// Scenario 2

When("I entered invalid crediential", (datatable) => {
  datatable.hashes().forEach((element) => {
    cy.contains("Sign in").click();

    cy.get("#email").clear();

    cy.get("#email").type(element.email);

    cy.get("#passwd").clear();

    cy.get("#passwd").type(element.invalidpassword);
  });
});

When("User click on sign in button", () => {
  cy.get("#SubmitLogin").click();
});

Then("Error message should display", (datatable) => {
  datatable.hashes().forEach((element) => {
    cy.contains(element.errormessage);
  });
});

// Scenario 3

When("I entered the search criteria", (datatable) => {
  datatable.hashes().forEach((element) => {
    cy.get("#searchbox").type(element.serachtext);
  });
});

And("Click on serach button", () => {
  cy.get('[name="submit_search"]').click();
});

Then("Validate the T-shirt name", (datatable) => {
  datatable.hashes().forEach((element) => {
    cy.contains(element.tshirtName);
  });
});
