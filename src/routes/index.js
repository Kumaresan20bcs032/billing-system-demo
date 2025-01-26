const express = require("express");
const ProductRouter = require("./product_routes");

const Router = express.Router();

Router.use("/products", ProductRouter);


module.exports = Router;