/// <reference types="Cypress" />
describe("Test Datepicker via webdriveruni", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
        cy.get("#datepicker").click();
    })
    it("Select date from the datepicker", () => {

        // let date = new Date();
        // date.setDate(date.getDate());
        // cy.log(date.getDate()) // get current date i.e. 22

        // let date1 = new Date();
        // date1.setDate(date1.getDate() + 5 )
        // cy.log(date1.getDate()) // get current date i.e. 22 + 5 = 27

        // we create an object of date class and assign it to a variable called date
        var date = new Date();
        /*
        based on the added day to the current date  our logic will work accordingly
        basically we create  new date which is 325 days more than current date and compare it 
        to current date 
        */
        date.setDate(date.getDate() + 360);

        //this will select the year
        var futureYear = date.getFullYear();
        //this will select the month
        var futureMonth = date.toLocaleString("default", { month: "long" });
        //this will select the day
        var futureDay = date.getDate();
        cy.log("Future year to select: " + futureYear);
        cy.log("Future month to select: " + futureMonth);
        cy.log("Future day to select: " + futureDay);

        function selectMonthandYear() {
            // this will select the month and year from the datepicker at the first option
            //and assign it to a variable called currentDate 
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                // it will compare the 2 date variable and if they are not equal 
                //it will go to the next element
                if (!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click();
                    //this will call our function and it will iterate till finding
                    // correct condition of year 
                    selectMonthandYear();
                }

            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    // based on the condition it will check the month and iterate till finding
                    if (!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click();
                        selectMonthandYear();

                    }
                })
            })
        }

        function selectFutureDay() {
            // this will get all the date body and search for the future day variable 
            // that we created above
            cy.get('[class="day"]').contains(futureDay).click();

        }
        //we call the function outside the function  block
        selectMonthandYear();
        selectFutureDay();
    });
})