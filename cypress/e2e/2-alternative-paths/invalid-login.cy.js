import LoginPage from '../page-objects/LoginPage'

describe('Login', () => {

    beforeEach(() => {
        LoginPage.go()
    })

    it('Invalid login', () => {
        const loginText = 'Login'
        LoginPage.pageName(loginText)
        cy.login('aflavio', '1234')
        LoginPage.loginButton()
        LoginPage.invalidLogin()  
    })
})