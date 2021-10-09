const { Schema, model } = require('mongoose');

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    seenItCount: {
        type: int,
        required: true,
    },
    notSeenItCount: {
        type: int,
        required: true,
    },
    lovedItCount: {
        type: int,
        required: true,
    },
    hatedItCount: {
        type: int,
        required: true,
    },
    hookQuestions: {
        type: [HookQuestion],
    },
});

const Movie = model('Movie', MovieSchema);

module.exports = Movie;