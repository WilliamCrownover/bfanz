const { Schema, model } = require('mongoose');

const HookQuestionSchema = new Schema({
    questionText: {
        type: String,
        required: true,
        trim: true,
        validate: [({ length }) => length <= 120, "Your hook question should be no more than 120 characters long."],
    },
    movieId: {
        type: Movie,
    },
    userId: {
        type: User,
    },
});

const HookQuestion = model('HookQuestion', HookQuestionSchema);

module.exports = HookQuestion;