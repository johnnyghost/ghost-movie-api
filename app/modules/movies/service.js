/**
 *
 */
function MovieService(TMDBClient) {
    this.tmdbClient = TMDBClient;
}

/**
 * [getAll description]
 * @return {[type]} [description]
 */
MovieService.prototype.search = function (query) {
    return this.tmdbClient.searchMovie(query);
};

module.exports = MovieService;
