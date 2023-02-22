require('dotenv').config();
require('./helpers/db-connect')();

const express = require('express');

const authRouter = require('./routes/auth');
const categoryRouter = require('./routes/category');

const app = express();

const cors = require('cors');
app.use(cors());

const config = require('./config');
app.set('api_secret_key', config.api_secret_key);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const verifyToken = require('./middlewares/verify-token');

app.use('/', authRouter);
app.use('/api', verifyToken)
app.use('/api/category', categoryRouter);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('server is up and listening || ', port);
});

module.exports = app;