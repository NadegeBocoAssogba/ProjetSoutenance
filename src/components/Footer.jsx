import React from "react";
import {
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Phone,
  Youtube,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#3D0C11] text-[#F3E6E3] px-6 py-12">
      <div className="max-w-7xl mx-auto grid text-center md:text-left grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold mb-3">NOS COORDONNEES</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-center items-center md:justify-start gap-2">
              <MapPin className="size-4" />
              Abomey-Calavi, Bénin
            </li>
            <a
              href="mailto:support@holybeads.com"
              className="flex gap-2 justify-center items-center md:justify-start hover:text-[#eca7be] transition-all duration-300"
            >
              <Mail className="size-4" />
              support@holybeads.com
            </a>
            <li className="flex gap-2 justify-center items-center md:justify-start">
              <Phone className="size-4" />
              +229 0161386445
            </li>
            <li className="flex gap-2 justify-center items-center md:justify-start">
              <Instagram />
              <Facebook />
              <Youtube />
              <Twitter />
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold mb-3">ENTREPRISES</h4>
          <div className="space-y-2 text-sm flex flex-col">
            <a href="/">Accueil</a>
            <a href="/">A propos</a>
            <a href="/">Collaborations</a>
            <a href="/">Notre blog</a>
            <a href="">Terms et conditions</a>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold mb-3">LIENS UTILES</h4>
          <div className="space-y-2 text-sm flex flex-col">
            <a href="/">Aide</a>
            <a href="/">Suivre ma commande</a>
            <a href="/">Foire à questions</a>
            <a href="/"></a>
            <a href=""></a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-[#F3E6E3] mt-12 border-t border-[#F3E6E3]/20 pt-6">
        © 2025 Holy Beads. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
