const express = require("express");
const env = require("./config/envConfig");
const dbConnect = require("./config/db");

app = express();

// DB Connection
dbConnect();

app.get("/", (req, res) => {
  res.json({ msg: "welcome to gRio." });
});

const port = env.PORT || 8081;

app.listen(port, () => {
  console.log(`gRio Running on port ${port}`);
});
