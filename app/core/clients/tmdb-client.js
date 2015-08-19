var assert     = require('assert');
var lang       = require('mout/lang');
var mixIn      = require('mout/object/mixIn');
var clone      = require('mout/lang/clone');
var tmdbConfig = require('./../config').clients.tmdb;

/**
 * Http transport tmdb default options.
 *
 * @type {Object}
 */
var requestDefault = {
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
 * @method searchMovie
 *
 * @param  {String} query A CGI escaped string.
 * @return {Promise<Array|HttpError>)} resolved promise with an array of movies and
 *                                     rejected with an http error
 */
TMDBClient.prototype.searchMovie = function searchMovie(query) {

    // pre-conditions
    assert(lang.isString(query), 'query should exist and be a string');

    var requestOptions = clone(requestDefault);

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

/**
 * Get the basic movie information for a specific movie id.
 *
 * @method getMovie
 *
 * @param  {String} movieId The movie id
 * @return {Promise<Array|HttpError>)} resolved promise with a movie object and
 *                                     rejected with an http error
 */
TMDBClient.prototype.getMovie = function getMovie(movieId) {

    // pre-conditions
    assert(lang.isString(movieId), 'query should exist and be a string');

    var requestOptions = clone(requestDefault);

    requestOptions.method = 'GET';
    requestOptions.path += '/movie/' + movieId;

    return this.transport(requestOptions).then(function (response) {
        return response;
    });
};

module.exports = TMDBClient;
