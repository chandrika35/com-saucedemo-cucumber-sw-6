package com.saucedemo.steps;

import com.saucedemo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {

@Given("^I am on loginpage$")
    public void iAmOnLoginPage(){

}

    @When("^I enter username \"([^\"]*)\"$")
    public void iEnterUsername(String username) {
    new LoginPage().enterUserName(username);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
    new LoginPage().enterPassword(password);
    }


    @And("^I click on login button$")
    public void iClickOnLoginButton() {
    new LoginPage().clickOnLoginButon();

    }

    @Then("^I should login successfully$")
    public void iShouldLoginSuccessfully() {
    }



}