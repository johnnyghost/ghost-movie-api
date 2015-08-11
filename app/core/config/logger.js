module.exports = {
    name: 'ghost-movie',
    streams: [{
        level: 'info',
        stream: process.stdout         // log INFO and above to stdout
    },
    {
        level : 'error',
        type  : 'rotating-file',
        period: '1d',                  // daily rotation
        count : 3,                     // keep 3 back copies
        path  : 'logs/myapp-error.log' // log ERROR and above to a file
    }]
};
