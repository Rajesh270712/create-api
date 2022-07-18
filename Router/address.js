const express = require("express");
const { getmeip } = require("../handlers/address");

const addressRouter = express.Router();


addressRouter.post("/getmeip", getmeip);
module.exports = addressRouter;
