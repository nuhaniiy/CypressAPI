describe('Validate Header', () =>{
    it('Success validate conten-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon')
        .its('body')
        .its('forms')
        .should(items => {
            expect(items.map(i => i.name)).to.include('ditto')
          })
    });
})