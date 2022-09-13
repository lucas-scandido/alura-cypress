class RegisterPage {

    go() {
        cy.visit('/#/home/signup')
    }

    welcomeMessage(registerMessage) {
        cy.contains(registerMessage).should('be.visible')
    }

    fillForm() {
        cy.get('input[formcontrolname="email"]').type('luccas.candido@outlook.com')
        cy.get('input[formcontrolname="fullName"]').type('Lucas Silva')
        cy.get('input[formcontrolname="userName"]').type('ads')
        cy.get('input[formcontrolname="password"]').type('alura123')
    }

    submit(){
        cy.contains('button', 'Register').should('be.visible').click({ force: true }).wait(1000)
    }

    textSuccess(){
        cy.contains('.text-success', 'User available').should('be.visible')
    }

}

export default new RegisterPage;