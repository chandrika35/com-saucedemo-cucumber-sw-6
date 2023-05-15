package com.saucedemo.steps;

import com.saucedemo.pages.ProductsHomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class ProductsSteps {
    @Given("^I am on the productsHomePage$")
    public void iAmOnTheProductsHomePage() {

    }

    @When("^I entered successfully the username \"([^\"]*)\"$")
    public void iEnteredSuccessfullyTheUsername(String username) {
        new ProductsHomePage().enterUserName(username);
    }

    @And("^I entered successfully the password \"([^\"]*)\"$")
    public void iEnteredSuccessfullyThePassword(String password) {
        new ProductsHomePage().enterPassword(password);
    }

    @And("^I clicked on login button$")
    public void iClickedOnLoginButton() {
        new ProductsHomePage().clickOnLoginButon();
    }


    @And("^I should verify the product text is displayed on the page$")
    public void iShouldVerifyTheProductTextIsDisplayedOnThePage() {
        String expectedText = "Products";
        String actualText = new ProductsHomePage().getProductText();
        Assert.assertEquals(expectedText, actualText, "Products text is not displayed");
    }

    @Then("^I should verify that six number of products are displayed on the page$")
    public void iShouldVerifyThatSixNumberOfProductsAreDisplayedOnThePage() {
        int expectedNumberOfProducts = 6;
        int actualNumberOfProducts = new ProductsHomePage().findActualNumberOfProducts();
        Assert.assertEquals(expectedNumberOfProducts, actualNumberOfProducts, "Number of products displayed are not same");
    }
}