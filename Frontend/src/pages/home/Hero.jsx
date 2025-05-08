import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/Heroooo.JPG";

const Hero = () => {
  return (
    <section className=" bg-pearl-50 mt-28 md:mt-0 pb-6 md:pt-24 md:pb-20 px-6 gap-5 md:px-12 lg:px-24 flex flex-col md:flex-row justify-center items-center md:h-1/2 h-screen lg:h-screen">
      <div className=" lg:w-1/2 flex flex-col justify-center items-center text-center md:items-start md:text-left h-full gap-4">
        <h1 className="text-4xl font-bold text-rose">
          Bienvenue chez Holy Beads !
        </h1>
        <p className="text-lg text-slate-900 mt-2">
          Découvrez l'univers éclatant de la création en perles. Bijoux, sacs,
          vêtements, chaussures… chaque pièce est façonnée avec passion pour
          sublimer votre style et mettre en lumière le savoir-faire artisanal.
        </p>
        <Link
          to="/boutique"
          className="mt-4 inline-block bg-rose text-white py-2 px-4 rounded"
        >
          Explorer la boutique
        </Link>
      </div>
      <div className=" lg:w-1/2 h-80 md:h-full flex justify-center items-center">
        <img src={heroImage} alt="" className="h-full w-full object-contain" />
      </div>
    </section>
  );
};

export default Hero;
