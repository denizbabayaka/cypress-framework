import AutoStore_Homepage_PO from '../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO';

/// <reference types="cypress" />


describe("Add multiple items to basket", () => {
    const autoStore_Homepage_PO = new AutoStore_Homepage_PO();


    before(function () {

        //This fixture method will assign whatever  inside the array at  product.json file
        // to the  data variable 
        cy.fixture('product').then(function (data) {

            globalThis.data = data;
        })

    })
    beforeEach(function () {
        // cy.visit("https://automationteststore.com/");
        // cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        //Instead of hard coding we will use our custom methods
        autoStore_Homepage_PO.accessHomePage();
        autoStore_Homepage_PO.clickOn_HairCare_Link(); 
    });
    it("Log information of all hair care products", () => {
        //This will iterate through the array productName1 array inside the product.json file
        //and assign all of them  to the variable element 


        globalThis.data.productName1.forEach(function (element) {
            // and then we will pass it as an argument to addProductTobasket method coming from
            //cypress commands.js file 
            cy.addProductToBasket(element);
        })
        cy.get('.dropdown-toggle > .fa').click();

    });
});