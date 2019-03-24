// ───  Settings  ─────────────────────────────────────────────────────────────────
const database = require('./database');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// ───  Database  ─────────────────────────────────────────────────────────────────

// wut is this syntax??
require('./routes/note.routes')(app);
require('./routes/user.routes')(app);

// ───   ROUTES   ─────────────────────────────────────────────────────────────────

// Hello
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// ─── RUN SERVER ─────────────────────────────────────────────────────────────────

const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));