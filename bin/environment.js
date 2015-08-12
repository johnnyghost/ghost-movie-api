var fs  = require('fs');
var env = require('node-env-file');

if (fs.existsSync(__dirname + '/../.env' )) {
    env(__dirname + '/../.env');
}
