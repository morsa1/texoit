Feature: Teste E22

    Feature Description: Validar dados do produto selecionado

    @focus
    Scenario: Validar dados do produto selecionado no menu dresses
        Given Acessar o menu dresses
        When selecionar o produto Printed Dress e abrir a pagina de detalhes do produto
        Then validar os valores exibidos no quadro DATA SHEET
        
    @focus
    Scenario: Realizar a compra de um produto
        Given Acessar o menu dresses
        When selecionar o produto Printed Dress e adicionar no carrinho
        Then Efetuar a compra
