class HomePage {

    go() {
        cy.visit('/')
    }

    pageName(headerName){
        cy.contains(headerName).should('be.visible')
        // cy.get('a.navbar-brand').contains('ALURAPIC')
    }

    registerButton() {
        cy.contains('a', 'Register now').should('be.visible')
    }
    
}

export default new HomePage;