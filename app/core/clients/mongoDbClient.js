var mongoose = require ('mongoose');
var Promise = require('bluebird');
var mongoConfig = require('./../config').clients.mongodb;

Promise.promisifyAll(mongoose);

mongoose.connectAsync(mongoConfig.uri).catch(function (err) {
    console.log(err);
});

module.exports = mongoose;
