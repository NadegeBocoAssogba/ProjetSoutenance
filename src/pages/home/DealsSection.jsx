import React from "react";
import dealsImg from "../../assets/Deals.jpg";

const DealsSection = () => {
  return (
    <section className="bg-gray-100 grid grid-cols-1 lg:h-[400px] lg:w-[80%] lg:flex flex-col lg:flex-row lg:justify-center lg:items-center lg:gap-8 lg:px-10 lg:mx-auto m-10 rounded-lg shadow-lg">
      <div className=" lg:w-1/2 rounded-lg h-full p-8 flex justify-center items-center">
        <img
          src={dealsImg}
          alt=""
          className="w-[90%] h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex items-center lg:justify-center lg:items-start flex-col xl:w-1/2 h-full p-4">
        <h5 className="text-red-400 mb-2">Obtenez jusqu'à 20% de réduction</h5>
        <h2 className="text-3xl font-bold text-[#5a3e36] mb-5">
          Offres spéciales du mois
        </h2>
        <p className="text-base text-slate-950 max-w-lg mb-12 text-center lg:text-left">
          Profitez de nos offres exclusives du mois pour réaliser vos styles de
          rêves sans vous ruiner. Découvrez une collection soignée de bijoux, de
          vêtements, d'accessoires et de chaussures raffinés, soigneusement
          confectionnés pour vous démarquer.
        </p>
        <div className="flex gap-4 h-fit flex-wrap justify-center items-center">
          <div className="grid size-20 place-content-center text-center rounded-full bg-[#e85e95] text-white p-4 hover:bg-rose transition duration-300 shadow-md">
            <h4 className="text-xl font-bold mb-0">14</h4>
            <p className="font-medium mb-0">Jours</p>
          </div>
          <div className="grid size-20 place-content-center text-center rounded-full bg-[#e85e95] text-white p-4 hover:bg-rose transition duration-300 shadow-md">
            <h4 className="text-xl font-bold mb-0">20</h4>
            <p className="font-medium mb-0">Heures</p>
          </div>
          <div className="grid size-20 place-content-center text-center rounded-full bg-[#e85e95] text-white p-4 hover:bg-rose transition duration-300 shadow-md">
            <h4 className="text-xl font-bold mb-0">14</h4>
            <p className="font-medium mb-0">Mins</p>
          </div>
          <div className="grid size-20 place-content-center text-center rounded-full bg-[#e85e95] text-white p-4 hover:bg-rose transition duration-300 shadow-md">
            <h4 className="text-xl font-bold mb-0">10</h4>
            <p className="font-medium mb-0">Secs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
