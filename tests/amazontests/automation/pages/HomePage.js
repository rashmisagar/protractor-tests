browser.ignoreSynchronization = true;
var basePage = require('./BasePage');
var resultsPage = require('./ResultsPage');

var HomePage = function() {

    this.url = 'https://www.amazon.co.uk';
    this.searchbox = element(by.id('twotabsearchtextbox'));
    this.logoText = element(by.xpath('//*[@id="nav-logo"]/a[1]/span[1]'));


    this.get = function() {
        browser.get(this.url);
    };

    this.getPageTitle = function () {
        browser.getTitle();
    };

    this.getPageText = function () {
        this.logoText.getText();
    };

    /**
     * Search blog posts
     * @param  {string}
     */
    this.searchForItem = function(text) {
        this.searchbox.sendKeys(text);
        basePage.hitEnter();
    };
};
module.exports = new HomePage();
