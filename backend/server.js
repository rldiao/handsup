// ───  Settings  ─────────────────────────────────────────────────────────────────
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const configureRoutes = require("./routes");

require("dotenv").config();

// CORS configuration
const CORS_WHITELIST = require("./constants/frontend");

const corsOptions = {
  origin: (origin, callback) => {
    // TODO: Remove this
    console.log(origin);
    return CORS_WHITELIST.indexOf(origin) !== -1
      ? callback(null, true)
      : callback(new Error("Not allowed by CORS"));
  }
};

app.use(cors());

// Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

// APP CONFIG
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    secret: "mysecretsshhh",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  })
);

// ───   ROUTES   ─────────────────────────────────────────────────────────────────
// const donorRouter = require("./routes/donors.routes");
const doneeRouter = require("./routes/donee.routes");
const donationRouter = require("./routes/donation.routes");
const userRoute = require("./routes/user.routes");
const postRoute = require("./routes/post.routes");

app.use("/donee", doneeRouter);
app.use("/donation", donationRouter);
app.use("/user", userRoute);
app.use("/post", postRoute);

require("./database");
require("./config/passport");

// Stripe
configureRoutes(app);

app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

// Static file declaration
app.use(express.static(path.join(__dirname, "..", "/client/build")));

// Production mode NOTE: pretty sure i dont need this
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "/client/build")));
  //
  app.get("*", (req, res) => {
    res.sendfile(path.join((__dirname, "..", "client/build/index.html")));
  });
}

// Build mode
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/client/public/index.html"));
});

// ─── RUN SERVER ─────────────────────────────────────────────────────────────────

const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
