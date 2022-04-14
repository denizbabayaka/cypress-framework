/// <reference types="Cypress" />



describe("Validate webdriveruni hompage links", () => {
    it("Confirms links redirect to the correct pages", () => {
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("https://webdriveruniversity.com");
        // it will remain in the same browser tab
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
        cy.url().should('include', 'contactus')
        // this code will go back to the home page 
        cy.go('back')
        // cy.reload(true) reload without using cache
        cy.reload(true)
        cy.url().should('include', 'https://webdriveruniversity.com/')
        cy.go('forward')
        //will go to the contact us page
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({ force: true })
        cy.url().should('include', 'Login-Portal')
        cy.go('back')   // will go to the home page
        //This code also works
        //cy.visit('#section-title').contains('TO DO LIST').invoke('removeAttr', 'target').click({ force: true })
        // target has to be at the same line with id inside DOM
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({ force: true })
        cy.go('back')




    });
});