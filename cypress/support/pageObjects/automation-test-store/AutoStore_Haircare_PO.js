class AutoStore_Haircare_PO {

    addHairCareProductsToBasket () {
        //globalThis.data coming from fixture file product array
        globalThis.data.productName1.forEach(function(element) {
            //This method is coming from cypress commands.js file and pass the element as parameter 
            cy.addProductToBasket(element).then(() => {
                //at thet point we can debug out test  inside developer tools
                //debugger;
            })
        })
        cy.get('.dropdown-toggle > .fa').click().debug();


      }

    }

export default  AutoStore_Haircare_PO;