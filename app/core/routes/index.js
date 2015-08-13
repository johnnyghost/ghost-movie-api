module.exports = function (app) {
    require('./../../modules/movies/route')(app);


    var User = require('./../models/user');

    app.get('/users', function (req, res) {

        // Creating one user.
        var johndoe = new User ({
            name: {
                first: 'John',
                last: '  Doe2   '
            },
            age: 25
        });

        // Saving it to the database.
        johndoe.save(function (err) {if (err) console.log ('Error on save!')});
        res.json({
            a:2
        })
    })
};
