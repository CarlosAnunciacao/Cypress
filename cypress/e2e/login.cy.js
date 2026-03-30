import LoginPage from '../support/pages/login.page';

describe('Login', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('Realizar login com sucesso', () => {
    LoginPage.preencherLogin('standard_user', 'secret_sauce');
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
  });

  it('Realizar login com falha', () => {
    LoginPage.preencherLogin('user.invalid', 'senha_invalida');
    LoginPage.validarMensagemErro('Epic sadface: Username and password do not match any user in this service');
  }); 
});
