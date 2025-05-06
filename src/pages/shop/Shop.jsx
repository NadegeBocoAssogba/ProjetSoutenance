import React, { useEffect } from "react";
import { useState } from "react";
import productsData from "../../data/products.json";
import ProductsCards from "./ProductsCards";
import ShopFiltering from "./ShopFiltering";

const filters = {
  categories: [
    "Toutes",
    "bijoux",
    "sacs",
    "vetements",
    "chaussures",
    "accessoires",
    "autres",
  ],
  colors: [
    "Toutes",
    "rose",
    "argent",
    "or",
    "rouge",
    "bleu",
    "vert",
    "jaune",
    "noir",
    "blanc",
  ],
  prices: [
    { label: "Moins de 1000 FCFA", min: 0, max: 1000 },
    { label: "1000 FCFA - 5000 FCFA", min: 1000, max: 5000 },
    { label: "5000 FCFA - 10000 FCFA", min: 5000, max: 10000 },
    { label: "10000 FCFA - 20000 FCFA", min: 10000, max: 20000 },
    { label: "20000 FCFA - 50000 FCFA", min: 20000, max: 50000 },
    { label: "Plus de 50000 FCFA", min: 50000, max: Infinity },
  ],
};

const Shop = () => {
  const [products, setProducts] = useState(productsData);
  const [filtersState, setFiltersState] = useState({
    category: "Toutes",
    color: "Toutes",
    price: "",
  });

  //Fonction pour filtrer les produits en fonction des filtres sélectionnés
  const applyFilters = () => {
    let filteredProducts = productsData;

    // Filtrer par catégorie
    if (filtersState.category && filtersState.category !== "Toutes") {
      filteredProducts = filteredProducts.filter(
        (product) =>
          filtersState.category === "" ||
          product.category === filtersState.category
      );
    }

    // Filtrer par couleur
    if (filtersState.color && filtersState.color !== "Toutes") {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === filtersState.color
      );
    }

    // Filtrer par prix
    if (filtersState.price) {
      //   const selectedPriceRange = filters.price.find(
      //     (range) => range.label === filtersState.price
      //   );
      //   if (selectedPriceRange) {
      //     filteredProducts = filteredProducts.filter(
      //       (product) =>
      //         product.price >= selectedPriceRange.min &&
      //         product.price <= selectedPriceRange.max
      //     );
      //   }

      const [min, max] = filtersState.price.split("-").map(Number);
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= min && product.price <= max
      );
    }

    setProducts(filteredProducts);
  };

  useEffect(() => {
    applyFilters(); // Appliquer les filtres lors du chargement du composant
  }, [filtersState]);

  //Supprimer le filtre de la page
  const clearFilters = () => {
    setProducts(productsData); // Réinitialiser les produits à la liste complète
    setFiltersState({
      category: "Toutes",
      color: "Toutes",
      price: "",
    }); // Réinitialiser les filtres
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center mt-20 py-10 px-6 md:px-12 lg:px-24 bg-except">
        <h2 className=" text-4xl font-extrabold text-center capitalize mb-5 text-[#5a3e36]">
          Boutique
        </h2>
        <p className="text-lg text-slate-900 max-w-xl text-center mb-10">
          Découvrez notre collection de bijoux en perles faits main, alliant
          élégance et authenticité. Chaque pièce raconte une histoire unique,
          conçue avec soin pour sublimer votre style. Explorez notre boutique et
          trouvez le bijou qui vous correspond.
        </p>
      </section>
      <section className="flex items-center  justify-center px-6 md:px-12 lg:px-24 py-10">
        <div className="flex flex-col md:flex-row w-full max-w-7xl gap-8 md:gap-12">
          {/* Left side */}
          <div className="">
            <ShopFiltering
              filters={filters}
              filtersState={filtersState}
              setFiltersState={setFiltersState}
              clearFilters={clearFilters}
            />
          </div>

          {/* Right side */}
          <div className="flex flex-col w-full">
            <h3 className="text-xl font-medium mb-5">
              Produits disponibles : {products.length}{" "}
            </h3>
            <ProductsCards products={products} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
