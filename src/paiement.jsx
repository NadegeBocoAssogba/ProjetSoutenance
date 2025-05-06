import React from "react";
import { initiatePayment, checkPaymentStatus } from "moneroo-react-sdk";

function PaiementButton() {
    const handlePayment = async () => {
        try{
            await initiatePayment({
                amount: 1000,
                currency: "FCFA",
                description: "Achat de produit",
                email: "",
                firstName: "",
                lastName: "",
                // Optional parameters
                successUrl: "http://localhost:5173/success",
                cancelUrl: "http://localhost:5173/cancel",

            });
        }
        catch (error) {
            console.error("Erreur lors de l'initiation du paiement :", error);
        }
    }
    return (
        <button onClick={handlePayment}>
            Payer avec Monero
        </button>
    );
}
