///<reference types="cypress" />
describe('Automation API with pokeapi', () => {
    it('sucesfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')
        
    });
    it('sucessfully validate status code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
        cy.get('@ditto').its('status').should('equal', 200) 
    });

    it('sucsessfully validate status code with params', () => {
    cy.request({
        method: 'GET',
        'url' : 'https://reqres.in/api/users?page=2&per_pages=1&delay=3'
    }).as('users')
    cy.get('@users').its('status').should('equal', 200)
    });

    it('sucsessfully validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
        cy.get('@bulbasaur').its('body').should('include', {name: "bulbasaur"})
    });
    it.only('sucessfully validate content', () => {
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
        expect(response.status).to.eq(200); // Validasi status code
        expect(response.body.abilities[0].ability.name).to.eq('limber'); // Validasi nama ability
        expect(response.body.abilities[0].ability.url).to.eq('https://pokeapi.co/api/v2/ability/7/'); // Validasi URL
  });
    });

})