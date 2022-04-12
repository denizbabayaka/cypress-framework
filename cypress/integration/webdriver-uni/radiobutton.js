/// <reference types="Cypress" />



describe("Verify radiobuttons via webdriveruni", () => {
    before(function () {
        cy.visit("https://webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })

    })
    it("Check specific radiobuttons", () => {

        // // It will check the first radiobutton and then validate 
        // cy.get('#radio-buttons').find('[type="radio"]').first().check().should('be.checked')
        // // it will find the second index and check it
        // cy.get('#radio-buttons').find('[type="radio"]').eq(1).check().should('be.checked')

        var i = 0;
        for (i = 0; i < 5; i++) {
            cy.get('#radio-buttons').find('[type="radio"]').eq(i).check().should('be.checked')

        }










    })

    it.only("Validate the specific state of radio buttons", () => {

        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='pumpkin']").should('be.checked')

        cy.get("[value='lettuce']").check()
        cy.get("[value='lettuce']").should('be.checked')
        cy.get("[value='pumpkin']").should('not.be.checked')
        cy.get("[value='cabbage']").should('be.disabled')
    });

})