const { AuthenticationError } = require("apollo-server-errors");
const { User } = require("../models")
const {signToken} = require("../utils/auth")

const resolvers = {

    Query: {
        me: async (parent, args, context) => {

            if (context.user) {
                return User.findById(context.user._id)
            }

            throw new AuthenticationError('You need to be logged in first.')
        }
    },

    Mutation: {
        signup: async (parent, {username, password}) => {

            try {
                const newUser = await User.create( {username, password} );
                const token = signToken(newUser);

                return {token, success: true};
            } catch (err) {
                console.error(err)
            }

            return {token: '', success: false};

        },

        login: async (parent, {username, password}) => {
            
            const user = await User.findOne( {username} );

            if (!user) {
                throw new AuthenticationError('Username or password is incorrect.');
            }

            const isCorrectPassword = await user.isCorrectPassword(password);

            if (!isCorrectPassword) {
                throw new AuthenticationError('Username or password is incorrect.');
            }

            const token = signToken(user);

            return {token, success: true}
        }
    }
}

module.exports = resolvers