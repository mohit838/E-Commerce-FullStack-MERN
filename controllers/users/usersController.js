const { validationResult } = require("express-validator");

// POST api/auth/register
// Public router
// Create user and return a token
module.exports.register = (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    console.log(req.body);
  } else {
    // If failed the validation
    return res.status(400).json({ errors: errors.array() });
  }
};
