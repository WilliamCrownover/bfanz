const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'You need to provide a Username.'],
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'You need to provide a Password.'],
        minlength: [6, 'Password must be at least 6 characters'],
    },
    moviesAdded: [{
        type: Schema.Types.ObjectId,
        ref: 'Movie',
    }],
    moviesSeen: [{
        type: Schema.Types.ObjectId,
        ref: 'Movie',
    }],
    admin: {
        type: Boolean,
        default: false
    }
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;