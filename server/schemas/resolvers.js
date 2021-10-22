const { AuthenticationError } = require("apollo-server-errors");
const { User, Movie } = require("../models")
const {signToken} = require("../utils/auth");
const { fetchMovie } = require("../utils/helpers");

const resolvers = {

    Query: {
        me: async (parent, args, context) => {

            if (context.user) {
                return User.findById(context.user._id);
            }

            throw new AuthenticationError('You need to be logged in first.')
        },

        getMovies: async () => {
            return await Movie.find().sort({dateAdded:-1});
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
        },

        getRandomMovies: async (parent, {numberOfMovies}) => {
            
            try {
                return Movie.aggregate().sample(numberOfMovies).exec()
            } catch (err) {
                console.error(err)
            }
        },

        getOmdbMovie: async (parent, {searchString}) => {

            try {
                return fetchMovie(searchString)
            } catch (err) {
                console.error(err)
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

                if (errors.username) {
                    return {token: '', success: false, message: errors.username.message}
                }

                if (errors.password) {
                    return {token: '', success: false, message: errors.password.message}
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
        },

        updateSeenItCount: async (parent, { id, count }) => {
            return Movie.findOneAndUpdate( {_id: id}, {$inc: {'seenItCount': count}}, { new: true });
        },

        addSeenMovieToUser: async (parent, {movieId}, context ) => {
            if(context.user) {
                return User.findOneAndUpdate( 
                    { _id: context.user._id },
                    { $addToSet: { moviesSeen: movieId }},
                    { new: true }
                )
            }
        },

        removeSeenMovieToUser: async (parent, {movieId}, context ) => {
            if(context.user) {
                return User.findOneAndUpdate( 
                    { _id: context.user._id },
                    { $pull: { moviesSeen: movieId }},
                    { new: true }
                )
            }
        },

        addMoreHookQuestions: async (parent, {questionText, movieId}, context) => {
            if(context.user) {
                return Movie.findOneAndUpdate( 
                    { _id: movieId },
                    { $addToSet: { hookQuestions: 
                        {
                            questionText: questionText,
                            movieId: movieId,
                            userId: context.user._id
                        } 
                    }},
                    { new: true }
                )
            }
        },

        findOrCreateMovie: async function (parent, args, context) {
            
            try {
                
                const movie = await Movie.findOne({title: args.title});

                if (movie) {
                    return movie
                } else {
                    const movieData = {
                        ...args,
                        hookQuestions: [{questionText: args.questionText, userId: context.user._id}]
                    }
                    return Movie.create(movieData)
                }

            } catch (err) {
                console.error(err)
            }
        },

        deleteMovie: async (parent, {movieId}, context ) => {
            if(context.user) {
                return Movie.findOneAndDelete({ _id: movieId })
            }
        }
    }
}

module.exports = resolvers