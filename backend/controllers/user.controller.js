var User = require('../models/user.model.js');
const jwt = require('jsonwebtoken');
const secret = process.env.TOKEN_STR


/* TODO
 * Validate that email is unique
 * Validate that password is strong
 */

exports.createUser = (req, res) => {
    var new_user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    
    new_user.password = new_user.generateHash(new_user.password);
    // .save() stores the model into db
    new_user.save()
    .then(data => {
        res.send({
            message: "Successfully created new user"
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "ERROR: Sign up error!"
        });
    });
}

exports.loginUser = (req, res) => {
    // Is this encrypting before sending???
    User.findOne({email: req.body.email}, function(err, user) {
        if (!user.validPassword(req.body.password)) {
            //password did not match
            res.send({
                message: "FAIL",
            });
        } else {
            // password matched. proceed forward
            const email = user.email
            const payload = { email }
            const token = jwt.sign(payload, secret, {
                expiresIn: '1h'
            });
                res.cookie('token', token, { httpOnly: true })
                .sendStatus(200);
        }
    })
}