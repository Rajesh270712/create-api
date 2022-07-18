const express = require("express");
const { getAllProducts, createProduct, deleteProduct, updateProduct } = require("../handlers/product");

const productRouter = express.Router();


productRouter.get("/product/all", getAllProducts);
productRouter.post("/product", createProduct);
productRouter.delete("/product/:id", deleteProduct);
productRouter.patch("/product/:id", updateProduct);
module.exports = productRouter;
