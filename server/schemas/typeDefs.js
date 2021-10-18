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

    type Movie {
        _id: ID
        title: String!
        description: String
        seenItCount: Int
        notSeenItCount: Int 
        lovedItCount: Int 
        hatedItCount: Int
        hookQuestions: [HookQuestion]
    }

    type HookQuestion {
        _id: ID 
        questionText: String 
        movieId: ID 
        userId: ID
    }

    type Query {

        me: User

        getAllMovies: [Movie]

        getMovieById(id: ID): Movie

        getMovieByTitle(title: String): Movie
    }

    type Mutation {
        signup(username: String, password: String): Auth
        login(username: String, password: String): Auth
    }
`
module.exports = typeDefs;