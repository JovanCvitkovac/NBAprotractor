var VotePage = function () { }

VotePage.prototype = Object.create({}, {
    voteTitleTxt: { get: function () { return element(by.css('#voteForm > h3')) } },
    lakersChoiceRadioLabel: { get: function () { return element(by.css('#voteForm > div:nth-child(2)')) } },
    clippersChoiceRadioLabel: { get: function () { return element(by.css('#voteForm > div:nth-child(3)')) } },
    spursChoiceRadioLabel: { get: function () { return element(by.css('#voteForm > div:nth-child(4)')) } },
    nuggetsChoiceRadioLabel: { get: function () { return element(by.css('#voteForm > div:nth-child(5)')) } },
    celticsChoiceRadioLabel: { get: function () { return element(by.css('#voteForm > div:nth-child(6)')) } },
    submitButton: { get: function () { return element(by.css('#voteForm > button')) } },

    voteFormSection: { get: function () { return element(by.id('voteForm')) } },


    lakersChoiceRadio: { get: function () { return element(by.id('voteTeamRadio1')) } },
    clippersChoiceRadio: { get: function () { return element(by.id('voteTeamRadio2')) } },
    spursChoiceRadio: { get: function () { return element(by.id('voteTeamRadio3')) } },
    nuggetsChoiceRadio: { get: function () { return element(by.id('voteTeamRadio4')) } },
    celticsChoiceRadio: { get: function () { return element(by.id('voteTeamRadio5')) } },


    teamLabel: { get: function () { return element(by.css('body > div.container-fluid > div:nth-child(7) > div > table > thead > tr > th:nth-child(1)')) } },
    votesLabel: { get: function () { return element(by.css('body > div.container-fluid > div:nth-child(7) > div > table > thead > tr > th:nth-child(2)')) } },
    lakersLabel: { get: function () { return element(by.id('teamName1')) } },
    lakersVotes: { get: function () { return element(by.id('teamVotes1')) } },
    clippersLabel: { get: function () { return element(by.id('teamName2')) } },
    clippersVotes: { get: function () { return element(by.id('teamVotes2')) } },
    spursLabel: { get: function () { return element(by.id('teamName3')) } },
    spursVotes: { get: function () { return element(by.id('teamVotes3')) } },
    nuggetsLabel: { get: function () { return element(by.id('teamName4')) } },
    nuggetsVotes: { get: function () { return element(by.id('teamVotes4')) } },
    celticsLabel: { get: function () { return element(by.id('teamName5')) } },
    celticsVotes: { get: function () { return element(by.id('teamVotes5')) } },

    voteAlertText: { get: function () { return element(by.id('voteAlert')) } }


})



module.exports = VotePage