/// <reference types="cypress" />


describe("Add multiple items to basket", () => {
    before(function () {
        
        //This data  inside this method coming from product.json file stored as an Array
        cy.fixture('product').then(function (data) {

            globalThis.data = data;
        })

    })
    beforeEach(function () {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
      });
    it("Log information of all hair care products", () => {
        //This will iterate through the array productName array inside the product.json file
        //and assign all of them  to the variable element 
        
        
        globalThis.data.productname.forEach(function (element) {
            // and then we will pass it as an argument to addProductTobasket method coming from
            //cypress commands.js file 
            cy.addProductToBasket(element);
        })
     
    });
});