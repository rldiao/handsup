module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    // Create a new user
    app.post('/signup', users.createUser)

    // Sign in existing user
    app.post('/login', users.loginUser)
}