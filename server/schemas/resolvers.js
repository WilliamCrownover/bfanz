const { User } = require("../models")
const {signToken} = require("../utils/auth")

const resolvers = {

    Query: {
        me: async () => {
            return User.find({})
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

        }
    }
}

module.exports = resolvers