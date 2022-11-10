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
  const user = await User.findByPk(req.params.id);
  res.status(200).send(user);
});

// GET all shows watched by a user (user id in req.params)
userRouter.get("/:id/shows", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  const shows = await user.getShows();
  res.status(200).send({ shows: shows });
});

// PUT update and add a show if a user has watched it
userRouter.put("/:id/shows/:showId", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  await user.addShow(req.params.showId);
  res.sendStatus(200);
});

userRouter.get("/health", (req, res) => {
  res.status(200).send("User router is healthy");
});

module.exports = userRouter;
