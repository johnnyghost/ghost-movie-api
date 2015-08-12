var di = require('di');
var injector = new di.Injector();

module.exports = {
    services: require('./services')(di, injector)
};
