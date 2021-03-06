import { gql } from '@apollo/client'

export const GET_ME = gql`
    query getMe {
        me {
            _id
            username
            moviesSeen
            admin
        }
    }
`
export const GET_MOVIES = gql`
    query getMovies {
        getMovies {
            _id
            title
            poster
            seenItCount
            hookQuestions {
                questionText
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
                _id
                questionText
            }
        }
    }
`

export const GET_MOVIE_BY_TITLE = gql`
    query getMovieByTitle($title: String!) {
        getMovieByTitle(title: $title) {
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
                _id
                questionText
            }
        }
    }
`

export const GET_HOOK_QUESTIONS = gql`
    query getHookQuestions {
        getMovies {
            _id
            hookQuestions {
                questionText
            }
        }
    }
`
export const GET_RANDOM_HOOK_QUESTIONS = gql`
    query getRandomHookQuestions($numberOfMovies: Int) {
        getRandomMovies(numberOfMovies: $numberOfMovies) {
            _id
            hookQuestions {
                questionText
            }
        }
    }
`

export const GET_OMDB_MOVIES = gql`
    query getOmdbMovie($searchString: String) {
        getOmdbMovie(searchString: $searchString) {
            imdbID
            title
            year
            genre
            director
            writer
            actors
            description
            response
            poster
        }
    }
`