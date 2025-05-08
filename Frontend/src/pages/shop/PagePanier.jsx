import React from "react";
import { X } from "lucide-react";
import { useSelector } from "react-redux";
import OrderSummary from "./OrderSummary";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
} from "../../redux/features/cart/cartSlice";

const PagePanier = ({ products, isOpen, onClose }) => {
  const selectedItems = useSelector((state) => state.cart.selectedItems);

  const dispatch = useDispatch();
  const handleQuantity = (type, id) => {
    const payload = { type, id };
    dispatch(updateQuantity(payload));
  };
  const handleRemove = (e, id) => {
    e.preventDefault();
    dispatch(removeFromCart({ id }));
  };

  return (
    <div
      className={`fixed z-[1000] inset-0 bg-black bg-opacity-80 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ transition: "opacity 300ms" }}
    >
      <div
        className={`fixed right-0 top-0 md:w-1/3 w-full bg-white h-full overflow-y-auto transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } `}
        style={{
          transition: "transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ",
        }}
      >
        <div className="p-4 mt-4">
          <div className="flex justify-between items-center mb-4">
            {/* <h4 className="text-xl font-semibold">Votre panier</h4> */}
            <h4 className="text-xl font-semibold">
              Votre panier ({selectedItems} article
              {selectedItems > 1 ? "s" : ""})
            </h4>
            <button
              onClick={() => onClose()}
              className="text-gray-600 hover:text-gray-900"
            >
              <X className="bg-black p-1 text-white" />
            </button>
          </div>

          {/* Panier details */}
          <div>
            {Array.isArray(products) &&
              (products.length === 0 ? (
                <div>Votre panier est vide.</div>
              ) : (
                products.map((item, index) => (
                  <div
                    key={item.id || index}
                    className="flex flex-col md:flex-row md:items-center md:justify-between shadow-md md:p-5 p-2 mb-4"
                  >
                    <div className="flex items-center">
                      <span className="mr-4 px-2 bg-rose text-white rounded-full">
                        {index + 1}
                      </span>
                      <img
                        src={item.image}
                        alt=""
                        className="size-12 object-cover mr-4"
                      />
                      <div className="">
                        <h5 className="font-medium text-lg">{item.name}</h5>
                        <p>{Number(item.price)} FCFA </p>
                        {/* <p className="text-sm text-gray-600">
                          Quantité : {item.quantity} x {item.price} €
                        </p> */}
                      </div>
                      <div className="flex flex-row md:justify-start justify-end items-center mt-2">
                        <button
                          onClick={() => handleQuantity("decrement", item.id)}
                          className="size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-rose hover:text-white ml-8"
                        >
                          -
                        </button>
                        <span className="px-2 text-center mx-1">
                          {item.quantity}{" "}
                        </span>
                        <button
                          onClick={() => handleQuantity("increment", item.id)}
                          className="size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-rose hover:text-white"
                        >
                          +
                        </button>
                        <div>
                          <button
                            onClick={(e) => handleRemove(e, item.id)}
                            className="text-red-500 hover:text-red-800 ml-4"
                          >
                            Retirer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ))}
          </div>
          {/* Calculs */}

          {products.length > 0 && <OrderSummary />}
        </div>
      </div>
    </div>
  );
};

export default PagePanier;
