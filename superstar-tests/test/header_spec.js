var HeaderPage = require('../page-objects/header_page')
var LoginPage = require('../page-objects/login_page')
describe('Header Page', function () {
    var headerPage
    var loginPage
    beforeEach(function () {
        headerPage = new HeaderPage()
        loginPage = new LoginPage()

        browser.ignoreSynchronization = true
        browser.get('file:///C:/NBAplayersProtractor/superstar/index.html')

    })

    afterEach(function () {


    })

    it('slould contain all Header elements', function () {
        loginPage.emailFld.sendKeys('test@testing.com')
        loginPage.passwordFld.sendKeys('passwordsample')
        loginPage.submitButton.click()

        expect(headerPage.titleTxt.isDisplayed()).toBe(true)
        expect(headerPage.titleTxt.getText()).toEqual('Superstar Roster')

        expect(headerPage.playersImage.isDisplayed()).toBe(true)
        
        expect(headerPage.underImageTxt.isDisplayed()).toBe(true)
        expect(headerPage.underImageTxt.getText()).toEqual('Imagine that you are tasked with building a team of Superstars to be the best team in the world. We have given you a few players to start with. Add as many players as you would like to round out your dream team.')


    })
})