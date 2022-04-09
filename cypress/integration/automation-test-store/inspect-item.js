/// <reference types="Cypress" />



describe("Inspect Automation Test Store items using chain of commands", () => {
    it("Click on the first item using item header",() => {
       cy.visit("https://automationteststore.com");
       cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
      
       
    });

    it.only("Click on the first item using item text",() => {
        cy.visit("https://automationteststore.com");
        //prdocutname is a class name of the first item and contains the text of the item
        //then will return the first item in the list of items and it ill order the sequence of execution 
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText)  {
            console.log("Selected the following item :"+ itemHeaderText.text());
       
        })
        
     });

     it("Click on the first item using index",() => {
        cy.visit("https://automationteststore.com");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click(); 
        
       
        
     });

})