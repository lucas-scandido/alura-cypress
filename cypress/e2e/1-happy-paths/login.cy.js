import LoginPage from '../page-objects/LoginPage'

describe('Login', () => {

    beforeEach(() => {
        LoginPage.go()
    })

    it('Valid login', () => {
        const loginText = 'Login'
        LoginPage.pageName(loginText)
        cy.login('flavio', '123')
        LoginPage.loginButton()
        LoginPage.pageValidation()
    })
})