var RosterPage = require('../page-objects/roster_page')
var LoginPage = require('../page-objects/login_page')
describe('Roster Page', function () {

    var rosterPage
    var loginPage
    beforeEach(function () {
        rosterPage = new RosterPage()
        loginPage = new LoginPage()


        browser.ignoreSynchronization = true

        browser.get('file:///C:/NBAplayersProtractor/superstar/index.html')
    })

    afterEach(function () {


    })

    it('should display all default roster elements', function(){
        loginPage.emailFld.sendKeys('test@testing.com')
        loginPage.passwordFld.sendKeys('passwordsample')
        loginPage.submitButton.click()
        
        expect(rosterPage.rosterTitleTxt.isDisplayed()).toBe(true)
        expect(rosterPage.rosterTitleTxt.getText()).toEqual('Build Your Superstar Roster:')
       
        expect(rosterPage.jokicListTxt.isDisplayed()).toBe(true)
        expect(rosterPage.jokicListTxt.getText()).toEqual('Nikola Jokic')
        
        expect(rosterPage.durantListTxt.isDisplayed()).toBe(true)
        expect(rosterPage.durantListTxt.getText()).toEqual('Kevin Durant')
        
        expect(rosterPage.lillardListTxt.isDisplayed()).toBe(true)
        expect(rosterPage.lillardListTxt.getText()).toEqual('Damian Lillard')
       
        expect(rosterPage.davisListTxt.isDisplayed()).toBe(true)
        expect(rosterPage.davisListTxt.getText()).toEqual('Anthony Davis')
       
        expect(rosterPage.hardenListTxt.isDisplayed()).toBe(true)
        expect(rosterPage.hardenListTxt.getText()).toEqual('James Harden')
       
        expect(rosterPage.addStarLabel.isDisplayed()).toBe(true)
        expect(rosterPage.addStarLabel.getText()).toEqual('Add a Superstar')
       
        expect(rosterPage.playerInputField.isDisplayed()).toBe(true)
        expect(rosterPage.playerInputField.getText()).toEqual('')
        
        expect(rosterPage.submitButton.isDisplayed()).toBe(true)
    })
    it('should add another player on submit', function(){
        loginPage.emailFld.sendKeys('test@testing.com')
        loginPage.passwordFld.sendKeys('passwordsample')
        loginPage.submitButton.click()
        
        rosterPage.playerInputField.sendKeys('Greek Freak')
        rosterPage.submitButton.click()

        //The others are static, this one is added just for test
       
        expect(element(by.css('#playerList > li:nth-child(6)')).isDisplayed()).toBe(true)
        expect(element(by.css('#playerList > li:nth-child(6)')).getText()).toEqual('Greek Freak')
    })
    
})