var responseHelper = require('./../../core/helpers').response;
var TMDBClient = require('./../../core/clients/tmdb-client');

module.exports = {

    /**
     * [getAll description]
     * @return {[type]} [description]
     */
    search: function (query) {
        var tmdb = new TMDBClient();
        return tmdb.searchMovie(query).then(function searchMovieSuccessHandler(response) {
            return responseHelper.parseSuccessResponse(response);
        }).catch(function searchMovieErrorHandler(error) {
            return responseHelper.parseErrorResponse(error);
        });
    }
};
