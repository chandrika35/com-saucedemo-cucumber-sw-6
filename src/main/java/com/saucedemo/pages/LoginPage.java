package com.saucedemo.pages;

import com.saucedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class LoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());
public LoginPage(){
    PageFactory.initElements(driver,this);
}
    @CacheLookup
    @FindBy(id = "user-name")
    WebElement userNameField;
    @CacheLookup
    @FindBy(id = "password")
    WebElement passwordField;
    @CacheLookup
    @FindBy(id = "login-button")
    WebElement loginButton;

    public void enterUserName(String usernane){
        Reporter.log("Enter Username " + usernane + " to username field " + usernane.toString());
        log.info("Entering username in Username field:" + usernane.toString());
        sendTextToElement(userNameField,usernane);

    }
    public void enterPassword(String password){
        log.info("Entering password in Password field:" + password.toString());
        Reporter.log("Enter Password" + password + " to password field " + password.toString());
        sendTextToElement(passwordField,password);

    }
    public void clickOnLoginButon(){
        log.info("Clicking on Login Button : " + loginButton.toString());
        Reporter.log("Click Login Button " + loginButton.toString());
        clickOnElement(loginButton);
    }
}
