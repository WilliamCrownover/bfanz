const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Dummy {
        _id: ID!
        name: String!
    }

    type Query {
        starter: [Dummy]
    }
`

module.exports = typeDefs;