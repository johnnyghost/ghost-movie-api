var assert        = require ('assert');
var lang          = require('mout/lang');
var mixIn         = require('mout/object/mixIn');
var tmdbConfig    = require('./../config').clients.tmdb;
var httpTransport = require('./../transport').http;

/**
 * http transport tmdb default options.
 * @type {Object}
 */
var requestOptions = {
    host: tmdbConfig.baseUrl,
    path: '/' + tmdbConfig.version,
    query: {
        api_key: tmdbConfig.apiKey
    }
};

/**
 * [TMDBClient description]
 */
function TMDBClient() {}

TMDBClient.prototype = {

    /**
     * [function description]
     * @param  {[type]} query [description]
     * @return {[type]}       [description]
     */
    searchMovie: function(query) {

        // pre-conditions
        assert(lang.isString(query), 'query should exist and be a string');

        requestOptions.method = 'GET';
        requestOptions.path += '/search/movie';

        mixIn(requestOptions.query, {
            query: query
        });

        return httpTransport(requestOptions).then(function (response) {
            if (!response.results) {
                return;
            }
            return response.results;
        });
    }
};

module.exports = TMDBClient;
