/// <reference types="cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    before(function () {
        // we are calling our userDetails file hare and assigning it to a variable
        cy.fixture("userDetails").as("user")

    })

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href$='contact']").click().then(function (linkText) {
            cy.log("Clicked on link using text: " + linkText.text())
        })
        //cy.xpath("//a[contains(@href, 'contact')]").click();
        // and use that user variable to fill the form
        cy.get("@user").then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_Name);
            cy.get('#ContactUsFrm_email').type(user.email);

        })

        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?")
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        cy.log("Test has completed!");
    });

})
