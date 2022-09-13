describe('Home Page', () => { 
  it('Application should be online', () => {
    cy.visit('https://alura-fotos.herokuapp.com')
    cy.get('a.navbar-brand').contains('ALURAPIC')
  })
})  