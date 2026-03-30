class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com/');
  }

  preencherLogin(usuario, senha) {
    cy.get('#user-name').type(usuario);
    cy.get('#password').type(senha);
    cy.get('[data-test="login-button"]').click();
  }

  validarMensagemErro(mensagem) {
    cy.get('[data-test="error"]').should('contain.text', mensagem);
  }
}

export default new LoginPage();
