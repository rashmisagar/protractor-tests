browser.ignoreSynchronization = true;
var chai = require('chai').use(require('chai-as-promised'));
chai.use(require('chai-smoothie'));
var expect = require('chai').expect;

var resultsPage = require('../pages/ResultsPage');
var itemPage = require('../pages/ItemPage');

describe('add cheapest item to the cart', function() {

    it('should add first lowest price item to the shopping cart', function() {

        expect(itemPage.getProductText()).to.contain.text(resultsPage.getFirstResultItemText());
        itemPage.addToCart();
        expect(itemPage.addToCartNotification()).to.contain.text("1 item was added to your basket");


    });

});

