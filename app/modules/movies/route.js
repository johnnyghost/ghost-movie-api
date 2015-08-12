var responseHelper = require('./../../core/helpers').response;
var movieService = require('./../../core/service-locator').services.movie;

/**
 * Helper method for success responses.
 *
 * @method movieServiceSuccessHandler
 * @private
 *
 * @param  {Object} response Response object
 * @return {Function}
 */
function movieServiceSuccessHandler (response) {
    return function (data) {
        return response.json(responseHelper.parseSuccessResponse(data));
    };
}

/**
 * Helper method for failures responses.
 *
 * @method movieServiceErrorHandler
 * @private
 *
 * @param  {Object} response Response object
 * @return {Function}
 */
function movieServiceErrorHandler (response) {
    return function (error) {
        return response.json(responseHelper.parseErrorResponse(error));
    };
}

module.exports = function (app) {

    app.get('/movies/:id', function (req, res) {
        var id = req.params.id;

        movieService.get(id)
            .then(movieServiceSuccessHandler(res))
            .catch(movieServiceErrorHandler(res));
    });

    app.get('/movies/search/:query', function (req, res) {
        var query = req.params.query;

        movieService.search(query).then(function searchMovieSuccessHandler(response) {
            return res.json(responseHelper.parseSuccessResponse(response));
        }).catch(function searchMovieErrorHandler(error) {
            return res.json(responseHelper.parseErrorResponse(error));
        });
    });
};
