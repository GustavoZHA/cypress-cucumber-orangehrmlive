/// <reference types="cypress"/>

import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import {LoginPage} from "../../orangehrmlive/ui/login_page";
import {Navigate} from "../../orangehrmlive/ui/navigate";
import {Dashboard} from "../../orangehrmlive/ui/dashboard_page"

var loginPage = new LoginPage()
var navigate = new Navigate()
var dashboard = new Dashboard()

Given('I navigate orangehrmlive-demo page', () => {
    navigate.loginPage()
})

When("I login as {string} with the passsword {string}", (userName, password)=>{
   loginPage.login(userName,password);
})

And('Click Login button', () => {
    loginPage.clickLoginButton()
})

Then('Verify the orangehrm should be displayed', () => {
    dashboard.verifyImagenOragle()
})

Then("Verify the alert message should be {string}", (message)=>{
    loginPage.messageAlertAssertion(message);
 })


