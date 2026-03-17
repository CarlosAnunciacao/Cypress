🛒 SauceDemo Automation - Cypress E2E

Este projeto demonstra a automação de testes de ponta a ponta (E2E) para o site SauceDemo, utilizando o framework Cypress. O objetivo é garantir a integridade dos fluxos principais da aplicação, como autenticação e gerenciamento de carrinho.
🚀 Por que este projeto é relevante?

Em um cenário real, falhas no login ou no carrinho de compras representam perda direta de receita. Este projeto foca no Caminho Feliz (Happy Path) e no Tratamento de Erros, garantindo que:

    Usuários legítimos consigam acessar a plataforma.

    O sistema bloqueie tentativas de login inválidas com mensagens apropriadas.

    A funcionalidade de compra (carrinho) esteja operacional.

🛠️ Tecnologias Utilizadas

    Framework: Cypress

    Linguagem: JavaScript

    Padrão de Seletores: Priorização de atributos data-test para testes mais resilientes.

    Estilo de Escrita: Arrange-Act-Assert (AAA).

🧪 Cenários Automatizados
Autenticação

    Login com Sucesso: Valida o redirecionamento para a página de inventário após credenciais válidas.

    Falha de Autenticação: Garante que o sistema exibe a mensagem de erro correta ao inserir dados inválidos, impedindo o acesso indevido.

Checkout & Carrinho

    Adicionar ao Carrinho: Valida se o contador do ícone do carrinho atualiza em tempo real e se o produto correto é persistido na listagem de compras.

📦 Como rodar o projeto

    Clone o repositório:
    
    git clone https://github.com/CarlosAnunciacao/Cypress

    Instale as dependências:
    
    npm install

    Abra o Cypress:
    
    npx cypress open

    Ou execute em modo Headless (terminal):
    
    npx cypress run
