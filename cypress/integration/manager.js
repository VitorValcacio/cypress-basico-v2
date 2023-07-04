/// <reference types="Cypress" />

describe('Cadastro de serviço no manager', function() {
    beforeEach(function () {
        cy.visit('http://10.20.1.129') 
    }) 

    it('Cadastro da função', function () {
        cy.get('#account').type('500500');
        cy.get('#password').type('/ext!00x');
        cy.get('.btn span12').should('LOGIN').click();
    })
})