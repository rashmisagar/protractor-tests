
browser.ignoreSynchronization = true;

var chai = require('chai').use(require('chai-as-promised'));
chai.use(require('chai-smoothie'));
var expect = chai.expect;
var homePage = require('../pages/HomePage');

describe('amazon homepage', function() {

    beforeEach(function(callback) {
        homePage.get();
        callback();
    });

    it('should have correct home page details', function(callback) {

        expect(homePage.logoText).to.be.present;
        expect(homePage.searchbox).to.be.displayed;
        callback();

    });
    it('should search for an item', function(callback) {

        expect(homePage.searchForItem("kindle"));

        callback();

    });
});
