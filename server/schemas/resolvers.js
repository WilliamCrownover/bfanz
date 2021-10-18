const { AuthenticationError } = require("apollo-server-errors");
const { User, Movie } = require("../models")
const {signToken} = require("../utils/auth")

const resolvers = {

    Query: {
        me: async (parent, args, context) => {

            if (context.user) {
                return User.findById(context.user._id);
            }

            throw new AuthenticationError('You need to be logged in first.')
        },

        getAllMovies: async () => {
            return await Movie.find().populate( 'hookQuestions' );
        },

        getMovieById: async (parent, {id}) => {

            try {
                return Movie.findById(id);
            } catch (err) {
                console.error(err)
            }
        },

        getMovieByTitle: async (parent, {title}) => {

            try {
                return Movie.findOne( {title} );
            } catch (err) {
                console.error(err);
            }
        }
    },

    Mutation: {
        signup: async (parent, {username, password}) => {

            try {
                const newUser = await User.create( {username, password} );
                const token = signToken(newUser);

                return {token, success: true, message:'Account Creation Successful'};
            } catch ( err ) {

                console.error(err)

                if (err.name === 'MongoError' && err.code === 11000) {
                    return {token: '', success: false, message: 'Sorry this username is already taken.'}
                }

                const { errors } = err;

                if (errors.password) {
                    return {token: '', success: false, message: errors.password.message}
                }

                if (errors.username) {
                    return {token: '', success: false, message: errors.username.message}
                }
            }

        },

        login: async (parent, {username, password}) => {
            
            try{
                const user = await User.findOne( {username} );

                if (!user) {
                    return {token: '', success: false, message:'Username or password is incorrect.'}
                }
    
                const isCorrectPassword = await user.isCorrectPassword(password);
    
                if (!isCorrectPassword) {
                    return {token: '', success: false, message:'Username or password is incorrect.'}
                }
    
                const token = signToken(user);
    
                return {token, success: true, message: 'Login successful'}

            } catch (err) {
                console.error(err)

                const { errors } = err;

                if (errors.password) {
                    return {token: '', success: false, message: errors.password.message}
                }

                if (errors.username) {
                    return {token: '', success: false, message: errors.username.message}
                }
            }

        }
    }
}

module.exports = resolvers