var express = require('express');
var app     = express();

// load environment configuration
// TODO: in dev only
require('./environment');

// routes
require('./../app/core/routes')(app);

app.listen(3000);
