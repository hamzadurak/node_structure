const user = require('../models/user')
const jwt = require('jsonwebtoken')

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const auth = async (req, res) => {
    res.json({
        title: 'Express',
    });
}

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const login = async (req, res) => {
    const {email, password} = req.body
    user.findOne({email, password}, (err, user) => {
        if (err) {
            res.json({
                status: false,
                message: 'Hata Oluştu.'
            });
        }

        if (!user) {
            res.json({
                status: false,
                message: 'Böyle bir kullanıcı bulunamadı.'
            });
        } else {

            let {_id} = user
            const payload = {email, _id};

            const token = jwt.sign(payload, req.app.get('api_secret_key'), {
                expiresIn: '12h'
            });

            res.json({
                status: true,
                token: token
            });
        }
    });
}

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const register = async (req, res) => {

    const promise = (new user(req.body)).save()

    promise
        .then(() => {
            res.json({
                status: true
            });
        })
        .catch((err) => {
            res.json({
                status: false,
                message: err,
            });
        });
}

/**
 * @type {{auth: ((function(*, *): Promise<void>)|*), login: ((function(*, *): Promise<void>)|*), register: ((function(*, *): Promise<void>)|*)}}
 */
module.exports = {
    auth,
    login,
    register
};