var TMDBClient    = require('./../clients/tmdb-client');
var httpTransport = require('./../transport/http');

module.exports = function (di) {
    return {
        tmdb: (function () {
            di.annotate(TMDBClient, new di.Inject(httpTransport));
        }())
    };
};
