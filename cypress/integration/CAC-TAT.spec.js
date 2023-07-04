/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function () {
        cy.visit('./src/index.html');
    })
    it('verifica o título da aplicação', function() {
       cy.title().should('be.equal' ,'Central de Atendimento ao Cliente TAT')
    })
    it('Preencher os campos obrigatórios e enviar para o formulário',function(){
        cy.get('#firstName').type('Vitor');
        cy.get('#lastName').type('Trindade valcacio');
        cy.get('#email').type('v-g-3@hotmail.com');
        cy.get('#phone').type('6130384600');
        cy.get('#open-text-area').type('olá esse é meu teste de texto, estou digitando um pequeno texto de testes quero ver como irá suportar Quebrei uma linha como teste!');
        cy.get('button[type="submit"]').should('be.visible','Enviar').click();
        cy.get('.success > strong').should('be.visible',"Mensagem enviada com sucesso.");


    })    
 })
