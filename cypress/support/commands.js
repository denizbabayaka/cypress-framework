// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add("navigateTo_WebdriverUni_Homepage", () =>{
    cy.visit("/")
})

Cypress.Commands.add("navigateTo_WebdriverUni_Checkboxes", () =>{
    cy.visit("/" + "/Dropdown-Checkboxes-RadioButtons/index.html")
})

Cypress.Commands.add("selectProduct", productName => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if ($el.text().includes(productName)) {
            cy.wrap($el).click();
        }
    });

})

// This method will get all the products assign to $el var and then itarate through all the products
// if the condition matchs then it will click on that product
Cypress.Commands.add("addProductToBasket", productName => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if ($el.text() === productName) {
            cy.log($el.text())
            cy.get('.productcart').eq(index).click();
        }
    });

})

Cypress.Commands.add("webdriverUni_ContactForm_Submission", (first_name, last_name,email,comment, $selector,textToLocate,  ) => {
    cy.get('[name="first_name"]').type(first_name)//this logic comes from before function above
    cy.get('[name="last_name"]').type(last_name)
    cy.get('[name="email"]').type(email)
    cy.get('textarea.feedback-input').type(comment)
    cy.get('[type="submit"]').click()
    cy.get($selector).contains(textToLocate)
})



// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// This wiil enable us to use file upload functionality
import 'cypress-file-upload';
