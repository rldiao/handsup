// ───  Settings  ─────────────────────────────────────────────────────────────────
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');

require('dotenv').config();

const auth = require('./middleware/auth.js');

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

// APP CONFIG
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser());
app.use(session({ secret: process.env.TOKEN_STR , 
    cookie: { maxAge: 60000 }, 
    resave: false, 
    saveUninitialized: true,
    cookie: { secure: true }
}))


// ───  Database  ─────────────────────────────────────────────────────────────────

require('./database');
require('./models/user.model');
require('./config/passport');

require('./routes/user.routes')(app);


// ───   ROUTES   ─────────────────────────────────────────────────────────────────

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/api/secret', auth, function(req, res) {
    res.send('The password is potato');
});

app.get('/checkToken', auth, function(req, res) {
    res.sendStatus(200);
});

// ─── RUN SERVER ─────────────────────────────────────────────────────────────────

const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));