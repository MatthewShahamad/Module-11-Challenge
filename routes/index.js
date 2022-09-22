const express = require("express");

const feedbackRouter = require("./feedback");

const app = express();

app.use("/feedback", feedbackRouter);

module.exports = app;
