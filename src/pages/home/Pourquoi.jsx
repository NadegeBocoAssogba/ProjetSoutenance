import React from "react";
import { TruckElectric, HandHeart, Globe, Gem } from "lucide-react";

const Pourquoi = () => {
  return (
    <section className="py-16 max-w-6xl mx-auto px-6 text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <HandHeart className="w-10 h-10 text-pink-500" />,
            title: "Fait main avec amour",
            text: "Chaque création est confectionnée à la main avec soin et passion.",
          },
          {
            icon: <Globe className="w-10 h-10 text-pink-500" />,
            title: "Produits 100% locaux",
            text: "Nous valorisons le savoir-faire des femmes artisanes du Bénin.",
          },
          {
            icon: <TruckElectric className="w-10 h-10 text-pink-500" />,
            title: "Livraison rapide et soignée",
            text: "Expédition sécurisée, au Bénin comme à l’international.",
          },
          {
            icon: <Gem className="w-10 h-10 text-pink-500" />,
            title: "Design unique & raffiné",
            text: "Des modèles originaux qui subliment votre style.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className=" text-center flex flex-col items-center justify-center p-6"
          >
            <div className="text-4xl">{item.icon}</div>
            <h3 className="text-xl font-semibold text-darkbrown mt-4 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-darkbrown">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pourquoi;
