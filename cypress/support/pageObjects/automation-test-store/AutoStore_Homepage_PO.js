class AutoStore_Homepage_PO {


    accessHomePage() {
        //This env  variable is coming from cypress.json file

        cy.visit(Cypress.env("automationteststore_homepage"));
        cy.get("a[href*='product/category&path=']").contains("Hdir Care").click();

        


    
    }



export default  AutoStore_Homepage_PO;