var assert     = require ('assert');
var lang       = require('mout/lang');
var mixIn      = require('mout/object/mixIn');
var tmdbConfig = require('./../config').clients.tmdb;

/**
 * Http transport tmdb default options.
 *
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
 * TMDB client.
 * A abstraction to the movie database api.
 * @see http://docs.themoviedb.apiary.io
 *
 * @constructor
 *
 * @method TMDBClient
 * @param  {HttpTransport} httpTransport a instance of httpTransport
 */
function TMDBClient(httpTransport) {
    this.transport = httpTransport;
}

/**
 * Search for movies by title.
 *
 * @param  {String} query A CGI escaped string.
 * @return {Promise<Array|HttpError>)} resolved promise with an array of movies and
 *                                     rejected with an http error
 */
TMDBClient.prototype.searchMovie = function(query) {

    // pre-conditions
    assert(lang.isString(query), 'query should exist and be a string');

    requestOptions.method = 'GET';
    requestOptions.path += '/search/movie';

    mixIn(requestOptions.query, {
        query: query
    });

    return this.transport(requestOptions).then(function (response) {
        if (!response.results) {
            return;
        }
        return response.results;
    });
};

module.exports = TMDBClient;
