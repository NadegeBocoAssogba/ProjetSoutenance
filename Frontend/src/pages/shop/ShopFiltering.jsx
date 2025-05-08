import React from "react";
import { useState } from "react";

const ShopFiltering = ({
  filters,
  filtersState,
  setFiltersState,
  clearFilters,
}) => {
  return (
    <div className="space-y-5 flex justify-center items-start flex-col flex-shrink-0">
      <h3>Filtres</h3>
      {/* Catégories */}
      <div className="flex flex-col gap-2 space-y-2">
        <h4 className="font-medium text-lg">Catégorie</h4>
        <hr />
        {filters.categories.map((category) => (
          <label
            key={category}
            className="capitalize cursor-pointer flex gap-2"
          >
            <input
              type="radio"
              name="catégorie"
              id={category}
              value={category}
              checked={filtersState.category === category}
              onChange={(e) =>
                setFiltersState({ ...filtersState, category: e.target.value })
              }
            />
            <span>{category}</span>
          </label>
        ))}
      </div>
      {/* Couleurs */}
      <div className="flex flex-col gap-2 space-y-2">
        <h4 className="font-medium text-lg">Couleur</h4>
        <hr />
        {filters.colors.map((color) => (
          <label key={color} className="capitalize cursor-pointer flex gap-2">
            <input
              type="radio"
              name="couleur"
              id={color}
              value={color}
              checked={filtersState.color === color}
              onChange={(e) =>
                setFiltersState({ ...filtersState, color: e.target.value })
              }
            />
            <span>{color}</span>
          </label>
        ))}
      </div>
      {/* Prix */}
      <div className="flex flex-col gap-2 space-y-2">
        <h4 className="font-medium text-lg">Prix</h4>
        <hr />
        {filters.prices.map((price) => (
          <label
            key={price.label}
            className="capitalize cursor-pointer flex gap-2"
          >
            <input
              type="radio"
              name="prix"
              id={price}
              value={`${price.min}-${price.max}`}
              checked={filtersState.price === `${price.min}-${price.max}`}
              onChange={(e) =>
                setFiltersState({ ...filtersState, price: e.target.value })
              }
            />
            <span>{price.label}</span>
          </label>
        ))}
      </div>
      {/* Supprimer le filtre */}
        <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200 ease-in-out"
            onClick={clearFilters}
        >
            Supprimer tous les filtres
        </button>
    </div>
  );
};

export default ShopFiltering;
