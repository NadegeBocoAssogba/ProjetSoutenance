import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    const data = {
      username,
      email,
      password,
    };
  };
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="max-w-sm border shadow bg-except mx-auto p-8 rounded">
        <h2 className="text-2xl font-semibold pt-5">Veuillez vous inscrire</h2>
        <form className="space-y-5 max-w-sm mx-auto pt-8 ">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            id="email"
            placeholder="Votre adresse mail"
            required
            className="w-full bg-gray-100 focus:outline-none px-5 py-3 rounded"
          />
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            id="username"
            placeholder="Votre nom d'utilisateur"
            required
            className="w-full bg-gray-100 focus:outline-none px-5 py-3 rounded"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Votre mot de passe"
            required
            className="w-full bg-gray-100 focus:outline-none px-5 py-3 rounded"
          />
          {message && <p className="text-red-500">message</p>}
          <button
            onClick={handleRegister}
            type="submit"
            className="w-full mt-5 transition-all duration-300 text-white hover:bg-pink-700 bg-pink-600 font-medium py-3 rounded-md"
          >
            S'inscrire
          </button>
        </form>
        <p className="my-5 italic text-sm text-center">
          Vous avez déjà un compte ?{" "}
          <Link
            className="hover:text-pink-700 text-pink-600 underline transition-all duration-300"
            to="/connexion"
          >
            Connectez-vous
          </Link>{" "}
          ici.
        </p>
      </div>
    </section>
  );
};

export default Register;
