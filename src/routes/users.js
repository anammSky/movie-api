const { Router } = require("express");
const userRouter = Router();
const { User } = require("../models");

// GET all users
userRouter.get("/", async (req, res) => {
  const allUsers = await User.findAll();
  res.status(200).send({ users: allUsers });
});

// GET one user
userRouter.get("/:id", async (req, res) => {
  const user = await User.findByPk(1);
  res.status(200).send(user);
});

// GET all shows watched by a user (user id in req.params)
userRouter.get("/:id/shows", async (req, res) => {
  const user = await User.findByPk(1);
  console.log(await user.getShows());
  res.sendStatus(200);
});

// PUT update and add a show if a user has watched it
// userRouter.put()

userRouter.get("/health", (req, res) => {
  res.status(200).send("Request made");
});

module.exports = userRouter;
