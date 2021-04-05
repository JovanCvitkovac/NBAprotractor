var NavPage = require('../page-objects/nav_page')
var LoginPage = require('../page-objects/login_page')
describe('', function () {
    var navPage
    var loginPage
    beforeEach(function () {
        navPage = new NavPage()
        loginPage = new LoginPage()

        browser.ignoreSynchronization = true
        browser.get('file:///C:/NBAplayersProtractor/superstar/index.html')

    })

    afterEach(function () {


    })

    it('should display all Nav elements', function () {
        loginPage.emailFld.sendKeys('test@testing.com')
        loginPage.passwordFld.sendKeys('passwordsample')
        loginPage.submitButton.click()

        expect(navPage.playersLink.isDisplayed()).toBe(true)
        expect(navPage.playersLink.getText()).toEqual('Players')

        expect(navPage.logoutLink.isDisplayed()).toBe(true)
        expect(navPage.logoutLink.getText()).toEqual('Logout')

        expect(navPage.factsLink.isDisplayed()).toBe(true)
        expect(navPage.factsLink.getText()).toEqual('Player facts')
        navPage.factsLink.click()
        expect(navPage.jokicFactLink.isDisplayed()).toBe(true)
        expect(navPage.hardenFactLink.isDisplayed()).toBe(true)
    })



    it('should display and close jokic modal', function () {
        loginPage.emailFld.sendKeys('test@testing.com')
        loginPage.passwordFld.sendKeys('passwordsample')
        loginPage.submitButton.click()

        navPage.factsLink.click()
        navPage.jokicFactLink.click()

        browser.sleep(500) //Because it opens too fast, cannot check = test failure

        expect(navPage.jokicModalTitle.isPresent()).toBeTruthy()
        expect(navPage.jokicModalTitle.getText()).toEqual('Did you know?')

        expect(navPage.jokicModalBody.isPresent()).toBeTruthy()
        expect(navPage.jokicModalBody.getText()).toEqual('Nikola Jokic is a badass.')

        expect(navPage.jokicModalCloseButton.isPresent()).toBeTruthy()
        expect(navPage.jokicModalCloseButton.getText()).toEqual('Close')

        expect(navPage.jokicModalXButton.isPresent()).toBeTruthy()

        navPage.jokicModalCloseButton.click()

    })
    it('should display and close harden modal', function () {
        loginPage.emailFld.sendKeys('test@testing.com')
        loginPage.passwordFld.sendKeys('passwordsample')
        loginPage.submitButton.click()


        navPage.factsLink.click()
        navPage.hardenFactLink.click()

        browser.sleep(500) //Because it opens too fast, cannot check = test failure

        expect(navPage.hardenModalTitle.isPresent()).toBeTruthy()
        expect(navPage.hardenModalTitle.getText()).toEqual('Would you belive it?')

        expect(navPage.hardenModalBody.isPresent()).toBeTruthy()
        expect(navPage.hardenModalBody.getText()).toEqual('James Harden is not a badass.')

        expect(navPage.hardenModalCloseButton.isPresent()).toBeTruthy()
        expect(navPage.hardenModalCloseButton.getText()).toEqual('Close')

        expect(navPage.hardenModalXButton.isPresent()).toBeTruthy()

        navPage.hardenModalCloseButton.click()

    })

    it('should display login page without email and password', function () {
        loginPage.emailFld.sendKeys('test@testing.com')
        loginPage.passwordFld.sendKeys('passwordsample')
        loginPage.submitButton.click()

        navPage.logoutLink.click()
        expect(loginPage.emailFld.getText()).toEqual('')
        expect(loginPage.passwordFld.getText()).toEqual('')

    })


    it('should display login page with email and password', function () {
        loginPage.emailFld.sendKeys('test@testing.com')
        loginPage.passwordFld.sendKeys('passwordsample')
        loginPage.rememberChk.click()

        loginPage.submitButton.click()


        navPage.logoutLink.click()
        expect(loginPage.emailFld.getAttribute('value')).toEqual('test@testing.com')
        expect(loginPage.passwordFld.getAttribute('value')).toEqual('passwordsample')
        expect(loginPage.rememberChk.isSelected()).toBe(true)


    })

    it('should display alert for not found', function () {
        loginPage.emailFld.sendKeys('test@testing.com')
        loginPage.passwordFld.sendKeys('passwordsample')
        loginPage.submitButton.click()

        navPage.searchField.sendKeys('jordan')
        navPage.searchButton.click()

        var EC = protractor.ExpectedConditions
        browser.wait(EC.alertIsPresent(), 500)  //time we give to open alert

        expect(browser.switchTo().alert().getText()).toEqual('Your search for jordan returned 0 results. Try something else.')
        browser.switchTo().alert().accept()    //this is for OK button, to close alert

    })

    it('should display alert for found', function () {
        loginPage.emailFld.sendKeys('test@testing.com')
        loginPage.passwordFld.sendKeys('passwordsample')
        loginPage.submitButton.click()

        navPage.searchField.sendKeys('jokic')
        navPage.searchButton.click()

        var EC = protractor.ExpectedConditions
        browser.wait(EC.alertIsPresent(), 500)  //time we give to open alert

        expect(browser.switchTo().alert().getText()).toEqual('Yup, we have Joker here')
        browser.switchTo().alert().accept()    //this is for OK button, to close alert

    })

})
