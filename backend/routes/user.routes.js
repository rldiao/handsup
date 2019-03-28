module.exports = (app) => {
    const users = require('../controllers/user.controller.js');
    const auth = require('../middleware/auth.js');

    // Create a new user
    app.post('/signup', users.createUser)

    // Sign in existing user
    app.post('/login', users.loginUser)

    // Check Current User
    // app.get('/current', auth, users.currentUser);

    app.get('/logout', users.logoutUser)
}