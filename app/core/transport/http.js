var http    = require('http');
var url     = require('url');
var Promise = require('bluebird');

var httpTransport = Promise.method(function(options) {

    if (options.query) {
        options.path = url.format({
            pathname: options.path,
            query: options.query
        });
    }

    // promisify http
    return new Promise(function(resolve, reject) {
        var request = http.request(options, function(response) {

            var result = '';

            // Build the body
            response.on('data', function(chunk) {
                result += chunk;
            });

            // Resolve the promise
            response.on('end', function() {
                try {
                    JSON.parse(result);
                } catch (error) {
                    return reject(error.toString());
                }
                resolve(JSON.parse(result));
            });
        });

        // Handle errors
        request.on('error', function(error) {
            reject(error);
        });

        // Must always call .end() even if there is no data being written to the request body
        request.end();
    });
});

module.exports = httpTransport;
