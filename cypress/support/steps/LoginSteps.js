/* global Given, Then, When */

import LoginPage from '../pages/LoginPage';

const loginPage = new LoginPage();

Given('I access the CWI website', () => {
  loginPage.accessSite();
});

When('I access the login page', () => {
  loginPage.clickButtonPageLogin();
});

Then('I should see the forgotten password recovery button', () => {
  loginPage.viewButtonRecoverPassword();
});
