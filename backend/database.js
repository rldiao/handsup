const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://rdiao:pxLGcqIPVD6EaamL@cluster0-o0xzy.mongodb.net/test?retryWrites=true";
MongoClient.connect(uri, function(err, client) {
    if(err) {
         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
    }
    console.log('Connected...');
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
 });
