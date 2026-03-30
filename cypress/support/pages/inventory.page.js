class InventoryPage {
  adicionarMochila() {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  removerMochila() {
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
  }

  acessarCarrinho() {
    cy.get('.shopping_cart_container').click();
  }

  validarBadgeCarrinho(valor) {
    if (valor === 0) {
      cy.get('.shopping_cart_badge').should('not.exist');
    } else {
      cy.get('.shopping_cart_badge').should('be.visible').and('have.text', valor.toString());
    }
  }

  validarProdutoNoCarrinho(nomeProduto) {
    cy.contains(nomeProduto).should('be.visible');
  }
}

export default new InventoryPage();
