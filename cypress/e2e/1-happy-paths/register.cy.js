describe('Register New User', () => {

  beforeEach(() => {
    cy.visit('https://alura-fotos.herokuapp.com/#/home/signup')
    cy.get('h4').should('have.text', 'Register to embrace a new world!')
  })

  it('Valid User', () => {

    cy.get('input[formcontrolname="email"]').type('luccas.candido@outlook.com')
    cy.get('input[formcontrolname="fullName"]').type('Lucas Silva')
    cy.get('input[formcontrolname="userName"]').type('ads')
    cy.get('input[formcontrolname="password"]').type('alura123')
    cy.contains('button', 'Register').should('be.visible').click({ force: true }).wait(500)
    cy.contains('.text-success', 'User').should('be.visible')
  })

})  