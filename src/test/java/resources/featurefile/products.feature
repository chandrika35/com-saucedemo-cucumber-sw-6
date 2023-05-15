Feature: Products Test
  As a user I want to check that there are six products displayed on the products page

    @Smoke @Regression
    Scenario: Verify the text "Products" on products homepage
     Given I am on the productsHomePage
      When I entered successfully the username "standard_user"
      And I entered successfully the password "secret_sauce"
      And I clicked on login button
     And  I should verify the product text is displayed on the page
     Then I should verify that six number of products are displayed on the page






