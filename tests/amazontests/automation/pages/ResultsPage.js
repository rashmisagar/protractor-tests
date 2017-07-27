browser.ignoreSynchronization = true;
var basePage = require('./BasePage.js');
var itemPage = require('./ItemPage.js');

var ResultsPage = function() {
    //this.url = 's/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=kindle';
    this.searchbox = element(by.id('twotabsearchtextbox'));
    this.firstItemTitleElement2 = element(by.className('s-access-title'));
    this.firstItemTitleElement = element(by.css('#result_0'));
    this.addToCartBtn = element(by.id('add-to-cart-button'));
    this.addNotification = element(by.id('confirm-text'));
    this.actualCount = element(by.id('s-result-count'));
    this.sortDropDown = element(by.css('#sort'));
    //this.lowestSort = element(by.css('option[value="price-asc-rank"]'));
    this.lowestSort = element(by.cssContainingText('option', 'Price: Low to High'));
    // results...
    this.searchResults = function() {
        return element.all(by.id('s-results-list-atf'));
    };
    this.rows = element.all(by.repeater('row in rows'));
    this.names = element.all(by.repeater('row in rows').column('{{row}}'));

    /**
     * search for product
     *
     * @param  {string} string
     */
    this.searchFor = function(string) {
        this.searchBox.sendKeys(string);
    };

    /**
     * sort search results by low to high
     */
    this.sortbyLowestPrice = function(value) {
        this.sortDropDown.element(by.cssContainingText('option', value)).click();
    };


    /**
     * get the name of the first cheapest item in the sorted result
     */
    this.getFirstResultItemText = function() {
        this.firstItemTitleElement.getText();
    };

    this.selectFirstResultItem = function() {
        this.firstItemTitleElement.click();
    };
};
module.exports = new ResultsPage();

