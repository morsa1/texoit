/* global Given, Then, When */

import { should } from 'chai'


Given("Acessar o menu dresses", () => {
    cy.visit('/')
})

When("selecionar o produto Printed Dress e adicionar no carrinho", () => {
    cy.get('.sf-menu > :nth-child(2)').click()
    cy.get('.ajax_block_product.col-xs-12.col-sm-6.col-md-4.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.right-block > h5 > a').click()
})

Then("Efetuar a compra", () => {
    cy.get('.exclusive > span').click()
    cy.get('.button-medium > span').click()
    cy.get('.cart_navigation > .button > span').click()
    cy.get('#email').type('edilson_juni@hotmail.com')
    cy.get('#passwd').type('123456')
    cy.get('#SubmitLogin > span').click()
    cy.get('.cart_navigation > .button > span').click()
    cy.get('#cgv').click()
    cy.get('.cart_navigation > .button > span').click()
    cy.get('.bankwire').click()
    cy.get('#cart_navigation > .button > span').click()
    //cy.get('.box').should('contains', 'Your order on My Store is complete')
    cy.get('.box').contains('Your order on My Store is complete')


})



