const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const jwtsecret =
  "d843869bca66ae4a3b9281be3dc22423ef4c6711e36064005d55f8762c95a0f29aab823c295a3157b46ddb4d114cd37981d4246a9f5e783ccccd6dfd3593e6da";

const protectUser = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Récupérer le token depuis l'en-tête Authorization
      token = req.headers.authorization.split(" ")[1];

      // Vérifier le token
      const decoded = jwt.verify(token, jwtsecret); //process.env.JWT_SECRET

      // Récupérer l'utilisateur à partir du token décodé
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error("Erreur d'authentification :", error);
      res.status(401).json({ message: "Non autorisé, token invalide." });
    }
  } else {
    res.status(401).json({ message: "Non autorisé, pas de token." });
  }
};

module.exports = { protectUser };
