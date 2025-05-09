import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Paiement() {
  const { products, totalPrice, tax, grandTotal } = useSelector(
    (state) => state.cart
  );
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    amount: 0,
  });

  const cart = useSelector((state) => state.cart);
  const userId = "123"; // Récupéré depuis l'utilisateur connecté
  const cartId = "abc"; // Idéalement généré/sauvegardé dans le backend
  const [addressInfo, setAddressInfo] = useState({
    addressId: "1",
    address: "",
    city: "",
    pincode: "",
    phone_number: "",
    notes: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setAddressInfo({ ...addressInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Paiement en cours...", formData);

    const payload = {
      user: formData,
      cart: { products, totalPrice, tax, grandTotal },
    };

    try {
      const res = await axios.post("http://localhost:500/api/orders", payload);
      alert("Commande envoyée !");
      console.log(res.data);
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
    }
  };

  const handlePayment = async () => {
    const orderPayload = {
      userId,
      cartItems: cart.products.map((item) => ({
        productId: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        quantity: item.quantity,
      })),
      addressInfo,
      orderStatus: "pending",
      paymentMethod: "",
      paymentStatus: "unpaid",
      totalAmount: cart.grandTotal,
      orderDate: new Date(),
      orderUpdateDate: new Date(),
      paymentId: "",
      payerId: "",
      cartId,
    };

    // try {
    //   const res = await axios.post(
    //     "http://localhost:500/api/orders/create",
    //     orderPayload
    //   );
    //   const { approvalURL } = res.data;
    //   // Redirection vers l'URL PayPal
    //   window.location.href = approvalURL;
    // } catch (err) {
    //   console.error("Erreur lors de la création de commande", err);
    // }

    try {
      const response = await axios.post(
        "http://localhost:500/api/payment/fedapay",
        formData
      );
      if (response.data.success) {
        window.location.href = response.data.url; // Redirection vers FedaPay
      } else {
        alert("Erreur de paiement");
      }
    } catch (error) {
      console.error("Erreur lors de la création de commande", error);
      alert("Erreur serveur");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Paiement</h2>

      {/* Liste des produits */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Vos articles :</h3>
        {Array.isArray(products) &&
          (products.length === 0 ? (
            <div>Votre panier est vide.</div>
          ) : (
            <ul className="space-y-2">
              {products.map((item, index) => (
                <li key={index} className="border-b pb-2">
                  {item.name} x {item.quantity} — {item.price * item.quantity}{" "}
                  CFA
                </li>
              ))}
            </ul>
          ))}
      </div>

      {/* Résumé */}
      <div className="mb-6">
        <p>Sous-total : {totalPrice.toFixed(0)} FCFA</p>
        <p>Taxe (5%) : {tax.toFixed(0)} FCFA</p>
        <p className="font-bold">
          Total à payer : {grandTotal.toFixed(0)} FCFA
        </p>
      </div>

      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nom"
          placeholder="Nom complet"
          value={formData.nom}
          onChange={handleChange}
          required
          className="border p-2 w-full rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Adresse email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-2 w-full rounded"
        />
        <textarea
          name="adresse"
          placeholder="Adresse de livraison"
          value={formData.adresse}
          onChange={handleChange}
          required
          className="border p-2 w-full rounded"
        ></textarea>

        <button
          type="submit"
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
        >
          Valider la commande
        </button>
        {/* <button
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
          onClick={handlePayment}
        >
          Payer avec PayPal
        </button> */}
      </form>
    </div>
  );
}
