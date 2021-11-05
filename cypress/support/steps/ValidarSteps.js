/* global Given, Then, When */

import { should } from 'chai'


Given("Acessar o menu dresses", () => {
    cy.visit('/')
})

When("selecionar o produto Printed Dress e abrir a pagina de detalhes do produto", () => {
    cy.get('.sf-menu > :nth-child(2)').click()
    cy.get('.ajax_block_product.col-xs-12.col-sm-6.col-md-4.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.right-block > h5 > a').click()
})

Then("validar os valores exibidos no quadro DATA SHEET", () => {
    cy.get(':nth-child(2) > .page-product-heading').contains('data sheet', { matchCase: false })
    cy.get('table > tbody > tr:nth-child(1) > td:nth-child(1)').should('contain','Compositions')
    cy.get('table > tbody > tr:nth-child(1) > td:nth-child(2)').should('contain','Cotton')
    cy.get('table > tbody > tr:nth-child(2) > td:nth-child(1)').should('contain','Styles')
    cy.get('table > tbody > tr:nth-child(2) > td:nth-child(2)').should('contain','Girly')
    cy.get('table > tbody > tr:nth-child(3) > td:nth-child(1)').should('contain','Properties')
    cy.get('table > tbody > tr:nth-child(3) > td:nth-child(2)').should('contain','Colorful Dress')
})



