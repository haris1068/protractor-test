
By = 'by';
var Support = function(){
};

Support.prototype.get = function(sut, url, callback){
    browser.get(url).then(function(result) {
       // browser.waitForAngular();
        callback(result);
    });
};

Support.prototype.isElementPresentById = function(sut, find, callback){
  //  browser.waitForAngular();
    // console.log("FIND IS "+ find);
    browser.isElementPresent(by.id(find)).then(function(result) {
       // console.log("Result is "+result)
        callback(result)
    });
};

Support.prototype.isElementPresentByClass = function(sut, find, callback){
   // browser.waitForAngular();
    browser.isElementPresent(by.css(find)).then(function(result) {
        callback(result)
    });
};

Support.prototype.isElementPresentByCheckBox = function(sut, find, callback){
   // browser.waitForAngular();
    browser.findElement(by.id(find)).then(function(result) {
        result.click();
        browser.findElement(by.id('nextButton')).click();
        callback(result);
    });
};
module.exports = new Support();
