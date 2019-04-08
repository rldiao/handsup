const mongoose = require("mongoose");
const receiverSchema = mongoose.schema({
    "name": String,
    "account-number": Number,
    "age": Number
}
);

mongoose.model("receivers", receiverSchema);
