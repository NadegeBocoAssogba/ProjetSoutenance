import React from "react";
import blogData from "../../data/blog.json";

const Blog = () => {
  return (
    <section className="bg-[#f8fafc] pt-8 pb-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-5 my-8 text-[#5a3e36]">
          Les derniers articles du blog
        </h2>
        <p className="text-lg  text-slate-900 max-w-3xl text-center mb-12">
          Restez inspiré et informé grâce à notre blog. Découvrez des astuces de
          style, des coulisses de fabrication et les dernières nouveautés du
          monde des accessoires en perles. Que vous soyez à la recherche de
          conseils de mode, d'idées de cadeaux ou d'histoires inspirantes, notre
          blog est votre source d'inspiration incontournable.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
};

export default Blog;
