const mongoose = require("mongoose");
const Receiver = mongoose.model("receivers");

const getReceivers = function (req, res) {
    Receiver.find((err, receiver) => {
        if (err) {
            res.sendStatus(500);
        }
        else {
            res.send(receiver);
        }
    });
};

const getOneReceiver = function (req, res) {
    Receiver.findOne(
        {id: req.params.id},
        (err, receiver) => {
            if (err) {
                res.sendStatus(500);
            }
            else {
                res.send(receiver);
            }
        });
};

const addOneReceiver = function (req, res) {
    const newReceiver = new Receiver(req.body);

    newReceiver.save ((err, newReceiver) => {
        if (err) {
            res.sendStatus(500);
        }
        else {
            res.send(newReceiver);
        }
    });
};

const updateOneReceiver = function (req, res) {
    Receiver.findOneAndUpdate(
        {id: req.params.id},
        req.body,
        {new: true},
        (err, receiver) => {
            if (err) {
                res.sendStatus(500);
            }
            else {
                res.send(receiver);
            }
        }
    );
};

const deleteOneReceiver = function (req, res) {
    Receiver.findOneAndDelete(
        {id: req.params.id},
        (err, receiver) => {
            if (err) {
                res.sendStatus(500);
            }
            else {
                res.send(receiver);
            }
        }
    )
};

module.exports = {
    getReceivers,
    getOneReceiver,
    addOneReceiver,
    updateOneReceiver,
    deleteOneReceiver
};