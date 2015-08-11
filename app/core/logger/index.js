var bunyan = require('bunyan');
var loggerConfig = require('./../config').logger;

module.exports = {

    /**
     *
     */
    get: function () {
        var logger;

        if (!logger) {
            logger = bunyan.createLogger(loggerConfig);
        }

        return logger;
    }
};
