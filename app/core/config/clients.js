module.exports = {
    tmdb: {
        baseUrl: 'api.themoviedb.org',
        version: 3,
        apiKey: process.env.TMDB_API_KEY
    },
    mongodb: {
        uri: 'mongodb://' + process.env.MONGO_DB_USER + ':' +
            process.env.MONGO_DB_PASSWORD + '@ds033113.mongolab.com:33113/heroku_jn8zpdrz'
    }
};
