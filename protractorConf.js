exports.config = {
    framework: 'custom',
    frameworkPath: 'node_modules/protractor-cucumber-framework',
    allScriptsTimeout: 30000,
    specs: [
        './features/*.feature'
    ],
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': [
                'no-sandbox',
                '--disable-web-security',
                '--headless'
            ]
        }
    },
    baseUrl: 'https://www.google.com',

    seleniumAddress: 'http://localhost:4444/wd/hub',
    cucumberOpts: {
        require: './features/step_definitions/*.js',
        format: 'json',
    },
    restartBrowserBetweenTests: true,
    onPrepare: function () {
        browser.ignoreSynchronization = false;
        browser.driver.manage().window().maximize();
    }
};

