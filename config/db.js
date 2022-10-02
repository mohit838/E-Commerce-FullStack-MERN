const mongoose = require("mongoose");
const env = require("./../config/envConfig");

const connect = async () => {
  try {
    await mongoose
      .connect(env.MONGO_URL, { useNewUrlParser: true })
      .then(() => console.log("DB Connection Successfull!"));
  } catch (error) {
    console.log(error.message);
    process.exit;
  }
};

module.exports = connect;
