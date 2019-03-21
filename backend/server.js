// ───  Settings  ─────────────────────────────────────────────────────────────────

const express = require('express');
const MongoClient = require('mongoose');
const app = express();
const uri = require('./config/keys').mongoURI

// TEST - START
var Schema = MongoClient.Schema;

var TestModelSchema = new Schema({
    name: String,
})

var TestModel = MongoClient.model('TestModel', TestModelSchema)
// TEST - END

// ───  Database  ─────────────────────────────────────────────────────────────────

MongoClient
  .connect(uri, {useNewUrlParser: true})
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => {
    console.log(err);
    console.log('\x1b[31m\x1b[1m MongoDB Not Connected');
});

// ───   ROUTES   ─────────────────────────────────────────────────────────────────

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// ─── RUN SERVER ─────────────────────────────────────────────────────────────────

const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

