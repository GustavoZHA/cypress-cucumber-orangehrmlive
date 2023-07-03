Feature: Login
    Background:
        Given I navigate orangehrmlive-demo page

    @regression
    Scenario: Login succesfull
        When I login as "Admin" with the passsword "admin123"
            And Click Login button
        Then Verify the orangehrm should be displayed

    Scenario Outline: Login Failed
        When I login as "<userName>" with the passsword "<password>"
            And Click Login button
        Then Verify the alert message should be "Invalid credentials"

        Examples:
            | userName      | password     |
            | standard_user | secret_sauce |
            | Admin         | admin1234    |
