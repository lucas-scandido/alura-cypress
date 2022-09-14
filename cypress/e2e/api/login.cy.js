describe('Login', () => {

    it('User Login', () => {
        cy.request({
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            body: {
                "userName":"flavio",
                "password":"123"
            }
        }).then((res) => {
            expect(res.status).to.be.equal(200, 'OK')
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equal(1)
            expect(res.body).to.have.property('email')
            expect(res.body.email).to.be.equal('flavio@alurapic.com.br')
        })

    })

})