import LoginPage from '../support/pages/login.page';
import InventoryPage from '../support/pages/inventory.page';

describe('Carrinho', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.preencherLogin('standard_user', 'secret_sauce');
  });

  it('Adicionar produto ao carrinho com sucesso', () => {
    InventoryPage.adicionarMochila();
    cy.screenshot('carrinho-adicionado');
    
    InventoryPage.validarBadgeCarrinho(1);
    InventoryPage.acessarCarrinho();
    InventoryPage.validarProdutoNoCarrinho('Sauce Labs Backpack');
  });

  it('Remover produto do carrinho com sucesso', () => {
    InventoryPage.adicionarMochila();
    InventoryPage.removerMochila();
    cy.screenshot('produto-removido');
    
    InventoryPage.validarBadgeCarrinho(0);
  });
});
