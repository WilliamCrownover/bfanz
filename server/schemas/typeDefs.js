const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Auth {
        token: String
        success: Boolean
    }

    type User {
        username: String
    }

    type Query {
        me: User
    }

    type Mutation {
        signup(username: String, password: String): Auth
        login(username: String, password: String): Auth
    }
`

module.exports = typeDefs;