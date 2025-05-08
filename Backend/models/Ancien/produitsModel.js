const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const produitSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  prix: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  categorie: {
    type: String,
    required: true,
  },
  brand: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
  },
  color: {
    type: String,
    default: "",
  },
  timestamps: {
    type: Date,
    default: Date.now,
  },
});

const produit = mongoose.model("Produit", produitSchema);
module.exports = produit;
