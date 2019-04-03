module.exports = (app) => {
    const users = require('../controllers/user.controller.js');
    const auth = require('../middleware/auth.js');

    app.post('/signup', users.createUser)

    app.post('/login', users.loginUser)

    app.get('/logout', users.logoutUser)
}