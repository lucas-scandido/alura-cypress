import RegisterPage from '../page-objects/RegisterPage'
import RegisterFactory from '../factories/RegisterFactory'

describe('Register New User', () => {

  beforeEach(() => {
    RegisterPage.go()
    const registerMessage = 'Register to embrace a new world!'
    RegisterPage.welcomeMessage(registerMessage)
  })
  
  it('Valid User', () => {

    var newUser = RegisterFactory.newUser()

    RegisterPage.fillForm(newUser)
    RegisterPage.submit()
    RegisterPage.textSuccess()
  })
})  