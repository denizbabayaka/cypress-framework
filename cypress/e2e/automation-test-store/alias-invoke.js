/// <reference types="cypress" />

describe("Alias and invoke", () => {
    it("Validate a specific hair care product", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        //located all the headers and isolated to the 0 element and assign the invoked text 
        // as productThumbnail  as alias 
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        // our element is now dynamic  as an alias productThumbnail
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')




    });

    it("Validate a specific thumbnail product on the home page ", () => {
        cy.visit("https://automationteststore.com/")


        // as alias assign .thumbnail class to Thumbnail variable  Ders:89 SEC:24
        cy.get('.thumbnail').as('Thumbnail')
        cy.get('@Thumbnail').should('have.length', 16)
        // goes to the child .productcart and then invoke title and assert actual title
        // is equal to the expected title
        cy.get('@Thumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')




    });

    it.only("Calculate total of normal and sale products ", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('.thumbnail').as('Thumbnail')
        // iterate all the @Thumbnail elements and find the elements with class name .oneprice 
        // assign them to the variable $el and get the index number of the elements
        // cy.get('@Thumbnail').find('.oneprice').each(($el, index, $list) => {

        //     cy.log($el.text())






        //invoke command extract the text of the elements and assign it to the variable as itemPrice
        // those are chained commands 
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
        var itemsTotal = 0;
        // here then command is used to get the text of the variable itemPrice and assign it to the variable linkText
        cy.get('@itemPrice').then($linkText => {
            var itemPriceTotal = 0
            // when it sees a $ sybmol it split remove it and print the rest of the text
            var itemPrice = $linkText.split('$')
            var i;
            for (i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                //Number command converts the string to a number and add it to the itemPriceTotal
                itemPriceTotal += Number(itemPrice[i])

            }
            itemsTotal += itemPriceTotal;
            cy.log('Total of Pricees is : ' + itemPriceTotal)

        });

        //Extract the item of each sale item and add them to the saleItemTotal
        cy.get('@saleItemPrice').then($linkText => {
            var saleItemPrice = 0;
            var saleItemPriceTotal = $linkText.split('$')
            var i;

            for (i = 0; i < saleItemPriceTotal.length; i++) {
                cy.log(saleItemPriceTotal[i])
                saleItemPrice += Number(saleItemPriceTotal[i])


            }
            itemsTotal += saleItemPrice;
            cy.log('Total of Sale Prices is : ' + saleItemPrice)


        })
            .then(() => {
                cy.log('Total of all prices is : ' + itemsTotal)
                expect(itemsTotal).to.equal(648.5)

            })

    });
});
