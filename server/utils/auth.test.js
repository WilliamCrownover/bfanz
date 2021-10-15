require('dotenv').config();
const {signToken, getContext} = require('./auth');
const jwt = require('jsonwebtoken');

describe('signToken Function', () => {

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

describe('getContext Function', () => {

    test('it should return the req object.', ()=> {

        const input = { 
            res: {},
            req: {
                body: {},
                query: {},
                headers: {}
            }, 
            next: () => {} 
        };

        expect( getContext(input) ).toEqual(input.req)
    });

    test('it should add a user attribute with the jwt payload if valid token provided via authorization header.' , () => {

        const expiration = '12h'
        const payload = {username: "Fred"}
        const inputToken = jwt.sign( {data: payload}, process.env.JWT_SECRET, {expiresIn: expiration} )
        
        const input = { 
            res: {},
            req: {
                body: {},
                query: {},
                headers: {authorization: `Bearer ${inputToken}`}
            }, 
            next: () => {} 
        };

        expect( getContext(input) ).toHaveProperty('user', payload)
    });

    test('it should add a user attribute with the jwt payload if valid token provided via request body.' , () => {

        const expiration = '12h'
        const payload = {username: "Fred"}
        const inputToken = jwt.sign( {data: payload}, process.env.JWT_SECRET, {expiresIn: expiration} )
        
        const input = { 
            res: {},
            req: {
                body: {token: inputToken},
                query: {},
                headers: {}
            }, 
            next: () => {} 
        };

        expect( getContext(input) ).toHaveProperty('user', payload)
    });

    test('it should add a user attribute with the jwt payload if valid token provided via query attribute of the request.' , () => {

        const expiration = '12h'
        const payload = {username: "Fred"}
        const inputToken = jwt.sign( {data: payload}, process.env.JWT_SECRET, {expiresIn: expiration} )
        
        const input = { 
            res: {},
            req: {
                body: {},
                query: {token: inputToken},
                headers: {}
            }, 
            next: () => {} 
        };

        expect( getContext(input) ).toHaveProperty('user', payload)
    });
});