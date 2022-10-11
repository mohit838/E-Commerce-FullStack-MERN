const express = require("express");
const cors = require("cors");
const env = require("./config/envConfig");
const dbConnect = require("./config/db");
const userRouters = require("./routes/userRoutes");
const productRouters = require("./routes/productRoutes");
const productCatRouters = require("./routes/categoryRoutes");

// Add middlewire
app = express();
app.use(express.json());
app.use(cors());

// DB Connection
dbConnect();

// User Router
app.use("/api", userRouters);
app.use("/api", productCatRouters);
app.use("/api", productRouters);

// Test route
app.get("/", (req, res) => {
  res.json({ msg: "welcome to gRio." });
});

// PORT selection
const port = env.PORT || 5000;

// Check PORT
app.listen(port, () => {
  console.log(`gRio Running on port ${port}`);
});
