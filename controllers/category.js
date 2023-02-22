const category = require('../models/category')

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const get = async (req, res) => {
    const promise = category.find({})
    promise
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({
                status: false,
                message: err,
            });
        });
}

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const insert = async (req, res) => {
    const categories = new category(req.body)

    const promise = categories.save()
    promise
        .then(() => {
            res.json({
                status: true,
                categories
            })
        })
        .catch((err) => {
            res.json({
                status: false,
                message: err,
            });
        });
}

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const update = async (req, res) => {
    const promise = category.findByIdAndUpdate(req.params.id, req.body);

    promise
        .then((category) => {
            if (!category)
                next({
                    status: false,
                    message: 'Kullanıcı bulunamadı.',
                    code: 100,
                });
            else
                res.json(category);
        })
        .catch((err) => {
            res.json({
                status: false,
                message: err,
            });
        });
}

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getById = async (req, res) => {
    const promise = category.findById(req.params.id);

    promise
        .then((category) => {
            if (!category)
                next({
                    status: false,
                    message: 'Kullanıcı bulunamadı.',
                    code: 100
                });
            else
                res.json(category);
        })
        .catch((err) => {
            res.json({
                status: false,
                message: err,
            });
        });
}

/**
 * @type {{getById: ((function(*, *): Promise<void>)|*), get: ((function(*, *): Promise<void>)|*), insert: ((function(*, *): Promise<void>)|*), update: ((function(*, *): Promise<void>)|*)}}
 */
module.exports = {
    get,
    insert,
    update,
    getById
}