var express = require('express');
var app     = express();

// routes
require ('./../app/core/routes')(app);

app.listen(3000);
