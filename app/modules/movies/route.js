var responseHelper = require('./../../core/helpers').response;
var movieService = require('./../../core/service-locator').services.movie;

/**
 * [exports description]
 * @param  {[type]} app [description]
 * @return {[type]}     [description]
 */
module.exports = function (app) {

    app.get('/movies/search/:query', function (req, res) {
        var query = req.params.query;
        movieService.search(query).then(function searchMovieSuccessHandler(response) {
            return res.json(responseHelper.parseSuccessResponse(response));
        }).catch(function searchMovieErrorHandler(error) {
            return res.json(responseHelper.parseErrorResponse(error));
        });
    });
};
