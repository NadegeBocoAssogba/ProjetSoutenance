const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtsecret =
  "d843869bca66ae4a3b9281be3dc22423ef4c6711e36064005d55f8762c95a0f29aab823c295a3157b46ddb4d114cd37981d4246a9f5e783ccccd6dfd3593e6da";

// Générer un token JWT
const generateToken = (id) => {
  return jwt.sign({ id }, jwtsecret, {
    expiresIn: "30d",
  });
};
// Middleware pour vérifier le token

// Inscription d'un nouvel utilisateur
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }
  if (password.length < 6) {
    return res.status(400).json({
      message: "Le mot de passe doit contenir au moins 6 caractères.",
    });
  }
  console.log(req.body);
  // Vérifier si l'utilisateur existe déjà
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Cet utilisateur existe déjà." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "Utilisateur créé avec succès.",
      utilisateur: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
      token: generateToken(newUser._id),
    });
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur :", error);
    res.status(500).json({ message: "Erreur serveur." });
  }
};

// Connexion d'un utilisateur
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Mot de passe incorrect." });
    }

    res.status(200).json({
      message: "Connexion réussie.",
      utilisateur: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    res.status(500).json({ message: "Erreur serveur." });
  }
};
//Déconnexion d'un utilisateur
const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token").json({
      success: true,
      message: "Déconnexion réussie.",
    });
  } catch (error) {
    console.error("Erreur lors de la déconnexion :", error);
    res.status(500).json({ message: "Erreur serveur." });
  }
};

// Récupérer le profil utilisateur connecté
const getUserProfile = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ message: "Utilisateur non trouvé." });
    }

    res.status(200).json({
      message: "Profil utilisateur récupéré avec succès.",
      utilisateur: {
        id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });
  } catch (error) {
    console.error(
      "Erreur lors de la récupération du profil utilisateur :",
      error
    );
    res.status(500).json({ message: "Erreur serveur." });
  }
};

// Mettre à jour le profil utilisateur
const updateUserProfile = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ message: "Utilisateur non trouvé." });
    }

    user.username = username || user.username;
    user.email = email || user.email;
    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }

    await user.save();

    res.status(200).json({
      message: "Profil mis à jour avec succès.",
      utilisateur: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error);
    res.status(500).json({ message: "Erreur serveur." });
  }
};

// // Supprimer un utilisateur
// const deleteUser = async (req, res) => {
//   try {
//     const user = req.user; // Récupérer l'utilisateur à partir du middleware d'authentification
//     if (!user) {
//       return res.status(401).json({ message: "Utilisateur non trouvé." });
//     }
//     await user.remove();
//     res.status(200).json({ message: "Utilisateur supprimé avec succès." });
//   } catch (error) {
//     console.error("Erreur lors de la suppression de l'utilisateur :", error);
//     res.status(500).json({ message: "Erreur serveur." });
//   }
// };

// Récupérer tous les utilisateurs (pour l'administrateur)
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).json({
      message: "Liste des utilisateurs récupérée avec succès.",
      utilisateurs: users,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
    res.status(500).json({ message: "Erreur serveur." });
  }
};
// Récupérer un utilisateur par ID (pour l'administrateur)
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }
    res.status(200).json({
      message: "Utilisateur récupéré avec succès.",
      utilisateur: user,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération de l'utilisateur :", error);
    res.status(500).json({ message: "Erreur serveur." });
  }
};
// Mettre à jour un utilisateur par ID (pour l'administrateur)
const updateUserById = async (req, res) => {
  const { id } = req.params;
  const { username, email, password, isAdmin } = req.body;

  try {
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }

    // Mise à jour des champs
    user.username = username || user.username;
    user.email = email || user.email;

    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }

    if (typeof isAdmin !== "undefined") {
      user.isAdmin = isAdmin;
    }

    await user.save();

    res.status(200).json({
      message: "Utilisateur mis à jour avec succès.",
      utilisateur: {
        id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
    res.status(500).json({ message: "Erreur serveur." });
  }
};
// Supprimer un utilisateur par ID (pour l'administrateur)
const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }
    await user.remove();
    res.status(200).json({ message: "Utilisateur supprimé avec succès." });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'utilisateur :", error);
    res.status(500).json({ message: "Erreur serveur." });
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
