const { Schema } = require('mongoose');

const hookQuestionSchema = new Schema({
    questionText: {
        type: String,
        required: true,
        trim: true,
        validate: [({ length }) => length <= 120, "Your hook question should be no more than 120 characters long."],
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

module.exports = hookQuestionSchema;