var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;


describe('amazon homepage', function() {

    var loginPage = require('../../amazontests/automation/pages/LoginPage');
    var homePage = require('../../amazontests/automation/pages/HomePageGK');
    var userData = require('../../amazontests/automation/data/userData');

    this.World = function MyWorld() {
        this.page = new HomePage();
    };

    beforeEach(function(callback) {
        homePage.get();
        callback();
    });

    it('should have correct home page details', function(callback) {

        //expect(homePage.getPageTitle()).to.contain('Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment & more');
        expect(homePage.getPageTitle()).to.equal('Google Keep').and.notify(callback);
        //expect(homePage.searchbox.isPresent()).to.be(true);
        //callback();

    });
    it('should search for an item', function(callback) {

        expect(homePage.searchForItem("iphone"));

        callback();
        //expect(homePage.searchBox.isDisplayed()).toBe(true);
        //expect(homePage.viewOnGitHubButton.isDisplayed()).toBe(false);

        //expect(homePage.search.isPresent()).toBe(true);
        //expect(homePage.downloadButton.isPresent()).toBe(false);

    });
});
