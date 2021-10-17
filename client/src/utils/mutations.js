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
//   USERS
//CHANGE_PASSWORD
//EDIT_SEENIT
//EDIT_RATEIT

//    HOOKS
//ADD_HOOK
//EDIT_HOOK
//DELETE_HOOK

//    MOVIES
//ADD_MOVIE
//EDIT_MOVIE
//DELETE_MOVIE