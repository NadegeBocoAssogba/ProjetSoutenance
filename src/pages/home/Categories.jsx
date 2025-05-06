import React from "react";
import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";
import image1 from "../../assets/CategorieBijoux.jpg";
import image2 from "../../assets/CategorieSac.jpg";
import image3 from "../../assets/CategorieVetements.jpg";
import image4 from "../../assets/CategorieChaussures.jpg";
import image5 from "../../assets/CategorieAccessoires.jpg";
import image7 from "../../assets/CategorieAutres.jpg";

const Categories = () => {
  const categories = [
    { name: "Bijoux", path: "bijoux", image: image1 },
    { name: "Sacs", path: "sacs", image: image2 },
    { name: "Vêtements", path: "vetements", image: image3 },
    { name: "Chaussures", path: "chaussures", image: image4 },
    { name: "Accessoires", path: "accessoires", image: image5 },
    { name: "Autres", path: "autres", image: image7 },
  ];
  return (
    <div className="flex flex-wrap md:flex-row justify-center items-center gap-6 py-10 px-6 md:px-12 lg:px-24 bg-gray-100 ">
      {categories.map((category) => (
        <Link
          to={`/categories/${category.path}`}
          key={category.name}
          className="flex flex-col items-center justify-center bg-[#F1E3F9] shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300 ease-in-out gap-2 "
        >
          <div className="flex items-center justify-center overflow-hidden group rounded-full ">
            <img
              src={category.image}
              alt={category.name}
              className="rounded-full size-24 transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <h4 className="text-center">{category.name}</h4>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
