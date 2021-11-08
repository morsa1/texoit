/// <reference types="cypress" />

//const { default: Login } = require("../../support/pageobjects/Login");
import Login from '/cypress/support/pageobjects/Login'
import Elements from '/cypress/support/elements/Elements'

const login = new Login();
const elements = new Elements();

describe('Given Projeto de Testes E2E (Web)', () => {
    beforeEach (() => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-menu > :nth-child(2)').click()
        cy.get('.ajax_block_product.col-xs-12.col-sm-6.col-md-4.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.right-block > h5 > a').click()
    })

    context('When Validar dados do produto selecionado', () => {
      it('Then Eu seleciono o produto Printed Dress, abro a pagina de detalhes do produto e verifico os campos', () => {
        cy.get(':nth-child(2) > .page-product-heading').contains('data sheet', { matchCase: false })
        cy.get('table > tbody > tr:nth-child(1) > td:nth-child(1)').should('contain','Compositions')
        cy.get('table > tbody > tr:nth-child(1) > td:nth-child(2)').should('contain','Cotton')
        cy.get('table > tbody > tr:nth-child(2) > td:nth-child(1)').should('contain','Styles')
        cy.get('table > tbody > tr:nth-child(2) > td:nth-child(2)').should('contain','Girly')
        cy.get('table > tbody > tr:nth-child(3) > td:nth-child(1)').should('contain','Properties')
        cy.get('table > tbody > tr:nth-child(3) > td:nth-child(2)').should('contain','Colorful Dress')
      });
    });
  
    context('When Efetuar a compra do produto Printed Dresses', () => {
      it('Then Eu efeuto o processo completo de compra', () => {
        cy.get(elements.BTN_add_to_cart()).click()
        cy.get('.button-medium > span').click()
        cy.get(elements.BTN_proc_checkout()).click()
        login.efetuarlogin();
        cy.get(elements.BTN_proc_checkout()).click()
        cy.get(elements.BTN_tos()).click()
        cy.get(elements.BTN_proc_checkout()).click()
        cy.get('.bankwire').click()
        cy.get(elements.BTN_proc_checkout()).click()
        cy.get('.box').contains(elements.TXT_order_complete())
      });
    });
  });
