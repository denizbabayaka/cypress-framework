/// <reference types="Cypress" />



describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a succesfull submission via contact us form",() => {
       //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
       cy.visit("https://webdriveruniversity.com");
       cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
       cy.document().should('have.property','charset').and('eq','UTF-8')
       cy.title().should('include','WebDriver | Contact Us')
       cy.url().should('include','contactus')
       //cy.get('#contact-us').click({force:true})
       cy.get('[name="first_name"]').type("Deniz")
       cy.get('[name="last_name"]').type("Babayaka")
       cy.get('[name="email"]').type("deniz@gmail.com")
       cy.get('textarea.feedback-input').type("This is a test")
       cy.get('[type="submit"]').click()
       cy.get('h1').should('have.text','Thank You for your Message!')
       



    });

    it("Should not be able to submit a succesfull submission via contact us form as all fiels are required",() => {
        // only runs this test
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("https://webdriveruniversity.com");
        //.invoke('removeAttr', 'target').click({force:true}) this code will not open a new tab
        // browser will remain in the same tab and will not open a new tab SEC:28 -97
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.get('[name="first_name"]').type("Deniz")
        cy.get('[name="last_name"]').type("Babayaka")
        cy.get('textarea.feedback-input').type("This is a test")
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
    });
})