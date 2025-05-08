import React from "react";
import blogData from "../../data/blog.json"; // Ton fichier JSON contenant les articles
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
const BlogPage = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto flex flex-col items-center justify-center mt-20 mb-8 py-10 px-6 md:px-12 lg:px-24 bg-except md:h-64">
        <h2 className=" text-4xl font-extrabold text-center mb-5 text-[#5a3e36]">
          Notre blog
        </h2>
        <p className="text-lg text-slate-900 max-w-lg text-center mb-10">
          Plongez dans l'univers de la mode perlée, nos inspirations, nos
          conseils et les histoires derrière chaque création.
        </p>
      </section>
      <section className="flex items-center justify-center">
        <div className="grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:max-w-7xl lg:max-w-7xl my-10 mx-16">
          {blogData.map((article) => (
            <div
              key={article.id}
              className="bg-pearl rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer transform hover:scale-105"
            >
              <img
                src={article.image}
                alt={article.titre}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <p className="text-sm text-gray-500">{article.date}</p>
                <h3 className="text-xl font-semibold text-darkbrown mt-2 mb-2">
                  {article.titre}
                </h3>
                <p className="text-sm text-darkbrown">{article.extrait}</p>
                <button className="mt-4 inline-block text-pink-500 hover:underline">
                  Lire plus →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
