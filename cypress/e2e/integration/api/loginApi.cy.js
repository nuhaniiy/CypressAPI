it('successfully logs in via GUI', () => {
    cy.intercept('GET', `${Cypress.env('apiUrl')}/models?userId=*`)
      .as('getUserModels')
    cy.loginViaAPI()
    cy.wait('@getUserModels')
    cy.contains('h2', 'Models').should('be.visible')
  })