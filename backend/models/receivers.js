const mongoose = require('mongoose');
const receiverSchema = mongoose.Schema({
    'id': String,
    'name': String,
    'account-number': String,
    'age': String
}
);

mongoose.model('receivers', receiverSchema);
