import Homepage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO'
/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    before(function () {
        cy.fixture('example').then(function (data) {
            //gives Error
            //this.data = data;
            globalThis.data = data;
        })
    })
    beforeEach('Test Contact Us form via WebdriverUni', () => {
        // cy.visit(Cypress.env("webdriveruni_homepage"))
        // cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
        //Those methods are coming from Homepage_PO.js as a common methods
        //and we initilize the constructor of our class
        const homepage_PO = new Homepage_PO();
        homepage_PO.visitHomePage();
        homepage_PO.clickOn_ContactUs_Button();



    })
    it("Should be able to submit a successful submission via contact us form", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        //This method comong from Contact_Us_PO.js file as a common method
        const contact_Us_PO = new Contact_Us_PO();
        contact_Us_PO.contactForm_Submission(data.first_name, data.last_name, data.email, data.message, 'h1', 'Thank You for your Message!');

        //cy.get('#contact-us').click({force: true})
        // cy.get('[name="first_name"]').type(data.first_name);
        // cy.get('[name="last_name"]').type(data.last_name);
        // cy.get('[name="email"]').type(data.email)
        // cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        // cy.get('[type="submit"]').click();
        // cy.get('h1').should('have.text', 'Thank You for your Message!')
        //This ,method will get the data from example.json file and pass as an argument to the method 
        //cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, data.email, "How can I learn Cypress?", 'h1', 'Thank You for your Message!');
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");

        // cy.get('[name="first_name"]').type(data.first_name);
        // cy.get('[name="last_name"]').type(data.last_name);
        // cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        // cy.get('[type="submit"]').click();
        // cy.get('body').contains('Error: all fields are required');
        //first_name is coming from first_name evv variable inside cpress.json file
        cy.webdriverUni_ContactForm_Submission(Cypress.env("first_name"), data.last_name, " ", "How can I learn Cypress?", 'body', 'Error: Invalid email address');
    });
    //if we want to change env variable during run time use this code  SEC:47-182
    // ./node_modules/.bin/cypress run --headed --browser chrome --spec cypress/integration/webdriver-uni/contact-us_FINAL.js --env first_name=Tim

})