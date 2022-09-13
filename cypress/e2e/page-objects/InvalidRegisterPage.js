

class InvalidRegisterPage {

    invalidFormFill() {
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
    }

    invalidEmail(){
        cy.get('input[formcontrolname="email"]').type('teste')
    }

    invalidEmailMessage(errorEmailMessage){
        cy.contains(errorEmailMessage).should('be.visible')
    }

    minimumName(){
        cy.get('input[formcontrolname="fullName"]').type('A')
    }

    minimumNameMessage(errorMinimumName){
        cy.contains(errorMinimumName).should('be.visible')
    }

    maximumName(){
        cy.get('input[formcontrolname="fullName"]').type('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
    }

    maximumNameMessage(errorMaximumName){
        cy.contains(errorMaximumName).should('be.visible')
    }

    invalidUserName(){
        cy.get('input[formcontrolname="userName"]').type('LUCAS')       
    }

    invalidUserNameMessage(errorUserNameMessage){
        cy.contains(errorUserNameMessage).should('be.visible')
       
    }

    userNameAlreadyTaken(){
        cy.get('input[formcontrolname="userName"]').type('alura')       
    }

    userNameExistsMessage(errorUserNameExists){
        cy.contains(errorUserNameExists).should('be.visible')
    }

    minimumUserName(){
        cy.get('input[formcontrolname="userName"]').type('A')       
    }

    minimumUserNameMessage(errorMinumumUserName){
        cy.contains(errorMinumumUserName).should('be.visible')
    }

    maximumUserName(){
        cy.get('input[formcontrolname="userName"]').type('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')       
    }

    maximumUserNameMessage(errorMaximumUserName){
        cy.contains(errorMaximumUserName).should('be.visible')
    }

    minimumPassword(){
        cy.get('input[formcontrolname="password"]').type('alura12')       
    }

    minimumPasswordMessage(errorPasswordMessage){
        cy.contains(errorPasswordMessage).should('be.visible')
    }

    maximumPassword(){
        cy.get('input[formcontrolname="password"]').type('alura123456789101112')       
    }

    maximumPasswordMessage(errorMaxPasswordMessage){
        cy.contains(errorMaxPasswordMessage).should('be.visible')
    }


}

export default new InvalidRegisterPage;