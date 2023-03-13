Feature: I want to login into the site with valid and invalid data and search T-shirt



    Background: 
        Given I navigate to the Website

    Scenario: Login as new sign up user with valid data
        When I entered valid crediential 
            | email                 | validpassword |
            | qatubenew@yopmail.com | 12345         |
        When User click on sign in buttton
        Then Validate the title after login    

    Scenario: Login as new sign up user with invalid data
        When I entered invalid crediential 
            | email                 | invalidpassword |
            | qatubenew@yopmail.com | 123456          |
        When User click on sign in buttton
        Then Error message should display      
            | errormessage          |
            | Authentication failed |

    Scenario: : Search T-shirt from the site 
        When I entered the search criteria 
             | serachtext |
             | T-shirts   |
        And Click on serach button
        Then Validate the T-shirt name
             | tshirtName                  |
             | Faded Short Sleeve T-Shirts |


