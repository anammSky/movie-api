const { Router } = require("express");
const showsRouter = Router();
const { Show, Watch_Info } = require("../models");

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
showsRouter.patch("/:id/rating", async (req, res) => {
  const show = await Show.findByPk(req.params.id, {
    include: Watch_Info,
  });
  const { rating } = req.body;
  // watch info and only save the ratings into an array
  const watchInfo = show.Watch_Infos.map((values) => values.rating);
  watchInfo.push(rating);

  const average = (
    watchInfo.reduce((a, b) => a + b, 0) / watchInfo.length
  ).toFixed(1);

  await show.update({ rating: average });
  // console.log(average);
  res.sendStatus(200);
});

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
