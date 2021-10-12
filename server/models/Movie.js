const { Schema, model } = require('mongoose');

const hookQuestionSchema = require('./HookQuestion')

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
    hookQuestions: [hookQuestionSchema],
});

const Movie = model('Movie', MovieSchema);

module.exports = Movie;