import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import productsData from "../../data/products.json";
import ProductsCards from "../shop/ProductsCards";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleSearch = (event) => {
    const query = searchQuery.toLowerCase();
    const filtered = productsData.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };
  return (
    <>
      <section className="flex flex-col items-center justify-center mt-20 py-10 px-6 md:px-12 lg:px-24 bg-except">
        <h2 className=" text-4xl font-extrabold text-center mb-5 text-[#5a3e36]">
          Page de recherche
        </h2>
        <p className="text-lg text-slate-900 max-w-lg text-center mb-10">
          Trouvez le produit parfait pour vous.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center py-5 px-6 md:px-12 lg:px-24">
        <div className="w-full p-6 flex gap-4 items-center justify-center mb-12">
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={handleSearch}
            className="border border-gray-400 rounded p-2 w-full max-w-4xl"
          />
          {/* <button
            onClick={handleSearch}
            className="bg-rose py-2 px-4 text-white rounded"
          >
            Rechercher
          </button> */}
        </div>
        <div className="pb-16">
          {filteredProducts.length === 0 && (
            <p className="text-lg text-slate-900 max-w-lg text-center mb-12">
              Aucun produit trouvé.
            </p>
          )}
          <ProductsCards products={filteredProducts} />
        </div>
      </section>
    </>
  );
};

export default Search;
