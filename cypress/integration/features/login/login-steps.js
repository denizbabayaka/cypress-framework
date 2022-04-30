/// <reference types="cypress" />
import {And, Before, Given, Then, When} from "cypress-cucumber-preprocessor/steps"

Given("I access the WebdriverUniversity Login Portal page", () => {
    cy.visit("http://www.webdriveruniversity.com/Login-Portal/index.html");
})
// {word} is a placeholder for a string if we change the webdriver from feature file new username will be feeded in
When("I enter a username {word}", (userName) => {
    cy.get("#text").type(userName)
})

And("I enter a password {word}", (password) => {
    cy.get("#password").type(password)
})

And("I click on the login buttton", () => {
    cy.get("#login-button").click()
})

Then("I should be presented with the following message {word} {word}", (message, message2) => {
    cy.get("#message").should("contain", "Login succeeded")
})