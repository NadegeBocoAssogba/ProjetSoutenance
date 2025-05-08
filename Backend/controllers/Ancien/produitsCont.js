const produits = require("../models/produitsModel");

exports.getAllProduits = async (req, res) => {
  try {
    const produitsList = await produits.find();
    res.status(200).json(produitsList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getProduitById = async (req, res) => {
  try {
    const produit = await produits.findById(req.params.id);
    if (!produit) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(produit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createProduit = async (req, res) => {
    const { nom, description, prix, image, categorie } = req.body;
  const newProduit = new produits(req.body);
  try {
    const savedProduit = await newProduit.save();
    res.status(201).json(savedProduit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.updateProduit = async (req, res) => {
  try {
    const updatedProduit = await produits.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduit) {
      return res.status(404).json({ message: "Produit not found" });
    }
    res.status(200).json(updatedProduit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.deleteProduit = async (req, res) => {
  try {
    const deletedProduit = await produits.findByIdAndDelete(req.params.id);
    if (!deletedProduit) {
      return res.status(404).json({ message: "Produit not found" });
    }
    res.status(200).json({ message: "Produit deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getProduitsByCategory = async (req, res) => {
  try {
    const produitsList = await produits.find({ category: req.params.category });
    res.status(200).json(produitsList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getProduitsByName = async (req, res) => {
  try {
    const produitsList = await produits.find({
      name: { $regex: req.params.name, $options: "i" },
    });
    res.status(200).json(produitsList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getProduitsByPriceRange = async (req, res) => {
  try {
    const produitsList = await produits.find({
      price: { $gte: req.params.minPrice, $lte: req.params.maxPrice },
    });
    res.status(200).json(produitsList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getProduitsByRating = async (req, res) => {
  try {
    const produitsList = await produits.find({
      rating: { $gte: req.params.rating },
    });
    res.status(200).json(produitsList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// module.exports = {
//   getAllProduits,
//   getProduitById,
//   createProduit,
//   updateProduit,
//   deleteProduit,
//   getProduitsByCategory,
//   getProduitsByName,
//   getProduitsByPriceRange,
//   getProduitsByRating,
// };