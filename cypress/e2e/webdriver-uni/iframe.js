/// <reference types="Cypress" />



describe("Handling IFrames & Modals", () => {
    it("Handle webdriveruni iframe and modal", () => {
        cy.visit("https://webdriveruniversity.com");
        cy.get('#iframe').invoke('removeAttr', 'target').click({ force: true })

        cy.get('#frame').then(($iframe) => {
            //grab the contents of iframe from the body  and store it in a variable $iframe
            const body = $iframe.contents().find('body')
            // cy.wrap() is used to wrap the body variable into a iframe variable 
            cy.wrap(body).as('iframe')
            // we are  inside the iframe now and click on the button
            cy.get('@iframe').find('#button-find-out-more').click()

            cy.get('@iframe').find('#myModal').as('modal')
            // get the text of the open window inside the alert and verify it is equal to the text we are expecting
            cy.get('@modal').should(($expectedText) => {
                //assign the text to text variable
                const text = $expectedText.text()
                // and make assertion
                expect(text).to.include('Welcome to webdriveruniversity.com we sell')

            })

            cy.get('@modal').contains('Close').click()

        })




    });
})
