const jwt = require("jsonwebtoken");
const { JWT_SEC } = require("./../config/envConfig");

class Authorization {
  authorized(req, res, next) {
    const headerToken = req.headers.authorization;
    if (headerToken) {
      const token = headerToken.split("Bearer ")[1];
      console.log(token);
    } else {
      return res
        .status(401)
        .json({ errors: [{ msg: "UnAuthorized access!!" }] });
    }
  }
}

module.exports = new Authorization();
