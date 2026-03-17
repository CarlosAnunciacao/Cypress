describe('Login', () => {
  it('Realizar login com sucesso', () => {
    // arrange
    cy.visit('https://www.saucedemo.com/');
    // act
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // assert
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
  });

  it('Realizar login com falha', () => {
    // arrange
    cy.visit('https://www.saucedemo.com/');
    // act
    cy.get('#user-name').type('user.invalid');
    cy.get('#password').type('senha_invalida');
    cy.get('[data-test="login-button"]').click();

    //Assert
    cy.get('[data-test="error"]')
        .should(
            'contain.text',
            'Epic sadface: Username and password do not match any user in this service');
  }); 
});