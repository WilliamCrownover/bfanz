const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Auth {
        token: String
        success: Boolean
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

        getMovieById(id: ID): Movie
    }

    type Mutation {
        signup(username: String, password: String): Auth
        login(username: String, password: String): Auth
    }
`
module.exports = typeDefs;