/// <reference types="cypress" />

describe("Iterate over elements", () => {
    it("Log information of all hair care products", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

        // Iterate over all the elements that have the class of product-name ith each method
        // and assign name of tjem to $el var  with index number 

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())


        });



    });
    it("Add specific product to basket", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            if ($el.text().includes('Curls to straight Shampoo')) {
                cy.wrap($el).click()
            }
        });
    });
})
