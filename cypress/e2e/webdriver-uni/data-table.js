/// <reference types="Cypress" />
describe("Handling data via webdriveruni", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
    it("Calculate and assert total age of all users", () => {

        var userDetails = [];
        let numb = 0;
        //this will find all the rows in the table and store it in a variable called el
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            //during the iteration  will store the index number to the array 
            // and the value of the index will be the text of the element
            userDetails[index] = $el.text();
        }).then(() => {
            var i;
            //this Number method  will get all the numbers from the array and assign it to the variable numb 
            for (i = 0; i < userDetails.length; i++) {
                if (Number(userDetails[i])) {
                    numb += Number(userDetails[i]);
                }

            }

            cy.log("Found total age:" + numb)
            expect(numb).to.eq(322)

        })


    })
    it("Calculate and assert the age of a given user based on last name ", () => {

        // this will get all the element inside Smith row and store it in a variable called el
        cy.get(' #thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text();
            //conditon for  Woods   name from the table during each iteration
            if (text.includes("Woods")) {
                //when iteration locates the element include Woods it will move next to it and get the next element
                //and store it in a variable called userAge
                //function(age) will get the age from next() element
                // then store it in a variable called userAge
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function (age) {
                    const userAge = age.text();
                    expect(userAge).to.equal("80")
                })

            }


        })

    });

})
