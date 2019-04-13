// Schema for our donations collection

const mongoose = require('mongoose');

const donationsSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    donor: {
        type: String,
        required: true
    },
    receiver: {
        type: String,
        required: true
    },
    'transaction-date': {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

mongoose.model('donations', donationsSchema);
