const jwt = require('jsonwebtoken');

const expiration = '12h';

module.exports = {
    signToken: function ( {username, _id} ) {

        const payload = {username, _id};

        return jwt.sign( {data: payload}, process.env.JWT_SECRET, {expiresIn: expiration} );
    },

    getContext: function ( {req} ) {

        let token = req.body.token || req.query.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, process.env.JWT_SECRET, { maxAge: expiration });
            req.user = data;
        } catch (err) {
            console.error(err)
        }

        return req;
    }
}