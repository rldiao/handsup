//Set up express
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database setup
require("./models/db.js");

// ───   ROUTES   ─────────────────────────────────────────────────────────────────
const donorRouter = require("./routes/donors");
const receiverRouter = require("./routes/receivers");
const donationRouter = require("./routes/donations");

app.use("/donors", donorRouter);
app.use("/receivers", receiverRouter);
app.use("/donations", donationRouter);

app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

// //Static file declaration
// app.use(express.static(path.join(__dirname, '../client/build')));

// //production mode
// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
//   //
//   app.get('*', (req, res) => {
//     res.sendfile(path.join(__dirname = 'client/build/index.html'));
//   })
// }
// //build mode
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/public/index.html'));
// })


// ─── RUN SERVER ─────────────────────────────────────────────────────────────────

const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
