const express = require('express');
const router = express.Router();

const {
    login,
    auth,
    register,
} = require('../controllers/auth');

router.get('/', auth);

router.post('/login', login);

router.post('/register', register);

module.exports = router;