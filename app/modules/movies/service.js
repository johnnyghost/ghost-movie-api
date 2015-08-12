/**
 * Movie Service.
 * Makes data aggregation.
 *
 * @constructor
 *
 * @method MovieService
 * @param  {TMDBClient} TMDBClient [description]
 */
function MovieService(TMDBClient) {
    this.tmdbClient = TMDBClient;
}

/**
 * Get a movie by id.
 *
 * @method get
 * @param  {String} id The movie id
 * @return {Promise<Array|HttpError>)} resolved promise with an array of movies and
 *                                     rejected with an http error
 */
MovieService.prototype.get = function get(id) {
    return this.tmdbClient.getMovie(id);
};

/**
 * Search a movie by title.
 *
 * @method search
 *
 * @param  {String} query The title of the movie
 * @return {Promise<Array|HttpError>)} resolved promise with a movie object and
 *                                     rejected with an http error
 */
MovieService.prototype.search = function search(query) {
    return this.tmdbClient.searchMovie(query);
};

module.exports = MovieService;
