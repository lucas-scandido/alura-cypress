var faker = require('faker')

export default {

    newUser: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var register = {
            email: faker.internet.email(firstName, lastName),
            fullName: `${firstName} ${lastName}`,
            userName: `${firstName}${lastName}`.toLowerCase(),
            password: 'alura123'
        }

        return register
    }
}
