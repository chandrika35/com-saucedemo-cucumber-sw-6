Feature: Login Test
  As user I want to login into saucedemo website
  @Sanity @Regression
  Scenario: User should login successfully with valid credentials
    Given I am on loginpage
    When I enter username "standard_user"
    And I enter password "secret_sauce"
    And I click on login button
    Then I should login successfully