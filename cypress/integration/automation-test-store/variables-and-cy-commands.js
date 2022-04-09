/// <reference types="Cypress" />


//describe comes from the mocha library
describe("Verifying variables,cypress commands and jquery commands", () => {
    //     it("Navigating to specific product pages",() => {
    //         cy.visit("https://automationteststore.com/");
    //        //get all the links that have the href that contains product/category$path=      
    //         const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup") 
    //         makeupLink.click();
    //         const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare") 

    //         skincareLink.click();   
    //      });

    //This code will fail we have to click the var one by one
    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/");
        //  const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup") 
        //  const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare") 
        //  makeupLink.click();
        //  skincareLink.click();

        //Recommendation: Use the below code to click on the links
        cy.get("a[href*='product/category&path=']").contains("Skincare").click();
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    });

    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        // Following code will fail
        // const header = cy.get("h1 .maintext");
        // cy.log(header.text())

        // here, then returns the text of .maintext elements and assign to headerText variable
        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).to.eq("Makeup")

        })


    });

    it("Validate properties of the Contact Us Page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

        // Uses cypress commands and chaining
        // validates the text of #field_11 element which is child of #ContactUsFrm element
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')


        // JQuery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

            //Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                // prints the text inside the element 
                cy.log(fnText.text())
                //prints the html of the element :<div#field_11.form-group.form_field>
                cy.log(fnText)

            })



        })





    })

})
