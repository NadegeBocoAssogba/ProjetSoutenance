import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import RatingStars from "../../components/RatingStars";

const ProductsCards = ({ products }) => {
  const handleAddToCart = (product) => {
    console.log("Produit ajouté au panier:", product);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
        >
          <Link
            to={`./shop/${product.id}`}
            className="w-full h-full flex flex-col items-center"
          >
            <div className="relative ">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-h-96 md:h-64 object-cover rounded-t-lg hover:scale-105 transition-all duration-300"
              />
              <div className="hover:block top-3 right-3 absolute">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="p-1.5 text-white bg-[#e85e95] hover:bg-rose transition duration-300 "
                  title="Ajouter au panier"
                >
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-4 text-center p-4">
              <h4 className="text-lg font-semibold mt-2">{product.name}</h4>
              <p className="text-gray-600 mt-1">{product.description}</p>
              <p className="text-xl font-bold text-pink-600 mt-2">
                {product.price} FCFA{" "}
                {product?.oldPrice ? <s>{product?.oldPrice} FCFA </s> : null}
              </p>
              <RatingStars rating={product.rating} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsCards;
