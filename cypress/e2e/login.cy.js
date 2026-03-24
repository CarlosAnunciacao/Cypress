describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('Realizar login com sucesso', () => {
    // Act
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Assert
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
  });

  it('Realizar login com falha', () => {
    // Act
    cy.get('#user-name').type('user.invalid');
    cy.get('#password').type('senha_invalida');
    cy.get('[data-test="login-button"]').click();

    // Assert
    cy.get('[data-test="error"]')
        .should(
            'contain.text',
            'Epic sadface: Username and password do not match any user in this service');
  }); 
});
