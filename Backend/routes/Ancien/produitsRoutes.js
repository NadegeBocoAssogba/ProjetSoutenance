const express = require("express");
const router = express.Router();
const { getAllProduits, createProduit, getProduitById } = require("../controllers/produitsCont");
// const { verifyToken, isAdmin } = require("../middleware/authMiddleware");

// Route to get all products
router.get("/", getAllProduits);
// Route to get a product by ID
router.get("/:id", getProduitById);
// Route to create a new product
router.post("/", createProduit);
// Route to update a product by ID
// router.put("/:id", produitsController.updateProduit);
// // Route to delete a product by ID
// router.delete("/:id", produitsController.deleteProduit);
// // Route to get products by category
// router.get("/category/:category", produitsController.getProduitsByCategory);
// // Route to get products by name
// router.get("/name/:name", produitsController.getProduitsByName);
// // Route to get products by price range
// router.get("/price/:min/:max", produitsController.getProduitsByPriceRange);
// // Route to get products by rating
// router.get("/rating/:rating", produitsController.getProduitsByRating);
// // Route to get products by brand
// router.get("/brand/:brand", produitsController.getProduitsByBrand);
// // Route to get products by color
// router.get("/color/:color", produitsController.getProduitsByColor);

module.exports = router;
