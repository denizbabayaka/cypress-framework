/// <reference types="Cypress" />



describe("Test File Upload via webdriveruni", () => {
    it("Upload afile ....", () => {
        cy.visit("https://webdriveruniversity.com");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true })
        cy.fixture("Deniz.jpg", "base64").then(fileContent => {
            cy.get("#myFile").attachFile(

                {
                    fileContent,
                    fileName: "Deniz.jpg",  // optional, will default to "image.jpg"    
                    mimeType: "image/jpeg" // optional, will default to "image/png"

                },
                {
                    uploadType: "input"
                }



            )

        })
        cy.get('#submit-button').click();

        //npm install --save-dev cypress-file-upload => to install the plugin
    });
    it("Upload no  file ....", () => {
        cy.visit("https://webdriveruniversity.com");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#submit-button').click();

        //npm install --save-dev cypress-file-upload => to install the plugin
    });
})