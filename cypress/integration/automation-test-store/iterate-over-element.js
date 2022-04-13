/// <reference types="cypress" />

describe("Iterate over elements", () => {
    // instaed of hard coding  this line of codes in every step we use beforeEach function
    //and it will execute before eveyry it block of code
     
    beforeEach(() => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    })
    it("Log information of all hair care products", () => {


        // Iterate over all the elements that have the class of product-name ith each method
        // and assign name of tjem to $el var  with index number 

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())


        });



    });
    it("Add specific product to basket", () => {


        //    Cypress.Commands.add("selectProduct",productName =>{
        //     cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        //         if ($el.text().includes(productName)) {
        //             cy.wrap($el).click();
        //         }
        //     })

        // })
        //This method comes from cypress commands.js it is a custom that command we created
        cy.selectProduct('Curls to straight Shampoo');
    });
    it("Add specific product to basket", () => {


        cy.selectProduct('Seaweed Conditioner');
    })

    it.only("Add specific product to basket", () => {


        cy.selectProduct('Pantene Pro-V Conditioner, Classic Care');
    })

});
