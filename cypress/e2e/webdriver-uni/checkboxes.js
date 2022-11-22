/// <reference types="Cypress" />



describe("Verify checkboxes via webdriveruni", () => {
    it("Check and validate checkbox",  () => {
        cy.visit("https://webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
        // it will check the first checkbox and then validate it in line below
        // cy.get('#checkboxes > :nth-child(1) > input').check()
        // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked') 
        // implementing code has to be order regarding options Line 13 and 16 otherwise 
        //it will not work
        cy.get('#checkboxes1 > :nth-child(1) > input').as('option1')
        cy.get('@option1').check()
        cy.get('@option1').check().should('be.checked')
        cy.get(':nth-child(5) > input').as('option3').as('option3')
        cy.get('@option3').uncheck
        cy.get('@option3').uncheck().should('not.be.checked')



    })





    it("Check and validate checkbox", () => {
        cy.visit("https://webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
        //This approach is working
        //cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')

        var i = 0;
        for (i = 1; i < 5; i++) {
            cy.get('input[value="option-' + i + '"]').check().should('be.checked')
            cy.get('input[value="option-' + i + '"]').uncheck()








        }

    })

})
