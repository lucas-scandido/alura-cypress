import RegisterPage from '../page-objects/RegisterPage'

describe('Register New User', () => {

  beforeEach(() => {
    RegisterPage.go()
    const registerMessage = 'Register to embrace a new world!'
    RegisterPage.welcomeMessage(registerMessage)
  })
  
  it('Valid User', () => {
    RegisterPage.fillForm()
    RegisterPage.submit()
    RegisterPage.textSuccess()
  })
})  