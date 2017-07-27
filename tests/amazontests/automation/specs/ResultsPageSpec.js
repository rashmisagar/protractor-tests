browser.ignoreSynchronization = true;

var chai = require('chai').use(require('chai-as-promised'));
chai.use(require('chai-smoothie'));
var expect = require('chai').expect;

var resultsPage = require('../pages/ResultsPage');
var itemPage = require('../pages/ItemPage');

describe('select cheapest item by price sort', function() {

    it('should display search results', function() {

        resultsPage.actualCount.to.be.present;

    });

    it('should sort search results by lowest price', function() {

        resultsPage.sortbyLowestPrice('Price: Low to High');
        expect(element(by.cssContainingText('Price: Low to High')).$('option:checked').getText()).to.contain.text('Price: Low to High');



    });

    it('should select the first product in the lowest price list results', function() {

        expect(resultsPage.firstItemTitleElement).to.be.present;
        var name = resultsPage.firstItemTitleElement.getText();
        resultsPage.selectFirstResultItem();


    });

});
