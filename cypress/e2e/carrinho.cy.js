import InventoryPage from '../support/pages/inventory.page';

describe('Carrinho', () => {
  beforeEach(() => {
    // Usando o custom command criado
    cy.login('standard_user', 'secret_sauce');
  });

  it('Adicionar produto ao carrinho com sucesso', () => {
    InventoryPage.adicionarMochila();
    InventoryPage.validarBadgeCarrinho(1);
    
    InventoryPage.acessarCarrinho();
    InventoryPage.validarProdutoNoCarrinho('Sauce Labs Backpack');
  });

  it('Remover produto do carrinho com sucesso', () => {
    InventoryPage.adicionarMochila();
    InventoryPage.removerMochila();
    
    InventoryPage.validarBadgeCarrinho(0);
  });
});
