class AutoStore_Haircare_PO {

    addHairCareProductsToBasket () {
        globalThis.data.productName1.forEach(function(element) {
            //This method is coming from cypress commands.js file
            cy.addProductToBasket(element)
        })
        cy.get('.dropdown-toggle > .fa').click();


      }

    }

export default  AutoStore_Haircare_PO;