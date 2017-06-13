exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        'tests/features/*.feature'
    ],
    cucumberOpts: {
        require: 'tests/features/steps/*_steps.js',
        format: 'pretty'
    }
}
