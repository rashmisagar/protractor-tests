browser.ignoreSynchronization = true;
var basePage = require('./BasePage.js');

var ItemPage = function() {
    this.searchbox = element(by.id('twotabsearchtextbox'));
    this.productTitle = element(by.id('productTitle'));
    this.addToCartBtn = element(by.id('add-to-cart-button'));
    this.addNotification = element(by.id('confirm-text'));


    this.searchFor = function(string) {
        this.searchBox.sendKeys(string);
    };

    this.getProductText = function(){
        this.productTitle.getText();
    };
    /**
     * add to cart
     */
    this.addToCart = function() {
        this.addToCartBtn.click();
    };

    /**
     * gets confirmation text for product added to cart
     */
    this.addToCartNotification = function() {
        this.addNotification.getText();
    };

};
module.exports = new ItemPage();
