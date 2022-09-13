class LoginPage {

    go() {
        cy.visit('/')
    }

    pageName(loginText) {
        cy.contains(loginText).should('be.visible')
    }

    loginButton() {
        cy.get('button[type="submit"]').click().wait(1000)
    }

    pageValidation() {
        cy.contains('a', 'Logout').should('be.visible')
    }

    invalidLogin() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    }
}

export default new LoginPage;