/// <reference types="Cypress" />





describe("Test Contact Us form via WebdriverUni", () => {
    // this before function will get data from example. file and assign it data varible
    //and we initialize our json file 
    before(function () {
        cy.fixture('example').then(function (data) {
            //this.data = data; // this do not work 
            globalThis.data = data;
        })
    })
    it("Should be able to submit a succesfull submission via contact us form", () => {
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("https://webdriveruniversity.com");
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        //cy.get('#contact-us').click({force:true})
        cy.get('[name="first_name"]').type(data.first_name)//this logic comes from before function above
        cy.get('[name="last_name"]').type(data.last_name)
        cy.get('[name="email"]').type(data.email)
        cy.get('textarea.feedback-input').type("This is a test")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')




    });

    it.only("Should not be able to submit a succesfull submission via contact us form as all fiels are required", () => {
        // only runs this test
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("https://webdriveruniversity.com");
        //.invoke('removeAttr', 'target').click({force:true}) this code will not open a new tab
        // browser will remain in the same tab and will not open a new tab SEC:28 -97
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
        //This method comes from commands.js when passing the arguments data mast be in 
        //order with the method inside commands.js`
        cy.webdriverUni_ContactForm_Submission('Deniz', 'Babayaka', 'deniz@gmail.com', 'I am learning Cypress', 'h1', 'Thank You for your Message!')
    });
})