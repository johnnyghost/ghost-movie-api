var mongoose = require ('mongoose');
var Promise = require('bluebird');
var mongoConfig = require('./../config').clients.mongodb;

Promise.promisifyAll(mongoose);

mongoose.connectAsync(mongoConfig.uri).catch(function (err) {
    return Promise.reject(err);
});

module.exports = mongoose;
