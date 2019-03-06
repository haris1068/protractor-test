var support = require('../support/support.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var steps = function () {
    this.setDefaultTimeout(60000);

    this.Given(/^I Open the YourLogo website in browser$/, {timeout: 60 * 1000}, function (next) {
        browser.waitForAngularEnabled(false);
       //browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize(); //FOR CHROME
       // var width = 1300;
       // var height = 800;
      //  browser.driver.manage().window().setSize(width, height); //FOR FIREFOX
        browser.get('http://automationpractice.com/index.php');
       // browser.sleep(10000);
    });

    this.When(/^I Validate the page is navigated correctly$/, {timeout: 60 * 1000}, function (next) {
       // browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        expect(browser.getTitle())
            .to.eventually.equal("My Store")
            .and.notify(next);
    });

    this.Then(/^I close the browser$/, function (callback) {
        browser.waitForAngularEnabled(false);
        browser.close();
        callback();
    });

};
module.exports = steps;
