const { validationResult } = require("express-validator");

export const validateFields = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send({
      error: errors.mapped(),
    });
  }

  next();
};
