const { Router } = require("express");
const showsRouter = Router();
const { Show } = require("../models");

// GET all shows
showsRouter.get("/", async (req, res) => {
  const allShows = await Show.findAll();
  res.status(200).send({ shows: allShows });
});

// GET one show
showsRouter.get("/:id", async (req, res) => {
  const show = await Show.findByPk(req.params.id);
  res.status(200).send(show);
});

// GET shows of a particular genre (genre in req.params)
showsRouter.get("/genres/:genre", async (req, res) => {
  const shows = await Show.findAll({ where: { genre: req.params.genre } });
  res.status(200).send(shows);
});

// PUT update rating of a show that has been watched

// PUT update the status of a show
showsRouter.put("/:id/updates", async (req, res) => {
  const show = await Show.findByPk(req.params.id);
  const { status } = req.body;
  await show.update({ status: status });
  res.sendStatus(200);
});
// DELETE a show
showsRouter.delete("/:id/delete", async (req, res) => {
  const show = await Show.findByPk(req.params.id);
  show.destroy();
  res.sendStatus(200);
});
showsRouter.get("/health", (req, res) => {
  res.status(200).send("Request made");
});
module.exports = showsRouter;
