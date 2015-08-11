var moviesService = require('./service');

/**
 * [exports description]
 * @param  {[type]} app [description]
 * @return {[type]}     [description]
 */
module.exports = function (app) {

    app.get('/movies/search/:query', function (req, res) {
        var query = req.params.query;
        moviesService.search(query).done(function (data) {
            res.json(data);
        });
    });
};
