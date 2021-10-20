import { gql } from '@apollo/client'

export const GET_ME = gql`
    query getMe {
        me {
            username
        }
    }
`

export const GET_MOVIES = gql`
    query getMovies {
        getMovies {
            _id
            title
            description
            seenItCount
            notSeenItCount
            lovedItCount
            hatedItCount
            hookQuestions {
                _id
                questionText
                movieId
                userId
            }
        }
    }
`

export const GET_MOVIE_BY_ID = gql`
    query getMovieByID($id: ID!) {
        getMovieById(id: $id) {
            _id
            title
            seenItCount
            notSeenItCount
            lovedItCount
            hatedItCount
            description
            year
            director
            writer
            actors
            poster
            hookQuestions {
                questionText
            }
        }
    }
`

//GET_HOOKQUESTIONS