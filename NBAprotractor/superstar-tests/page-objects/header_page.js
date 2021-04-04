var HeaderPage = function () { }

HeaderPage.prototype = Object.create({}, {

    titleTxt: { get: function () { return element(by.css('body > div.container-fluid > div:nth-child(1) > h1')) } },
    playersImage: { get: function () { return element(by.css('body > div.container-fluid > div.text-center.bg-light > img')) } },
    underImageTxt: { get: function () { return element(by.css('body > div.container-fluid > div:nth-child(3) > p')) } }

})

module.exports = HeaderPage