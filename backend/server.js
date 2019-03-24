// ───  Settings  ─────────────────────────────────────────────────────────────────

const express = require('express');
const MongoClient = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const uri = require('./config/keys').mongoURI

MongoClient.Promise = global.Promise;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

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

// Require Notes routes - TEST
require('./routes/note.routes')(app);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

