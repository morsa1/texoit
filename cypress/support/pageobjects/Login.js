/// <reference types="Cypress" />

import Elements from '../elements/Elements'
const elements = new Elements


class Login{
    // Efetuar o Login
    efetuarlogin() {
        cy.get(elements.IPT_email()).type(elements.TXT_user())
        cy.get(elements.IPT_pass()).type(elements.TXT_pass())
        cy.get(elements.BTN_signin()).click()
    }
}

export default Login;