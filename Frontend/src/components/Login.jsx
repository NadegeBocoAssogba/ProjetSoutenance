import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    
  };
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="max-w-sm border shadow bg-except mx-auto p-8 rounded">
        <h2 className="text-2xl font-semibold pt-5">Veuillez vous connecter</h2>
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
            onClick={handleLogin}
            type="submit"
            className="w-full mt-5 text-white transition-all duration-300 hover:bg-pink-700 bg-pink-600 font-medium py-3 rounded-md"
          >
            Se connecter
          </button>
        </form>
        <p className="my-5 italic text-sm text-center">
          Vous n'avez pas de compte ?{" "}
          <Link
            className="hover:text-pink-700 text-pink-600 underline transition-all duration-300"
            to="/inscription"
          >
            Créez-en un
          </Link>
          {" "}ici.
        </p>
      </div>
    </section>
  );
};

export default Login;
