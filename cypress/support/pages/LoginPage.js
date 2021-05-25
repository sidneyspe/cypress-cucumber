/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements';

const loginElements = new LoginElements();
const url = Cypress.config('baseUrl');

class LoginPage {
  accessSite = () => {
    cy.visit(url);
  };

  clickButtonPageLogin = () => {
    cy.get(loginElements.loginButton()).click();
  };

  viewButtonRecoverPassword = () => {
    cy.get(loginElements.recoverPasswordButton()).should(
      'contain',
      'Esqueceu sua senha?'
    );
  };
}

export default LoginPage;
