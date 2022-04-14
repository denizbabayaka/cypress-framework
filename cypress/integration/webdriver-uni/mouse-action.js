/// <reference types="Cypress" />



describe("Test maouse actions", () => {
    it("Scroll element into view ", () => {
        cy.visit("https://webdriveruniversity.com");
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })





    });
    it("I should be able to drag and drop a draggable item ", () => {
        cy.visit("https://webdriveruniversity.com");
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        // this commnad will click the center of the element
        cy.get('#draggable').trigger('mousedown', { which: 1 })
        // this command will drag the element and drop it to the target
        //cy.get('#droppable').trigger('mouseover').trigger('mouseup',{force:true})
        // this command will drag the element and drop it to the target as well 
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
    })

    it("I should be able to perform a double mouse click", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        cy.get('#double-click').dblclick()

    });

    it.only("I should be able to hold down the left mouse click button on a given element ", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        cy.get('#click-box').trigger('mousedown', { which: 1 }).then(($element) => {
            // this will check the css formt of element from style attribute inside DOM and assert it
            cy.expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })

    })

});


