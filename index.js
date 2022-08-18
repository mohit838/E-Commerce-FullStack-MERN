const express = require("express");
const env = require("./config/envConfig");
const dbConnect = require("./config/db");
const userRouters = require("./routes/user/userRoutes");
const userLogin = require("./routes/user/userRoutes");

app = express();

// Add middlewire
app.use(express.json());

// DB Connection
dbConnect();

// User Router
app.use("/api", userRouters);
app.use("/api", userLogin);

// Test route
app.get("/", (req, res) => {
  res.json({ msg: "welcome to gRio." });
});

// PORT selection
const port = env.PORT || 8081;

// Check PORT
app.listen(port, () => {
  console.log(`gRio Running on port ${port}`);
});
