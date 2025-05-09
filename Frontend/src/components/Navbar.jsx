import { useEffect, useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/MonLogo.png";
import { useSelector } from "react-redux";
import PagePanier from "../pages/shop/PagePanier";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const products = useSelector((state) => state.cart.products) || [];
  const selectedItems = useSelector((state) => state.cart.selectedItems);

  const [isCartOpen, setIsCartOpen] = useState(false);
  // const handleCartToggle = () => {
  //   setIsCartOpen(isCartOpen);
  // };
  const handleCartToggle = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  return (
    <header>
      <nav
        className={`fixed top-0 text-slate left-0 w-full z-50 transition-all duration-300 ${
          scrollY ? "bg-ivory-100 shadow-lg backdrop-blur" : "bg-ivory-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold text-rose whitespace-nowrap">
              Holy Beads
            </span>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden lg:flex flex-wrap space-x-6 items-center">
            <Link to="/accueil" className="hover:text-rose">
              Accueil
            </Link>
            <Link to="/apropos" className="hover:text-rose">
              À propos
            </Link>
            <Link to="/boutique" className="hover:text-rose">
              Boutique
            </Link>
            <Link to="/formations" className="hover:text-rose">
              Formations
            </Link>
            <Link to="/blog" className="hover:text-rose">
              Blog
            </Link>
          </div>

          {/* Division des icones */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Barre de recherche */}
            {/* <input
            type="text"
            placeholder="Rechercher..."
            className="border rounded px-2 py-1 text-sm ml-2 border-slate/20 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition duration-200 ease-in-out"
          /> */}
            <Link to="/rechercher" className="hover:text-rose">
              {/* Icône de recherche */}
              <Search />
            </Link>

            {/* Icône panier */}
            <div className="relative">
              <button onClick={handleCartToggle}>
                <ShoppingCart className="ml-2 hover:text-rose cursor-pointer" />
                {/* Badge (ex: 0 article dans le panier) */}
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full px-1.5 ">
                  {products.length}
                </span>
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full px-1.5">
                  {selectedItems}
                </span>
              </button>
            </div>

            {/* Boutons */}
            <Link
              to="/connexion"
              className="text-sm px-3 py-1 border rounded hover:bg-pink-100 transition duration-200 ease-in-out"
            >
              Se connecter
            </Link>
            <Link
              to="/inscription"
              className="text-sm px-3 py-1 bg-pink-600 text-white rounded hover:bg-pink-700"
            >
              S’inscrire
            </Link>
          </div>

          {/* Menu mobile */}
          <div className="lg:hidden text-rose ">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu dropdown */}
        {isOpen && (
          <div className="lg:hidden mt-3 px-4 space-y-3 bg-ivory pb-4 shadow-md">
            {["Accueil", "À propos", "Boutique", "Blog", "Contact"].map(
              (item, i) => (
                <Link
                  key={i}
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="block hover:text-pink-600 transition duration-200 ease-in-out hover:bg-rose/10 px-3 py-2 rounded"
                  onClick={() => setIsOpen(false)} // Ferme le menu après la sélection
                >
                  {item}
                </Link>
              )
            )}

            <input
              type="text"
              placeholder="Rechercher..."
              className="text-sm w-full px-3 py-1 rounded border border-slate/20 focus:outline-none focus:ring-2 focus:ring-gold"
            />

            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={handleCartToggle}
                className="flex items-center gap-1 hover:text-pink-600 transition duration-200 ease-in-out hover:bg-rose/10 px-3 py-2 rounded"
              >
                <span className="relative">
                  <ShoppingCart className="ml-2 hover:text-rose cursor-pointer" />
                  <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full px-1.5">
                    {products.length}
                  </span>
                  <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full px-1.5">
                    {selectedItems}
                  </span>
                </span>
                Panier
              </button>
              <Link
                to="/connexion"
                className="hover:text-pink-600 transition duration-200 ease-in-out hover:bg-rose/10 px-3 py-2 rounded"
              >
                Se connecter
              </Link>
              <Link
                to="/inscription"
                className="hover:text-pink-600 transition duration-200 ease-in-out hover:bg-rose/10 px-3 py-2 rounded text-pink-600 font-semibold"
              >
                S’inscrire
              </Link>
            </div>
          </div>
        )}
      </nav>
      {isCartOpen && (
        <PagePanier
          products={products}
          isOpen={isCartOpen}
          onClose={handleCartToggle}
        />
      )}
    </header>
  );
}
