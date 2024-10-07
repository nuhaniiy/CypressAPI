///<reference types="cypress" />
describe('Automation API with pokeapi', () => {
    it('sucessfully validate content', () => {
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
        expect(response.status).to.eq(200); // Validasi status code
        expect(response.body.abilities[0].ability.name).to.eq('limber'); // Validasi nama ability
        expect(response.body.abilities[0].ability.url).to.eq('https://pokeapi.co/api/v2/ability/7/'); // Validasi URL
  });
    });

})