/// <reference types="cypress" />

describe("Verify checkboxes via webdriveruni", () => {
    //Since it is repepetive we can use beforeEach function to do the same thing
    //before all tests in the block
    beforeEach(function () {
        cy.visit("https://webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
    })

    it("Check and validate checkbox", () => {


        //cy.get('#checkboxes > :nth-child(1) > input').check()
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        //cy.get('@option-1').check();
        cy.get('@option-1').check().should('be.checked')
    });

    it("Uncheck and validate checkbox", () => {


        cy.get(':nth-child(5) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')
    });

    it("Check multiple checkboxes", () => {


        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')
    });
})