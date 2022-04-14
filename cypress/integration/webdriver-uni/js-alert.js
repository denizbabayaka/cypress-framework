/// <reference types="Cypress" />



describe("Handle js alerts", () => {
    it("Confirms js alert containd the correct text", () => {
        cy.visit("https://webdriveruniversity.com");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#button1').click();
        // This line of code will go inside alert and capture the text assign to string 
        // verify it is equal to the text we are expecting
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!');
        })


    })

    it("Confirms js alert containd the correct text", () => {
        cy.visit("https://webdriveruniversity.com");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#button4').click();
        // This code will click ok inside alert and capture the text assign to string
        cy.on('window:alert', (str) => {
            return true;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')

    })

    it("Confirms js alert containd the correct text", () => {
        cy.visit("https://webdriveruniversity.com");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#button4').click();
        // if you want to press cancel button write confirm instead of alert
        cy.on('window:confirm', (str) => {
            return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')

    })

    it.only("Validate js confirm alert using a stub", () => {
        cy.visit("https://webdriveruniversity.com");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })

        const stub = cy.stub();
        cy.on('window:confirm', stub);


        cy.get('#button4').click().then(() => {
            //stub will get all the messagees inside the alert and based on the getCall(0) index
            // it will return the message we want to capture and verify to.be .calledWith method
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')

        }).then(() => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
    });
})