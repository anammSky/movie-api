const express = require("express");
const app = express();
const { userRouter, showsRouter } = require("./routes");

app.use(express.json());

app.use("/users", userRouter);
app.use("/shows", showsRouter);

module.exports = app;
