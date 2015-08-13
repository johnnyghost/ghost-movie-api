var mongoose = require ('mongoose');
var mongoConfig = require('./../config').clients.mongodb;

mongoose.connect('mongodb://' + mongoConfig.dbUser + ':' + mongoConfig.dbPassword + '@ds033113.mongolab.com:33113/heroku_jn8zpdrz', function (err, res) {
    console.log(err);
    if (err) {
        console.log(1);
    } else {
        console.log(2);
    }
});

module.exports = mongoose;
