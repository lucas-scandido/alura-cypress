import HomePage from '../page-objects/HomePage'

describe('Home Page', () => { 
  it('Application should be online', () => {

    HomePage.go()
    const headerName = 'ALURAPIC'
    HomePage.pageName(headerName)
    HomePage.registerButton()
    
  })
})  