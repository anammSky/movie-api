function validateUpdateStatus(req, res, next) {
  try {
    const { status } = req.body;
    if (!status) {
      throw new Error("Status of show cannot be blank");
    }
    if (typeof status !== "string") {
      throw new Error("Status of show must be a string");
    }
    if (status.length < 5 || status.length > 25) {
      throw new Error("Status of show must be between 5 and 25 characters");
    }
    next();
  } catch (error) {
    res.status(404).send(error.message);
  }
}

module.exports = validateUpdateStatus;
