browser.ignoreSynchronization = true;

var chai = require('chai').use(require('chai-as-promised'));
chai.use(require('chai-smoothie'));
var expect = require('chai').expect;

var resultsPage = require('../pages/ResultsPage');
var itemPage = require('../pages/ItemPage');

describe('select cheapest item by price sort', function() {

    var name;

    it('should display search results', function() {

        expect(resultsPage.actualCount).to.be.present;

    });

    it('should sort search results by lowest price', function() {

        resultsPage.sortbyLowestPrice('Price: Low to High');
        expect(resultsPage.lowestSort).$('option:checked').getText().to.eventually.equal('Price: Low to High');



    });

    it('should select the first product in the lowest price list results', function() {


        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(resultsPage.firstItemTitleElement), 5000, 'Element taking too long to appear in the DOM');

        expect(resultsPage.firstItemTitleElement).to.be.present;
        resultsPage.selectFirstResultItem();


    });

    it('should add first lowest price item to the shopping cart', function() {

        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(itemPage.productTitle), 5000, 'Element taking too long to appear in the DOM');

        expect(itemPage.getProductText()).to.eventually.equal(resultsPage.getFirstResultItemText());
        itemPage.addToCart();
        expect(itemPage.addToCartNotification()).to.eventually.equal("1 item was added to your basket");


    });

});
