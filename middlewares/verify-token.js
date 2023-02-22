const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];

        jwt.verify(bearerToken, req.app.get('api_secret_key'), (err, decoded) => {
            if (err) {
                res.json({
                    status: false,
                    message: 'Token başarısız.'
                });
            } else {
                req.decode = decoded;
                next();
            }
        })
    } else {
        res.json({
            status: false,
            message: 'Token bulunamadı.'
        })
    }
}