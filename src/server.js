const express = require("express");
const app = express();
// const db = require("./db/db");
const seed = require("./db/seed");
const { userRouter, showsRouter } = require("./routes");

app.use(express.json());

app.use("/users", userRouter);
app.use("/shows", showsRouter);
// (async () => {
//   try {
//     await seed();
//   } catch (error) {
//     throw new Error("Database not seeded");
//   }
// })();

// app.get("/sync", async (req, res) => {
//   res.sendStatus(200);
// });

app.listen(5001, async () => {
  await seed();
  console.log("listening on port 5001");
});

module.exports = app;
