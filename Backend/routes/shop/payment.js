const express = require("express");
const router = express.Router();
const fedapay = require("../../helpers/fedapay");

router.post("/pay", async (req, res) => {
  const { name, email, phone, amount } = req.body;

  try {
    const response = await fedapay.post("/transactions", {
      amount,
      description: "Paiement commande",
      currency: { iso: "XOF" },
      mode: "redirect", // ← IMPORTANT pour obtenir redirect_url
      customer: {
        firstname: name,
        email,
        phone_number: {
          number: phone,
          country: "BJ",
        },
      },
      callback_url: "https://example.com/success",
      cancel_url: "https://example.com/success",
    });

    const redirectUrl = response.data?.data?.redirect_url;
    if (redirectUrl) {
      return res.json({ success: true, redirect_url: redirectUrl });
    } else {
      return res
        .status(500)
        .json({ success: false, message: "Erreur FedaPay" });
    }
  } catch (err) {
    console.error("Erreur FedaPay :", err.response?.data || err.message || err);
    res.status(500).json({
      success: false,
      message: err.response?.data?.message || "Erreur serveur FedaPay",
    });
  }
});

module.exports = router;
