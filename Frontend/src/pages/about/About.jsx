import React from "react";
import image from "../../assets/ImagePropos.jpg";

const About = () => {
  return (
    <>
      <section className=" max-w-7xl md:h-64 mx-auto flex flex-col items-center justify-center mt-20 mb-8 py-10 px-6 md:px-12 lg:px-24 bg-except">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          À propos de nous
        </h1>
        <p className="text-lg text-gray-700">
          Bienvenue dans notre univers de création artisanale en perles ! 🌸
        </p>
      </section>

      <section className="grid md:grid-cols-2 max-w-7xl mx-auto px-10 items-center">
        <div className="flex justify-center items-center mb-4">
          <img
            src={image}
            alt="Artisanat en perles"
            className="rounded-2xl shadow-lg size-2/3"
          />
        </div>
        <div className="text-center md:text-left space-y-6">
          <p className="md:text-lg">
            Nous sommes une entreprise passionnée par la valorisation du
            savoir-faire local à travers des créations uniques réalisées à la
            main. Chaque pièce que nous proposons — qu’il s’agisse de bijoux,
            sacs, vêtements ou chaussures — est conçue avec soin et amour.
          </p>
          <p className="md:text-lg">
            Nos articles en perles allient tradition et modernité, pour mettre
            en lumière le talent des femmes artisanes ivoiriennes. En soutenant
            notre marque, vous contribuez à une économie plus juste et
            inclusive.
          </p>
          <p className="md:text-lg">
            Nous croyons en une mode éthique, durable, et créative. C’est
            pourquoi nous nous engageons à offrir des produits de qualité,
            originaux et faits avec passion.
          </p>
        </div>
      </section>

      <div className="mt-20 max-w-4xl mx-auto text-center py-3 mb-5">
        <h2 className="text-3xl font-semibold mb-4">Notre mission</h2>
        <p className="text-gray-700">
          Mettre en valeur l’artisanat perlé africain en créant une plateforme
          moderne, accessible et inspirante, qui célèbre l'identité, l’élégance
          et l’innovation.
        </p>
      </div>
      <div className="mt-20 max-w-4xl mx-auto text-center py-3 mb-5">
        <h2 className="text-3xl font-semibold mb-4">Notre équipe</h2>
        <p className="text-gray-700">
          Nous travaillons avec des artisans et artisanes dévoués et passionnés
          par leur métier.
        </p>
      </div>
    </>
  );
};

export default About;
