import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useParams } from "react-router-dom";
import productsData from "../../../data/products.json";
import RatingStars from "../../../components/RatingStars";

const SingleProduct = () => {
  const { id } = useParams();
  return (
    <>
      <section className="max-w-7xl md:h-64 mx-auto flex flex-col items-center justify-center mt-20 py-10 px-6 md:px-12 lg:px-24 bg-except">
        <h2 className=" text-4xl font-extrabold text-center capitalize mb-5 text-[#5a3e36]">
          Produit Unique
        </h2>
        <div className="flex items-center justify-center space-x-2 text-slate-900 text-sm mb-5">
          <span className="hover:text-rose">
            <Link to="/accueil">home</Link>
          </span>
          <ChevronRight className="size-4" />
          <span className="hover:text-rose">
            <Link to="/boutique">boutique</Link>
          </span>
          <ChevronRight className="size-4" />
          <span className="hover:text-rose">product name</span>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center mt-8 py-10 px-6 md:px-12 lg:px-24">
        <div className="flex md:flex-row flex-col gap-5">
          <div className="md:w-1/2 w-full flex items-center justify-center overflow-hidden group rounded-lg ">
            <img
              src={productsData[id].image}
              alt={productsData[id].name}
              className="rounded-md w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-center md:w-1/2 w-full mt-5">
            <h3 className=" text-4xl font-extrabold text-center md:text-left capitalize mb-5 text-[#5a3e36]">
              {productsData[id].name}
            </h3>
            <p className="text-slate-700 max-w-xl text-center md:text-left mb-4">
              {productsData[id].description}
            </p>
            <p className="text-xl text-slate-900 max-w-xl text-center md:text-left mb-4">
              Prix : {productsData[id].price} FCFA
            </p>
            {/* additional information */}
            <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-4">
              <p>
                <strong>Catégorie: </strong>
                {productsData[id].category}
              </p>
              <div className="flex gap-2 mb-2">
                <strong>Notation: </strong>
                <RatingStars rating={productsData[id].rating} />
              </div>
              <p>
                <strong>Couleur:</strong> {productsData[id].color}
              </p>
            </div>
            <button className="hover:bg-pink-700 bg-pink-600 text-white px-4 py-3 rounded-md transition duration-300 ease-in-out md:w-1/3 w-full text-center">
              Ajouter au panier
            </button>
          </div>
        </div>
      </section>
      {/* Display reviews */}
      {/* A faire: modifier les reviews avec l'API */}
      <section className="flex flex-col justify-center mt-8 py-10 px-6 md:px-16 lg:px-32">
        <h2 className="text-xl font-bold">Commentaires</h2>
      </section>
    </>
  );
};

export default SingleProduct;
