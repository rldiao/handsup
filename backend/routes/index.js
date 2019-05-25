const paymentApi = require("./stripe.routes");

const configureRoutes = app => {
  paymentApi(app);
};

module.exports = configureRoutes;
