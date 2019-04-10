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

app.use("/donors", donorRouter);
app.use("/receivers", receiverRouter);

app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

// ─── RUN SERVER ─────────────────────────────────────────────────────────────────

const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
