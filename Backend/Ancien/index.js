const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const port = 500;
const mongoURI =
  "mongodb+srv://nadegeassogba338:holybeads@cluster0.tsssfhz.mongodb.net/holybeadsdatabase";


// Middleware

app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ 
  origin: "http://localhost:5173", 
  credentials: true,
}));

app.get("/", (req, res) => {
  res.send("Bienvenue sur Holy Beads Market!");
});


app.use("/api/products", require("./routes/produitsRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/cart", require("./routes/cartRoutes"));
// app.use("/api/orders", require("./routes/orderRoutes"));
// app.use("/api/stripe", require("./routes/stripeRoutes"));
// app.use("/api/faq", require("./routes/faqRoutes"));
// app.use("/api/brands", require("./routes/brandRoutes"));
// app.use("/api/colors", require("./routes/colorRoutes"));
// app.use("/api/categories", require("./routes/categoryRoutes"));
// app.use("/api/addresses", require("./routes/addressRoutes"));
// app.use("/api/notifications", require("./routes/notificationRoutes"));

async function connexionMongoDB() {
  // Connexion à la base de données MongoDB
  try {
    await mongoose.connect(mongoURI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
connexionMongoDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
