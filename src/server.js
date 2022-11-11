const app = require("./app");
const seed = require("./db/seed");

app.listen(5001, async () => {
  await seed();
  console.log("listening on port 5001");
});
