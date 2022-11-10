const express = require("express");
const app = express();
// const db = require("./db/db");
const seed = require("./db/seed");

app.use(express.json());

(async () => {
  try {
    await seed();
  } catch (error) {
    throw new Error("Database not seeded");
  }
})();

// app.get("/sync", async (req, res) => {
//   res.sendStatus(200);
// });

app.listen(5001, () => {
  console.log("listening on port 5001");
});

module.exports = app;
