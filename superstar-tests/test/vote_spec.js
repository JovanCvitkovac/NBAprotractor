var VotePage = require('../page-objects/vote_page')
var LoginPage = require('../page-objects/login_page')
describe('VotePage', function () {
var votePage
var loginPage

    beforeEach(function () {
        votePage = new VotePage()
        loginPage = new LoginPage()

        // Because this is not an Angular site
        browser.ignoreSynchronization = true

        // Open URL
        browser.get('file:///C:/NBAplayersProtractor/superstar/index.html')

    })
    afterEach(function () {


    })
    it('should display all elements for voting section', function () {
        loginPage.emailFld.sendKeys('test@testing.com')
        loginPage.passwordFld.sendKeys('passwordsample')
        loginPage.submitButton.click()

        expect(votePage.voteTitleTxt.isDisplayed()).toBe(true)
        expect(votePage.voteTitleTxt.getText()).toEqual('Vote for your favorite NBA team:')

        expect(votePage.lakersChoiceRadioLabel.isDisplayed()).toBe(true)
        expect(votePage.lakersChoiceRadioLabel.getText()).toEqual('Lakers')

        expect(votePage.clippersChoiceRadioLabel.isDisplayed()).toBe(true)
        expect(votePage.clippersChoiceRadioLabel.getText()).toEqual('Clippers')

        expect(votePage.spursChoiceRadioLabel.isDisplayed()).toBe(true)
        expect(votePage.spursChoiceRadioLabel.getText()).toEqual('Spurs')

        expect(votePage.nuggetsChoiceRadioLabel.isDisplayed()).toBe(true)
        expect(votePage.nuggetsChoiceRadioLabel.getText()).toEqual('Nuggets')

        expect(votePage.celticsChoiceRadioLabel.isDisplayed()).toBe(true)
        expect(votePage.celticsChoiceRadioLabel.getText()).toEqual('Celtics')

        expect(votePage.submitButton.isDisplayed()).toBe(true)
        

       
        expect(votePage.teamLabel.isDisplayed()).toBe(true)
        expect(votePage.teamLabel.getText()).toEqual('Team')

        expect(votePage.votesLabel.isDisplayed()).toBe(true)
        expect(votePage.votesLabel.getText()).toEqual('Votes')

        expect(votePage.lakersLabel.isDisplayed()).toBe(true)
        expect(votePage.lakersLabel.getText()).toEqual('Lakers')

        expect(votePage.lakersVotes.isDisplayed()).toBe(true)
        expect(votePage.lakersVotes.getText()).toEqual('5')

        expect(votePage.clippersLabel.isDisplayed()).toBe(true)
        expect(votePage.clippersLabel.getText()).toEqual('Clippers')

        expect(votePage.clippersVotes.isDisplayed()).toBe(true)
        expect(votePage.clippersVotes.getText()).toEqual('15')

        expect(votePage.spursLabel.isDisplayed()).toBe(true)
        expect(votePage.spursLabel.getText()).toEqual('Spurs')

        expect(votePage.spursVotes.isDisplayed()).toBe(true)
        expect(votePage.spursVotes.getText()).toEqual('7')

        expect(votePage.nuggetsLabel.isDisplayed()).toBe(true)
        expect(votePage.nuggetsLabel.getText()).toEqual('Nuggets')

        expect(votePage.nuggetsVotes.isDisplayed()).toBe(true)
        expect(votePage.nuggetsVotes.getText()).toEqual('2')

        expect(votePage.celticsLabel.isDisplayed()).toBe(true)
        expect(votePage.celticsLabel.getText()).toEqual('Celtics')

        expect(votePage.celticsVotes.isDisplayed()).toBe(true)
        expect(votePage.celticsVotes.getText()).toEqual('12')
        
    })

    it('should add 1 to Lakers votes', function(){
        loginPage.emailFld.sendKeys('test@testing.com')
        loginPage.passwordFld.sendKeys('passwordsample')
        loginPage.submitButton.click()

        expect(votePage.voteAlertText.isDisplayed()).toBe(false)

        votePage.submitButton.click()
        expect(votePage.lakersVotes.getText()).toEqual('6')
        expect(votePage.voteAlertText.getText()).toEqual('Thanks for voting!')
        expect(votePage.voteAlertText.isDisplayed()).toBe(true)

        expect(votePage.voteFormSection.isDisplayed()).toBe(false)
    })
    it('should add 1 to Clippers votes', function(){
        loginPage.emailFld.sendKeys('test@testing.com')
        loginPage.passwordFld.sendKeys('passwordsample')
        loginPage.submitButton.click()

        expect(votePage.voteAlertText.isDisplayed()).toBe(false)

        votePage.clippersChoiceRadio.click()
        votePage.submitButton.click()
        expect(votePage.clippersVotes.getText()).toEqual('16')
        expect(votePage.voteAlertText.getText()).toEqual('Thanks for voting!')
        expect(votePage.voteAlertText.isDisplayed()).toBe(true)

        expect(votePage.voteFormSection.isDisplayed()).toBe(false)
    })
    it('should add 1 to Spurs votes', function(){
        loginPage.emailFld.sendKeys('test@testing.com')
        loginPage.passwordFld.sendKeys('passwordsample')
        loginPage.submitButton.click()

        expect(votePage.voteAlertText.isDisplayed()).toBe(false)

        votePage.spursChoiceRadio.click()
        votePage.submitButton.click()
        expect(votePage.spursVotes.getText()).toEqual('8')
        expect(votePage.voteAlertText.getText()).toEqual('Thanks for voting!')
        expect(votePage.voteAlertText.isDisplayed()).toBe(true)

        expect(votePage.voteFormSection.isDisplayed()).toBe(false)
    })
    it('should add 1 to Nuggets votes', function(){
        loginPage.emailFld.sendKeys('test@testing.com')
        loginPage.passwordFld.sendKeys('passwordsample')
        loginPage.submitButton.click()

        expect(votePage.voteAlertText.isDisplayed()).toBe(false)

        votePage.nuggetsChoiceRadio.click()
        votePage.submitButton.click()
        expect(votePage.nuggetsVotes.getText()).toEqual('3')
        expect(votePage.voteAlertText.getText()).toEqual('Thanks for voting!')
        expect(votePage.voteAlertText.isDisplayed()).toBe(true)
       
        expect(votePage.voteFormSection.isDisplayed()).toBe(false)
    })
    it('should add 1 to Celtics votes', function(){
        loginPage.emailFld.sendKeys('test@testing.com')
        loginPage.passwordFld.sendKeys('passwordsample')
        loginPage.submitButton.click()

        expect(votePage.voteAlertText.isDisplayed()).toBe(false)

        votePage.celticsChoiceRadio.click()
        votePage.submitButton.click()
        expect(votePage.celticsVotes.getText()).toEqual('13')
        expect(votePage.voteAlertText.getText()).toEqual('Thanks for voting!')
        expect(votePage.voteAlertText.isDisplayed()).toBe(true)
        
        expect(votePage.voteFormSection.isDisplayed()).toBe(false)
    })
})
