const { Schema, model } = require('mongoose');

const hookQuestionSchema = require('./HookQuestion')

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    year: {
        type: String,
        trim: true,
    },
    genre: {
        type: String,
        trim: true,
    },
    director: {
        type: String,
        trim: true,
    },
    writer: {
        type: String,
        trim: true,
    },
    actors: {
        type: String,
        trim: true,
    },
    poster: {
        type: String,
        trim: true,
    },
    indbID: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    seenItCount: {
        type: Number,
        required: true,
        default: 0,
    },
    notSeenItCount: {
        type: Number,
        required: true,
        default: 0,
    },
    lovedItCount: {
        type: Number,
        required: true,
        default: 0,
    },
    hatedItCount: {
        type: Number,
        required: true,
        default: 0,
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    hookQuestions: [hookQuestionSchema],
});

const Movie = model('Movie', MovieSchema);

module.exports = Movie;