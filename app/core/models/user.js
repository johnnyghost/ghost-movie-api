var mongoDbClient = require('./../clients/mongoDbClient');

// // This is the schema.  Note the types, validation and trim
// // statements.  They enforce useful constraints on the data.
var userSchema = new mongoDbClient.Schema({
    name: {
        first: String,
        last: {
            type: String,
            trim: true,
            required: true
        }
    },
    age: { type: Number, min: 0}
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'PowerUsers' collection in the MongoDB database
module.exports = mongoDbClient.model('User', userSchema);
