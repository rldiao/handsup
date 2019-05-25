const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "http://myapidomain.com" // TODO: change to calm cove
    : "http://localhost:5000/";

export default PAYMENT_SERVER_URL;
