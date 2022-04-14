class HomePage_PO {

    visitHomePage() {
        cy.visit(Cypress.env("webdriveruni_homepage"));
    }
    
     clickOn_ContactUs_Button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    }

}
// HomePage_PO.js names should be mayched this code will export our class globally
export default  HomePage_PO;