exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        'tests/features/*.feature'
        //'tests/homePageSpec.js'
        //'tests/todo-spec.js'
    ],
    cucumberOpts: {
        require: 'tests/features/steps/*.js',
        format: 'pretty'
    }
    /*multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }]*/
};
