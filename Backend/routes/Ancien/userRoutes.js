const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  //   getAllUsers,
  //   getUserById,
  //   updateUserById,
  //   deleteUserById,
} = require("../controllers/userCont");
const { protectUser } = require("../middlewares/authMiddleware");
const bcrypt = require("bcryptjs");

router.post("/inscription", registerUser);
router.post("/connexion", loginUser);
router.get("/profil", protectUser, getUserProfile);
router.put("/modifier", protectUser, updateUserProfile);

// router.delete("/supprimer/:id", protectUser, deleteUserById);
// router.get("/utilisateurs", protectUser, getAllUsers);
// router.get("/utilisateur/:id", protectUser, getUserById);
// router.put("/modifier/:id", protectUser, updateUserById);

module.exports = router;
