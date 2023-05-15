$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into saucedemo website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8228178400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    },
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter username \"standard_user\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 156332100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 442316600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 117942400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 176655600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 28200,
  "status": "passed"
});
formatter.after({
  "duration": 757375300,
  "status": "passed"
});
formatter.uri("products.feature");
formatter.feature({
  "line": 1,
  "name": "Products Test",
  "description": "As a user I want to check that there are six products displayed on the products page",
  "id": "products-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2348397100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify the text \"Products\" on products homepage",
  "description": "",
  "id": "products-test;verify-the-text-\"products\"-on-products-homepage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the productsHomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I entered successfully the username \"standard_user\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I entered successfully the password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I clicked on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should verify the product text is displayed on the page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should verify that six number of products are displayed on the page",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductsSteps.iAmOnTheProductsHomePage()"
});
formatter.result({
  "duration": 74000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 37
    }
  ],
  "location": "ProductsSteps.iEnteredSuccessfullyTheUsername(String)"
});
formatter.result({
  "duration": 167908300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 37
    }
  ],
  "location": "ProductsSteps.iEnteredSuccessfullyThePassword(String)"
});
formatter.result({
  "duration": 121311800,
  "status": "passed"
});
formatter.match({
  "location": "ProductsSteps.iClickedOnLoginButton()"
});
formatter.result({
  "duration": 217186400,
  "status": "passed"
});
formatter.match({
  "location": "ProductsSteps.iShouldVerifyTheProductTextIsDisplayedOnThePage()"
});
formatter.result({
  "duration": 57035700,
  "status": "passed"
});
formatter.match({
  "location": "ProductsSteps.iShouldVerifyThatSixNumberOfProductsAreDisplayedOnThePage()"
});
formatter.result({
  "duration": 35648000,
  "status": "passed"
});
formatter.after({
  "duration": 776970400,
  "status": "passed"
});
});