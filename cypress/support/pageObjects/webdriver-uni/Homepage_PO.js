class HomePage_PO {

    visitHomePage() {
        // we override the timeout for the visit command to wait for the page to load
        cy.visit(Cypress.env("webdriveruni_homepage"), {timeout: 6000});
    }
    
     clickOn_ContactUs_Button() {
         // this code hepls us to stay on the same page after clicking on the contact us button
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true }, {timeout:8000});
    }

}
// HomePage_PO.js names should be mayched this code will export our class globally
export default  HomePage_PO;