const configureStripe = require("stripe");

const STRIPE_SECRET_KEY = "sk_test_dkDteTiGP2eCPzFaDGOscD4600ThzQP5v7";

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
