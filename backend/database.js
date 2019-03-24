// Singlton Database class

let MongoClient = require('mongoose');
const uri = require('./config/keys').mongoURI

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        MongoClient.Promise = global.Promise;

        MongoClient
        .connect(uri, {useNewUrlParser: true})
        .then(() => {
            console.log('MongoDB Connected');
        })
        .catch(err => {
            console.log(err);
            console.log('\x1b[31m\x1b[1m MongoDB Not Connected');
        });
    }
}

module.exports = new Database()