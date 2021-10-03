const Movie = require("../models/Movie")

const resolvers = {
    Query: {
        starter: async () => {
            return Movie.find({})
        }
    }
}

module.exports = resolvers