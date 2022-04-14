/// <reference types="Cypress" />



describe("Interact with dropdown lists via webdriveruni", () => {
    it("Select specific values via select dropdown list ", () => {
        cy.visit("https://webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
        //cy.get('#dropdowm-menu-1').select('c#')
        // cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')
        // //cy.get('#dropdowm-menu-3').select('javascript')
        // //select based on tex option in DOM 
        // cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery') 


        //asserting the value of dropdown list
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
        //asserting the text of dropdown list
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')




    });
})