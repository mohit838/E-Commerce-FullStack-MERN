class Authorization {
  authorized(req, res, next) {
    const headerToken = req.headers.authorization;
    if (headerToken) {
    } else {
      return res
        .status(401)
        .json({ errors: [{ msg: "UnAuthorized access!!" }] });
    }
  }
}

module.exports = new Authorization();
