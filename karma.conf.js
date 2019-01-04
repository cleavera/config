process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config, plugins, files) {
    return {
        basePath: '',
        frameworks: [
            'jasmine'
        ],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher')
        ],
        files: files,
        preprocessors: {
            './**/!(*.d).spec.ts': ['webpack']
        },
        reporters: ['mocha'],
        captureTimeout: 60000,
        browserNoActivityTimeout: 60000,
        browserDisconnectTimeout: 10000,
        browserDisconnectTolerance: 5,
        port: 10011,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: false
    };
};
