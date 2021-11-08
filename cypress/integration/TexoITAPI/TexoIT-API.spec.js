/// <reference types="cypress" />

let fakeUser;
let id;

describe('Given Projeto de Testes API', () => {
    context('When Eu pesquisar um usuario na API', () => {
        it('Then eu pesquiso por Miss Shashikala, valido o status code e o email recebido', () => {
            cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v1/users?name=Miss%20Shashikala'
            })
                .then((response) => {
                    //cy.log(JSON.stringify(response.body))
                expect(response.status).to.eq(200)
                //cy.log(response.body.data[0].email)
                expect(response.body.data.length).to.be.eq(1)
                expect(response.body.data[0]).to.have.all.keys('id', 'name', 'email', 'gender', 'status')
                expect(response.body.data[0].id).to.equal(30)
                expect(response.body.data[0].name).to.equal('Miss Shashikala Trivedi')
                expect(response.body.data[0].email).to.equal('miss_trivedi_shashikala@sipes-howell.net')
                expect(response.body.data[0].gender).to.equal('female')
                expect(response.body.data[0].status).to.equal('inactive') 
                })        
        });
        it('Then eu pesquiso por Ronald Kessler, valido o status code e o email recebido', () => {
            cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v1/users?name=Ronald%20Kessler'
            })
                .then((response) => {
                expect(response.status).to.eq(200)
                cy.log(response.body.data[0].email)
                //expect(response.body.data[0].email).to.equal('')
            })        
        })    
    })
    context('When eu enviar um GET para a API', () => {
        it('Then eu armazeno o quinto usuario retornado, faco uma requisicao neste ID, verifico o body e o status code', () => {
            cy.request('https://gorest.co.in/public/v1/users').then((response) => {       
            id = response.body.data[4].id
            //cy.log(id)
            cy.request('https://gorest.co.in/public/v1/users/'+id).should((response) => {
            expect(response.status).eq(200)
            expect(response.body.data).to.have.all.keys('id', 'name', 'email', 'gender', 'status')
            // cy.log(response.body.data.id)
            // cy.log(response.body.data.name)
            // cy.log(response.body.data.email)
            // cy.log(response.body.data.gender)
            // cy.log(response.body.data.status)
            cy.log(JSON.stringify(response.body.data))
            })
        })  
    })
})
    context('When eu enviar um POST para a API', () => {         
       it('Then eu crio um novo usuário e verifico o status code', () => {
        cy.task('freshUser').then((user) => {
            fakeUser = user;
            cy.log(JSON.stringify(fakeUser))
            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v1/users',
                auth: { bearer: '7272a375f0e45563013e4e48229c5ce1724bdbb3ef41b0c197f2730d765a1a78'},
                body: fakeUser
                })
                .should ((response) => {  
                expect(response.status).to.equal(201)
                })   
            })  
       })      
    })    
})