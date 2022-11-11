function validateRating(req, res, next) {
  try {
    const { rating } = req.body;
    if (!rating) {
      throw new Error("Rating field cannot be empty");
    }
    if (!Number.isInteger(rating)) {
      throw new Error("Rating must be a number");
    }
    if (rating < 0 || rating > 5) {
      throw new Error("Rating must be between 0 and 5");
    }
    next();
  } catch (error) {
    res.status(404).send(error.message);
  }
}

module.exports = validateRating;
