/// <reference types="Cypress" />

const { should } = require("chai");

describe("Verifying the Storm presence", () => {
  it("Verify Mindy storm in the list", () => {
    cy.visit(" https://coast.noaa.gov/hurricanes/");
    cy.xpath("(//input[@class='react-autosuggest__input'])[1]").type(
      "Charleston County, South Carolina USA"
    );

    cy.get(
      "#react-autowhatever-suggestions-section-0-item-0 > .suggestion"
    ).click();

    cy.xpath("//h2[text()='MINDY 2021']").click();
    //cy.get("//span[text()='1005.0']").should('have.text','1005.0');

    //   cy.get("//div[@class='card__header']").each(($el,index,$list) =>{

    //   })
  });
});
