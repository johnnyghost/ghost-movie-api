module.exports = function (app) {
    require('./../../modules/movies/route')(app);

    app.get('/', function(req, res) {
        res.json({
            a: 2
        });
    });
};
