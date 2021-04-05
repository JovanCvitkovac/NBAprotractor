var RosterPage = function () { }

RosterPage.prototype = Object.create({}, {
    rosterTitleTxt: { get: function () { return element(by.css('body > div.container-fluid > div:nth-child(4) > h3')) } },
    jokicListTxt: { get: function () { return element(by.css('#playerList > li:nth-child(1)')) } },
    durantListTxt: { get: function () { return element(by.css('#playerList > li:nth-child(2)')) } },
    lillardListTxt: { get: function () { return element(by.css('#playerList > li:nth-child(3)')) } },
    davisListTxt: { get: function () { return element(by.css('#playerList > li:nth-child(4)')) } },
    hardenListTxt: { get: function () { return element(by.css('#playerList > li:nth-child(5)')) } },
    addStarLabel: { get: function () { return element(by.css('#addSuperstarForm > div > label')) } },
    playerInputField: { get: function () { return element(by.id('playerInput')) } },
    submitButton: { get: function () { return element(by.css('#addSuperstarForm > button')) } }

})



module.exports = RosterPage
