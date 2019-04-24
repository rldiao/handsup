const mongoose = require("mongoose");

// Copy from CONNECT (MongoDB Atlas)
const dbURI =
  "mongodb+srv://admin:qwe123@cluster0-fn3va.mongodb.net/handsUpDB?retryWrites=true";

const options = {
  useNewUrlParser: true,
  dbName: "handsUpDB"
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// require('./donors');
require("./donees");
require("./donations");

// DB=mongodb+srv://admin:qwe123@cluster0-fn3va.mongodb.net/handsUpDB?retryWrites=true npm start
