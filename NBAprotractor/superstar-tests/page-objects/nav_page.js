var NavPage = function () { }

NavPage.prototype = Object.create({}, {

    playersLink: { get: function () { return element(by.css('body > div.row > div.col-12 > nav > a')) } },
    homeLink: { get: function () { return element(by.css('#navbarSupportedContent > ul > li.nav-item.active > a')) } },
    wikiLink: { get: function () { return element(by.css('#navbarSupportedContent > ul > li:nth-child(2) > a')) } },
    factsLink: { get: function () { return element(by.css('#navbarDropdown')) } },
    jokicFactLink: { get: function () { return element(by.css('#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(1)')) } },
    hardenFactLink: { get: function () { return element(by.css('#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(2)')) } },
    logoutLink: { get: function () { return element(by.css('#navbarSupportedContent > ul > li:nth-child(4) > a')) } },

    jokicModalTitle: { get: function () { return element(by.css('#nikolaJokicModalLabel')) } },
    jokicModalBody: { get: function () { return element(by.css('#nikolaJokicModal > div > div > div.modal-body')) } },
    jokicModalCloseButton: { get: function () { return element(by.css('#nikolaJokicModal > div > div > div.modal-footer > button')) } },
    jokicModalXButton: { get: function () { return element(by.css('#nikolaJokicModal > div > div > div.modal-header > button > span')) } },

    hardenModalTitle: { get: function () { return element(by.css('#jamesHardenModalLabel')) } },
    hardenModalBody: { get: function () { return element(by.css('#jamesHardenModal > div > div > div.modal-body')) } },
    hardenModalCloseButton: { get: function () { return element(by.css('#jamesHardenModal > div > div > div.modal-footer > button')) } },
    hardenModalXButton: { get: function () { return element(by.css('#jamesHardenModal > div > div > div.modal-header > button > span')) } },

    searchField: { get: function () { return element(by.id('searchBox')) } },
    searchButton: { get: function () { return element(by.css('#searchForm > button')) } }


})

module.exports = NavPage