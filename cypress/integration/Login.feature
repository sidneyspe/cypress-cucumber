Feature: Login site CWI

    Scenario: View option to recover forgotten password
        Given I access the CWI website
        When I access the login page
        Then I should see the forgotten password recovery button
