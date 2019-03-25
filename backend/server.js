// ───  Settings  ─────────────────────────────────────────────────────────────────
const database = require('./database');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();

const withAuth = require('./middleware/cookie')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser());

// ───  Database  ─────────────────────────────────────────────────────────────────

// wut is this syntax??
require('./routes/note.routes')(app);
require('./routes/user.routes')(app);

// ───   ROUTES   ─────────────────────────────────────────────────────────────────

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/api/secret', withAuth, function(req, res) {
    res.send('The password is potato');
});

app.get('/checkToken', withAuth, function(req, res) {
    res.sendStatus(200);
});

// ─── RUN SERVER ─────────────────────────────────────────────────────────────────

const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));