const mongoose = require('mongoose')

module.exports = () => {
    mongoose
        .connect(
            'mongodb://localhost:27017/node_js_db',
            {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
        .then();

    mongoose.connection.on('open', () => {
        console.log('MongoDb Connected');
    })

    mongoose.connection.on('error', (err) => {
        console.log('MongoDb Error', err);
    })

    mongoose.Promise = global.Promise;
}