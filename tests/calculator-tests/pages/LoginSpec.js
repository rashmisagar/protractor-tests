var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

describe ('google keep login', function() {

    var loginPage = require('../../amazontests/automation/pages/LoginPage');
    var homePage = require('../../amazontests/automation/pages/HomePageGK');
    var userData = require('../../amazontests/automation/data/userData');

    beforeEach(function() {
        loginPage.get();

        //loginPage.at();
    });

    it('should login for valid credentials', function() {
        loginPage.login('testabc12134@gmail.com','testtest112233');

        //expect(homePage.at()).toBeTruthy();
    });
});
