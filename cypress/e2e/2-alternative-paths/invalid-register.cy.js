describe('Register Invalid User', () => {

  beforeEach(() => {
    cy.visit('https://alura-fotos.herokuapp.com/#/home/signup')
    cy.get('h4').should('have.text', 'Register to embrace a new world!')
  })

  it('Validating error messages', () => {

    cy.contains('button', 'Register').should('be.visible').click({ force: true })
    cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
    cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
    cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
    cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
  })

  it('Invalid Email', () => {

    cy.get('input[formcontrolname="email"]').type('teste')
    cy.contains('button', 'Register').should('be.visible').click({ force: true })
    cy.contains('.text-danger', 'Invalid e-mail').should('be.visible')
  })

  it('Invalid UserName', () => {

    cy.get('input[formcontrolname="email"]').type('luccas.candido@outlook.com')
    cy.get('input[formcontrolname="fullName"]').type('Lucas Silva')
    cy.get('input[formcontrolname="userName"]').type('alura')
    cy.get('input[formcontrolname="password"]').type('alura12')
    cy.contains('button', 'Register').should('be.visible').click({ force: true }).wait(500)
    cy.contains('.text-danger', 'Username already taken').should('be.visible')
  })

  it('Invalid Password', () => {

    cy.get('input[formcontrolname="email"]').type('luccas.candido@outlook.com')
    cy.get('input[formcontrolname="fullName"]').type('Lucas Silva')
    cy.get('input[formcontrolname="userName"]').type('asd')
    cy.get('input[formcontrolname="password"]').type('alura12')
    cy.contains('button', 'Register').should('be.visible').click({ force: true })
    cy.contains('.text-danger', 'Mininum length is 8').should('be.visible')
  })

})  