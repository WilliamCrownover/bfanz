const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Auth {
        token: String
        success: Boolean
        message: String
    }

    type User {
        _id: ID
        username: String!
        moviesAdded: [ID]
        moviesSeen: [ID]
    }

    input HookQuestion {
        questionText: String 
        userId: ID 
    }

    type Movie {
        _id: ID
        title: String!
        year: String
        genre: String
        director: String
        writer: String
        actors: String
        description: String
        poster: String
        imdbID: String
        seenItCount: Int
        notSeenItCount: Int 
        lovedItCount: Int 
        hatedItCount: Int
        hookQuestions: [HookQuestion]
    }

    type OmdbResponse {
        title: String!
        year: String
        genre: String
        director: String
        writer: String
        actors: String
        description: String
        poster: String
        imdbID: String
        response: String
    }

    type HookQuestion {
        _id: ID 
        questionText: String 
        userId: ID
    }

    type Query {

        me: User

        getMovies: [Movie]

        getMovieById(id: ID): Movie

        getMovieByTitle(title: String): Movie

        getRandomMovies(numberOfMovies: Int): [Movie]

        getOmdbMovie(searchString: String): OmdbResponse
    }

    type Mutation {

        signup(username: String, password: String): Auth
        login(username: String, password: String): Auth
        
        updateSeenItCount(id: ID, count: Int): Movie
        addSeenMovieToUser( movieId: ID): User
        removeSeenMovieToUser( movieId: ID): User

        addMoreHookQuestions( questionText: String, movieId: ID ): HookQuestion

        findOrCreateMovie(title: String!, year: String, genre: String, director: String, writer: String, actors: String, poster: String, indbID: String, description: String): Movie
    }
`
module.exports = typeDefs;