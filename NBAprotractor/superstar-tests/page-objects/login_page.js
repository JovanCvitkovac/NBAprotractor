// Login Page Objects

var LoginPage = function () { }

LoginPage.prototype = Object.create({}, {
    loginTitleTxt: { get: function () { return element(by.id('loginTitle')) } },
    emailFldLabel: { get: function () { return element(by.css('#formLogin > div:nth-child(1) > label')) } },
    emailFld: { get: function () { return element(by.id('loginEmail')) } },
    passwordFldLabel: { get: function () { return element(by.css('#formLogin > div:nth-child(2) > label')) } },
    passwordFld: { get: function () { return element(by.id('loginPassword')) } },
    rememberChk: { get: function () { return element(by.id('rememberLoginCheck')) } },
    rememberChkLabel: { get: function () { return element(by.css('#formLogin > div.form-group.form-check > label')) } },
    submitButton: { get: function () { return element(by.css('#formLogin > button')) } },
    loginErrorMsg: { get: function () { return element(by.id('loginAlert')) } }


})
module.exports = LoginPage
