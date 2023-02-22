const express = require('express');
const router = express.Router();

const {
    get,
    insert,
    getById,
    update
} = require('../controllers/category');

router.get('/get', get);

router.post('/insert', insert);

router.get('/getById/:id', getById);

router.put('/update/:id', update);

module.exports = router;