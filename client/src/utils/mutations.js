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