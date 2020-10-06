const express = require("express");

const dataRouter = require("../dataRouter");

const server = express();

server.use(express.json());

server.use("/api/accounts", dataRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "Up & running" });
});

module.exports = server;