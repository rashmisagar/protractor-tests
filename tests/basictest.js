describe('To Test Gmail Login window', function() {

    it('should be able to login', function() {

        browser.driver.get('http://gmail.com/');
        browser.driver.findElement(by.css('#Email')).sendKeys("trainer@way2automation.com");
        var nxt = browser.driver.findElement(by.css("#next"))
        nxt.click();
        browser.driver.findElement(by.css('#Passwd')).sendKeys("lskdhgfsdf");
        browser.driver.findElement(by.css('#signIn')).click();
        //Printing Text
        var txt = browser.driver.findElement(by.css('#errormsg_0_Passwd')).getText()
        txt.then(function(text) {
            console.log(text);
        });
    });
});

