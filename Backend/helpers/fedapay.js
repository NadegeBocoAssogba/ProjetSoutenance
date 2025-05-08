const axios = require("axios");

const FEDAPAY_API_KEY = "sk_sandbox_uDjbTwsQby9_JmgoyXO71TSf";
const FEDAPAY_ENV = "sandbox";

const apiBaseUrl =
  FEDAPAY_ENV === "live"
    ? "https://api.fedapay.com/v1"
    : "https://sandbox-api.fedapay.com/v1";

const fedapayAxios = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    Authorization: `Bearer ${FEDAPAY_API_KEY}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

module.exports = fedapayAxios;
