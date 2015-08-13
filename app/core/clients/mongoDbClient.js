var mongoose = require ('mongoose');
var mongoConfig = require('./../config').clients.mongodb;

mongoose.connect(mongoConfig.uri);

module.exports = mongoose;
