class Contact_Us_PO {
        contactForm_Submission(firstName, lastName, email, comment, $selector, textToLocate)  {
        cy.get ('[name="first_name"]').type(firstName);
        cy.get ('[name="last_name"]').type(lastName);
        cy.get ('[name="email"]').type(email)
        cy.get('textarea.feedback-input').type(comment)
        cy.get('[type="submit"]').click();
        //if assertion not met expectation incase it will wait 10 sec and then fail
        cy.get ($selector).contains(textToLocate, {timeout: 10000})
        //this will create a screenshot of the page with test name
        //be careful if the above tetst fail it will not create a screenshot 
        cy.screenshot();
        //this will create a screenshot of the page with custom name inside the screenshots folder
        cy.screenshot('contact-us-form-submission-success');

    }

}
// names should be mayched this code will export our class globally
export default  Contact_Us_PO;