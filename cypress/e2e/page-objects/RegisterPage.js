class RegisterPage {

    go() {
        cy.visit('/#/home/signup')
    }

    welcomeMessage(registerMessage) {
        cy.contains(registerMessage).should('be.visible')
    }

    fillForm(newUser) {
        cy.get('input[formcontrolname="email"]').type(newUser.email)
        cy.get('input[formcontrolname="fullName"]').type(newUser.fullName)
        cy.get('input[formcontrolname="userName"]').type(newUser.userName)
        cy.get('input[formcontrolname="password"]').type(newUser.password)
    }

    submit(){
        cy.contains('button', 'Register').should('be.visible').click({ force: true }).wait(1000)
    }

    textSuccess(){
        cy.contains('.text-success', 'User available').should('be.visible')
    }

}

export default new RegisterPage;