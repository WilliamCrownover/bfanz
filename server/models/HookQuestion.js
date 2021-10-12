const { Schema } = require('mongoose');

const hookQuestionSchema = new Schema({
    questionText: {
        type: String,
        required: true,
        trim: true,
        validate: [({ length }) => length <= 120, "Your hook question should be no more than 120 characters long."],
    },
    movieId: {
        type: Schema.Types.ObjectId,
        ref: 'Movie',
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});


module.exports = hookQuestionSchema;