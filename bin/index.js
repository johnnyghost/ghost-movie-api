var express = require('express');
var app     = express();


if ('development' == app.get('env')) {
    // load environment configuration
    // TODO: in dev only
    require('./environment');
}

// routes
require('./../app/core/routes')(app);

app.listen(process.env.PORT || 5000);
