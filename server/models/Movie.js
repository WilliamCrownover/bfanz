const { Schema, model } = require('mongoose');

const MovieSchema = new Schema({
    name: {
        type: String
    }
});

const Movie = model('Movie', MovieSchema);

module.exports = Movie;