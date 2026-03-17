describe('Carrinho', () => {
  it('Adicionar produtdo ao carrinho com sucesso', () => {
    // arrange
    cy.visit('https://www.saucedemo.com/');

    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // act
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // assert
    cy.get('.shopping_cart_badge')
        .should('be.visible')
        .and('have.text', '1');

    cy.get('.shopping_cart_container').click();

    cy.contains('Sauce Labs Backpack').should('be.visible');

  });
  });
