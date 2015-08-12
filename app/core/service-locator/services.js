var TMDBClient    = require('./../clients/tmdb-client');
var moviesService = require('./../../modules/movies/service');

module.exports = function (di, injector) {

    return {
        movie: (function () {

            // Child dependencies
            require('./clients')(di).tmdb;

            di.annotate(moviesService, new di.Inject(TMDBClient));
            return injector.get(moviesService);
        }())
    };
};
