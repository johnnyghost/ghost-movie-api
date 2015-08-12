var express = require('express');
var app     = express();


if ('development' == app.get('env')) {
    // load environment configuration
    // TODO: in dev only
    require('./environment');
}


// routes
require('./../app/core/routes')(app);

app.listen(3000);
