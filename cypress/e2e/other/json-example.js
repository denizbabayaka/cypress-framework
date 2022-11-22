/// <reference types="cypress" />
describe("JSON Object ", () => {
    it("Json Object Example", () => {

        const exampleObject = { "key": "Tim", "key2": "Jones" };
        const exampleArrayofValues = ["Sophie", "Rose", "Howard"]

        const exampleArraysOfObjects = [
            {"key":"Deniz"},
            {"key1":"Ali"},
            {"key2":"Hasan"}
        ]

        const users = {
            "firstName": "Joe",
            "lastName": "Blogs",
            "Age": 30,
            "Students": [
                {
                    "firstName": "Jim",
                    "lastName": "Blogs",
                },
                {
                    "firstName": "Sarah",
                    "lastName": "Parker",
                }

            ]

        }





        // basedon the created Json aobject we created  we extract data of key and keys 

        cy.log(exampleObject["key"]);
        cy.log(exampleObject["key2"]);
        cy.log(exampleObject.keys);

        cy.log(exampleArrayofValues[0]);
        cy.log(exampleArrayofValues[1]);
        cy.log(users.lastName);
        
        cy.log(users.Students[0].firstName);
        cy.log(exampleArraysOfObjects[0].key);
        cy.log(exampleArraysOfObjects[1].key1);
        cy.log(exampleArraysOfObjects[2].key2);

       



    });


})
