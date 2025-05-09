import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Trash2 } from "lucide-react";
import { CreditCard } from "lucide-react";
import { clearCart } from "../../redux/features/cart/cartSlice";

const OrderSummary = () => {
  const dispatch = useDispatch();
  //   const products = useState((store) => store.cart.products);
  const selected = useSelector((state) => state.cart.selectedItems);
  const { selectedItems, totalPrice, tax, taxRate, grandTotal } = useSelector(
    (state) => state.cart
  );

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="bg-except mt-5 rounded text-base pb-[2px] ">
      <div className="px-6 space-y-5 py-4">
        <h2 className="text-xl text-slate-950 ">Résumé de votre commande</h2>
        <p className="mt-2 text-slate-900">
          Produits sélectionnés: {selectedItems}{" "}
        </p>
        <p>Prix total: {totalPrice} FCFA </p>
        <p>
          Tax: ({taxRate * 100}%) : {tax} FCFA{" "}
        </p>
        <h3 className="font-bold">Total : {grandTotal} FCFA</h3>
      </div>
      <div className="px-4 mb-6">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClearCart();
          }}
          className="bg-red-500 px-3 py-1.5 text-white mt-2 rounded-md flex justify-between items-center mb-4"
        >
          Vider le panier <Trash2 className="ml-2" />
        </button>
        <button className="bg-green-600 px-3 py-1.5 text-white mt-2 rounded-md">
          <a className="flex justify-between items-center" href="/paiement">
            Passer au paiement <CreditCard className="ml-2" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
