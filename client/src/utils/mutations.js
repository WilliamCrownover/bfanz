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
export const ADD_ANOTHER_HOOKQUESTION = gql`
    mutation AddMoreHookQuestions( $questionText: String, $movieId: ID ) {
        addMoreHookQuestions( questionText: $questionText, movieId: $movieId ) {
            _id
            questionText
        }
    }
`
export const ADD_MOVIE = gql`
    mutation createMovie($title: String!, $year: String, $genre: String, $director: String, $writer: String, $actors: String, $poster: String, $imdbID: String, $description: String, $questionText: String) {
        findOrCreateMovie(title: $title, year: $year, genre: $genre, director: $director, writer: $writer, actors: $actors, poster: $poster, imdbID: $imdbID, description: $description, questionText: $questionText) {
            _id
            title
            year
            genre
            director
            writer
            actors
            description
            poster
            imdbID
            hookQuestions {
                questionText
                userId
            }
        }
    }
`
export const DELETE_MOVIE = gql`
    mutation DeleteMovie($movieId: ID) {
        deleteMovie(movieId: $movieId) {
            _id
            title
        }
    }
`