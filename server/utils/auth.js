const jwt = require('jsonwebtoken');

const expiration = '12h';

module.exports = {
    signToken: function ( {username, _id} ) {

        const payload = {username, _id};

        return jwt.sign( {data: payload}, process.env.JWT_SECRET, {expiresIn: expiration} );
    }
}