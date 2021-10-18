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

//GET_HOOKQUESTIONS