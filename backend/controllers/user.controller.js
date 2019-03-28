const passport = require('passport');
const Users = require('../models/user.model');


/* TODO
 * Validate that email is unique
 * Validate that password is strong
 */

exports.createUser = (req, res) => {
    // Doesn't save user yet
    const { body: { user } } = req;
    if(!user.email) {
        return res.status(422).json({
        errors: {
            email: 'is required',
        },
        });
    }

    if(!user.password) {
        return res.status(422).json({
        errors: {
            password: 'is required',
        },
        });
    }
    
    const newUser = new Users(user);

    newUser.setPassword(user.password);

    // .save() stores the model into db
    newUser.save()
    .then(() => res.json({ user: newUser.toAuthJSON() }))
    .catch((err) => {
        console.log(err);
        res.send({error: "email registered"})
    });
};

exports.loginUser = (req, res, next) => {
    const { body: { user } } = req;

    if(!user.email) {
        return res.status(422).json({
        errors: {
            email: 'is required',
        },
        });
    }

    if(!user.password) {
        return res.status(422).json({
        errors: {
            password: 'is required',
        },
        });
    }

    return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
        if(err) {
            return next(err);
        }
        if(passportUser) {
            const user = passportUser;
            user.token = passportUser.generateToken();
            return res.status(200)
            // .cookie('token', user.token, {httpOnly: true, secure: true});
            .json({ user: user.toAuthJSON() }); // DELETE this later for security
        }
        return res.send(400);
    })(req, res, next);
}

exports.currentUser = (req, res, next) => {
    const { payload: { id } } = req;
    
    return Users.findById(id)
      .then((user) => {
        if(!user) {
          return res.sendStatus(400);
        }
  
        return res.json({ user: user.toAuthJSON() });
    });
}

exports.logoutUser = (req, res) => {
    req.logout();
    req.session.destroy((err) => {
        if (!err) {
            return res.status(200).clearCookie('connect.sid', {path: '/'}).json({status: "Success"});
        } else {
            // handle error case...
            return res.sendStatus(401);
        }
    })
}