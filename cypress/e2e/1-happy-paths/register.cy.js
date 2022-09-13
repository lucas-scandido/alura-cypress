describe('Register User', () => {

  beforeEach(() => {
    cy.visit('https://alura-fotos.herokuapp.com')
    cy.get('a.navbar-brand').contains('ALURAPIC')
  })

  it('New valid user', () => {
      cy.get('a').contains('Register now').click()
      cy.get('#email').type('new.user0122@gmail.com')
  })
})  