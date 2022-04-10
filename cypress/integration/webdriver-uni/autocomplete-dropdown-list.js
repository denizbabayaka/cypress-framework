/// <reference types="Cypress" />



describe("Verify Autocomplete dropdown lists via webdriveruni", () => {
    it("Select specific values via select dropdown list ", () => {
        cy.visit("https://webdriveruniversity.com");
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#myInput').type('A')
        //This locator will capture all the options in the dropdown list starting with A and
        //assign it to $el variable
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            //This will get all the options in the dropdown list as text 
            const prod = $el.text()
            const productToSelect = 'Avacado';
            if (prod === productToSelect) {
                $el.click();
                cy.get('#submit-button').click();
                cy.url().should('include', productToSelect)
            }
            // instead of writing a it block we can continue out test with diffrent parameters
            //by using then actually we can chain the test
        }).then(() => {


            cy.get('#myInput').type('g')
            // this will iterate through the dropdown list through each method 
            // and assign it to $el variable
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                //This will get all the options in the dropdown list as text 
                const prod = $el.text()
                const productToSelect = 'Grapes';
                if (prod === productToSelect) {
                    //click command depriciated with this version of cypress
                    //$el.click();
                    $el.trigger("click")
                    cy.get('#submit-button').click();
                    cy.url().should('include', productToSelect)
                }
            })




        })
    })


});

