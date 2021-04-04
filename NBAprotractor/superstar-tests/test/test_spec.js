var TestPage = require('../page-objects/test_page')

describe('Superstar Page', function () {
    var testPage
   
    // Before each test case, it's doing this:
    beforeEach(function () {
        testPage = new TestPage()

        browser.ignoreSynchronization = true
        //Open URL
        browser.get('file:///C:/NBAplayersProtractor/superstar/index.html')

    })

    // After each test case, it's doing this:
    afterEach(function () {


    })

    it('should load the corect URL', function () {
        //Enter text into fields
        testPage.emailFld.sendKeys('Just Testing')
        testPage.passwordFld.sendKeys('password')
        //Verify stuff
        expect(testPage.loginTitleTxt.getText()).toEqual('Welcome. Please Log In')
        expect(testPage.emailFld.getAttribute('value')).toEqual('Just Testing')

        // browser.sleep(5000)
    })

})