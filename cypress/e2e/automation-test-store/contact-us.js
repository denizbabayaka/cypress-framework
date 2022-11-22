/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    before(function () {
        // we are calling our userDetails file hare and assigning it to a variable
        cy.fixture("userDetails").as("user")

    })
    it("Should be able to submit a succesfull submission via contact us form", () => {
        cy.visit("https://automationteststore.com/");
        //once we click on the first item we will get the text of the item and then function will return the text of the item
        cy.get("a[href$='contact']").contains('Contact Us').click().then(function (contactUsLink) {
            cy.log("Clicked on the contact us link :" + contactUsLink.text());
        })
        cy.get("@user").then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_Name);
            cy.get('#ContactUsFrm_email').type(user.email);

        })
        //cy.xpath("//a[contains(@href,'contact')]").click();
        //css:[id="ContactUsFrm_enquiry"]
        //xpath://input[contains(@name,'em')]
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        //xpath: //textarea[@id="ContactUsFrm_enquiry"]
        cy.get('#ContactUsFrm_enquiry').type("This is a test")
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        cy.log('Test has completed!')




    });

})