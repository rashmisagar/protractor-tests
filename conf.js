
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    //directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {

        'browserName': 'chrome'
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: //['tests/amazontests/automation/specs/*.js'],
    ['tests/demo-tests/basictest.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
//exports.config = {
//  seleniumAddress: 'http://localhost:4444/wd/hub',

//  framework: 'custom',
//frameworkPath: require.resolve('protractor-cucumber-framework'),

//  specs: [
//'specs/bddtests/*.feature'
//    'automation/feature/*.feature'
//'specs/todo-spec.js'
//],
//cucumberOpts: {
//  require: 'specs/bddtests/steps/*.js',
//format: 'pretty'
//}
/*multiCapabilities: [{
 browserName: 'firefox'
 }, {
 browserName: 'chrome'
 }]*/
//};