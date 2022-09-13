import RegisterPage from '../page-objects/RegisterPage'
import InvalidRegisterPage from '../page-objects/InvalidRegisterPage'

describe('Register Invalid User', () => {

  beforeEach(() => {
    RegisterPage.go()
    const registerMessage = 'Register to embrace a new world!'
    RegisterPage.welcomeMessage(registerMessage)
  })

  it('Validating required fields', () => {
    RegisterPage.submit()
    InvalidRegisterPage.invalidFormFill()
  })

  it('Invalid Email', () => {
    InvalidRegisterPage.invalidEmail()
    RegisterPage.submit()
    const errorEmailMessage = 'Invalid e-mail'
    InvalidRegisterPage.invalidEmailMessage(errorEmailMessage)
  })

  it('Invalid Minimum Name', () => {
    InvalidRegisterPage.minimumName()
    RegisterPage.submit()
    const errorMinimumName = 'Mininum length is 2'
    InvalidRegisterPage.minimumNameMessage(errorMinimumName)
  })

  it('Invalid Maximum Name', () => {
    InvalidRegisterPage.maximumName()
    RegisterPage.submit()
    const errorMaximumName = 'Maximun length is 40'
    InvalidRegisterPage.maximumNameMessage(errorMaximumName)
  })

  it('Invalid Up Case UserName', () => {
    InvalidRegisterPage.invalidUserName()
    RegisterPage.submit()
    const errorUserNameMessage = 'Must be lower case'
    InvalidRegisterPage.invalidUserNameMessage(errorUserNameMessage)
  })

  it('UserName Already Taken', () => {
    InvalidRegisterPage.userNameAlreadyTaken()
    RegisterPage.submit()
    const errorUserNameExists = 'Username already taken'
    InvalidRegisterPage.userNameExistsMessage(errorUserNameExists)
  })

  it('UserName Minimum Length', () => {
    InvalidRegisterPage.minimumUserName()
    RegisterPage.submit()
    const errorMinumumUserName = 'Mininum length is 2'
    InvalidRegisterPage.minimumUserNameMessage(errorMinumumUserName)
  })

  it('UserName Maximum Length', () => {
    InvalidRegisterPage.maximumUserName()
    RegisterPage.submit()
    const errorMaximumUserName = 'Maximun length is 30'
    InvalidRegisterPage.maximumUserNameMessage(errorMaximumUserName)
  })

  it('Minimum Password Lenght', () => {
    InvalidRegisterPage.minimumPassword()
    RegisterPage.submit()
    const errorPasswordMessage = 'Mininum length is 8'
    InvalidRegisterPage.minimumPasswordMessage(errorPasswordMessage)
  })

  it('Maximum Password Lenght', () => {
    InvalidRegisterPage.maximumPassword()
    RegisterPage.submit()
    const errorMaxPasswordMessage = 'Maximun length is 18'
    InvalidRegisterPage.maximumPasswordMessage(errorMaxPasswordMessage)
  })

})  