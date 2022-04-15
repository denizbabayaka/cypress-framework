class AutoStore_Haircare_PO {

    addHairCareProductsToBasket () {
        globalThis.data.productName1.forEach(function(element) {
            //This method is coming from cypress commands.js file
            cy.addProductToBasket(element).then(() => {
                //at thet point we can debug out test  inside developer tools
                //debugger;
            })
        })
        cy.get('.dropdown-toggle > .fa').click().debug();


      }

    }

export default  AutoStore_Haircare_PO;