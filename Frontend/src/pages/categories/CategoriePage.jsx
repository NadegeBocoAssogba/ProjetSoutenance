import React, { use } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import products from "../../data/products.json";
import ProductsCards from "../shop/ProductsCards";

const CategoriePage = () => {
  const { categoryName } = useParams(); // Utilisez useParams pour obtenir le nom de la catégorie depuis l'URL
  const [filteredProducts, setFilteredProducts] = useState([]); // État pour stocker les produits filtrés
  const [loading, setLoading] = useState(true); // État pour gérer le chargement des données

  useEffect(() => {
    const filtred = products.filter(
      (product) => product.category === categoryName.toLowerCase()
    );
    setFilteredProducts(filtred);
  }, [categoryName]);

  useEffect(() => {
    window.scrollTo(0, 0); // Remontez en haut de la page lorsque le composant est monté
  });
  return (
    <>
      <section className="flex flex-col items-center justify-center mt-16 py-10 px-6 md:px-12 lg:px-24 bg-except">
        <h2 className=" text-4xl font-extrabold text-center capitalize mb-5 text-[#5a3e36]">
          {categoryName}
        </h2>
        <p className="text-lg text-slate-900 max-w-lg text-center mb-12">
          Parcourez une gamme variée de catégories, des bijoux élégants aux
          accessoires polyvalents. Sublimez votre style dès aujourd'hui.
        </p>
      </section>
      <div className="m-auto py-20 px-6 md:px-12 lg:px-24">
        <ProductsCards products={filteredProducts} />
      </div>
    </>
  );
};

export default CategoriePage;
