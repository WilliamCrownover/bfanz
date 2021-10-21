import { gql } from '@apollo/client'

export const ADD_USER = gql`
    mutation CreateNewUser($username: String, $password: String) {
        signup(username: $username, password: $password) {
            token
            success
            message
        }
    }
`
export const LOGIN = gql`
    mutation Login($username: String, $password: String) {
        login(username: $username, password: $password) {
            token
            success
            message
        }
    }
`
export const UPDATE_SEENIT = gql`
    mutation UpdateSeenItCountMutation($id: ID, $count: Int) {
        updateSeenItCount(id: $id, count: $count) {
            seenItCount
            _id
        }
    }
`
export const ADD_SEEN_MOVIE = gql`
    mutation AddSeenMovieToUser($movieId: ID) {
        addSeenMovieToUser(movieId: $movieId) {
            _id
            username
            moviesSeen
        }
    }
`
export const REMOVE_SEEN_MOVIE = gql`
    mutation RemoveSeenMovieToUser($movieId: ID) {
        removeSeenMovieToUser(movieId: $movieId) {
            _id
            username
            moviesSeen
        }
    }
`