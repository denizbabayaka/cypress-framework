/// <reference types="cypress" />
import {And, Before, Given, Then, When} from "cypress-cucumber-preprocessor/steps"

let stub;

//Before hook to create a stub for  to automatically handling pop up windows
Before(() => {
    cy.log('Executing before step')
    // stub is a function that will be called before each test
    stub = cy.stub();
})

Given("I access the WebdriverUniversity Login Portal page", () => {
    cy.visit("http://www.webdriveruniversity.com/Login-Portal/index.html");
})
// {word} is a placeholder for a string if we change the webdriver from feature file new username will be feeded in
When("I enter a username {string}", (userName) => {
    cy.get("#text").type(userName)
})

And("I enter a password {string}", (password) => {
    cy.get("#password").type(password)
})

And("I click on the login buttton", () => {
    cy.get("#login-button").click()
    //This will capture the pop up window and  get the content inside the pop up window
    cy.on('window:alert', stub)
})

Then("I should be presented with the following message {word} {word}", (message, message2) => {
    //This will check if the stub is called or not
    const expectedMessage = message +" "+message2;
    cy.log(expectedMessage) //This will log the message in the console
    cy.log(stub.getCall(0)) //This will log the stub message in the console
    expect(stub.getCall(0)).to.be.calledWith(expectedMessage)
})   