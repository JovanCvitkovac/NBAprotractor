// Tests for Login Page

// Page objects file
var LoginPage = require('../page-objects/login_page')  // update to your page object

describe('Login Page Tests', function () {
    var loginPage

    beforeEach(function () {
        loginPage = new LoginPage()

        // Because this is not an Angular site
        browser.ignoreSynchronization = true

        // Open URL
        browser.get('file:///C:/NBAplayersProtractor/superstar/index.html')  // update to your URL
    })

    afterEach(function () {


    })

    it('should display all Login page elements', function () {
        expect(loginPage.loginTitleTxt.isDisplayed()).toBe(true)
        expect(loginPage.loginTitleTxt.getText()).toEqual('Welcome. Please Log In')


        expect(loginPage.emailFldLabel.isDisplayed()).toBe(true)
        expect(loginPage.emailFld.isDisplayed()).toBe(true)
        expect(loginPage.emailFld.getText()).toEqual('')

        expect(loginPage.passwordFldLabel.isDisplayed()).toBe(true)
        expect(loginPage.passwordFld.isDisplayed()).toBe(true)
        expect(loginPage.passwordFld.getText()).toEqual('')

        expect(loginPage.rememberChk.isDisplayed()).toBe(true)
        expect(loginPage.rememberChkLabel.isDisplayed()).toBe(true)
        expect(loginPage.rememberChk.isSelected()).toBe(false)

        expect(loginPage.submitButton.isDisplayed()).toBe(true)

    })
    it('should display error message when no email and password entered', function () {
        loginPage.submitButton.click()

        expect(loginPage.loginErrorMsg.isDisplayed()).toBe(true)
        expect(loginPage.loginErrorMsg.getText()).toEqual('Both e-mail and password must be entered!')

    })
    it('should display error message when no email entered', function () {
        loginPage.emailFld.sendKeys('test@testing.com')
        loginPage.submitButton.click()

        expect(loginPage.loginErrorMsg.isDisplayed()).toBe(true)
        expect(loginPage.loginErrorMsg.getText()).toEqual('Both e-mail and password must be entered!')



    })
    it('should display error message when no password entered', function () {
        loginPage.passwordFld.sendKeys('passwordsample')
        loginPage.submitButton.click()

        expect(loginPage.loginErrorMsg.isDisplayed()).toBe(true)
        expect(loginPage.loginErrorMsg.getText()).toEqual('Both e-mail and password must be entered!')


    })
    it('should log user in', function () {
        loginPage.emailFld.sendKeys('test@testing.com')
        loginPage.passwordFld.sendKeys('passwordsample')
        loginPage.submitButton.click()

        //ToDo - Verify that the page elements changed, because this is single page website

    })

})