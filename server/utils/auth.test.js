require('dotenv').config();
const {signToken} = require('./auth');
const jwt = require('jsonwebtoken');

describe('Sign Token Function', () => {

    test('it should return a string.', () => {
        
        const input = {username: "Fred", _id: "21"};

        expect(signToken(input)).toMatch(/(.+\.)(.+\.).+/gm);
    });

    test('it should throw an error if username is not provided', () => {

        const input = {_id: "21"};

        expect( () => {signToken(input)} ).toThrow(Error);
    });

    test('it should throw an error if _id is not provided', () => {

        const input = {username: "Fred"};

        expect( () => {signToken(input)} ).toThrow(Error);
    })

    test('it should verify correctly using jwt.verify', () => {

        const input = {username: "Fred", _id: "21"};
        const expiration = '12h'

        const token = signToken(input);

        const { data } = jwt.verify(token, process.env.JWT_SECRET, { maxAge: expiration });

        expect(data).toEqual(input);
    })
});