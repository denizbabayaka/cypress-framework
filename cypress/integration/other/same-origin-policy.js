/// <reference types="Cypress" />

describe("Cypress web security", () => {
    // Aim of this test is to overcome the issue of cypress is not vising different URL
    // at the same test run
    // "chromewebSecurity": false =>adding this option to cypress.json will overcome the issue

    it("Validate visiting two different domains", () => {
        //This issue still open in cypress and not resolved
        cy.visit('http://www.webdriveruniversity.com/');
        cy.visit('https://www.google.com/');

    });


    it("Validate visiting two diffrent domains via user actions", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()


    });
})