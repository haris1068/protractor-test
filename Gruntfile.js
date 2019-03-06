module.exports = function(grunt) {

    grunt.initConfig({
        protractor: {
            options: {
                keepAlive: true,
                configFile: "protractorConf.js",
                tags: grunt.option('cucumberOpts')
            },
            auto: {
                keepAlive: true,
                options: {
                    args: {
                        seleniumPort: 4444
                    }
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-protractor-runner');
};
