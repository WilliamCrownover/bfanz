require('dotenv').config();
const {signToken} = require('./auth');

describe('Sign Token Function', () => {

    test('it should return a string.', () => {
        
        const input = {username: "Fred", _id: "21"};

        expect(signToken(input)).toMatch(/([a-zA-z0-9]+\.)([a-zA-z0-9]+\.).+/gm)
    });
});