const express = require("express");

const productRouter = express.Router();

// product imports

const createProduct = require("../controllers/products/create_product");
const updateProduct = require("../controllers/products/update_product");
const deleteProduct = require("../controllers/products/delete_product");

// purchase imports

const createPurchase = require("../controllers/purchase/create_purchase");


// validations

const productValidation = require("../validations/product_validation");
const purchaseValidation = require("../validations/purchase_validation");
const objectIdValidation = require("../validations/objectid_validation");


productRouter.post("/", [productValidation.create], createProduct.create);
productRouter.patch("/:id", [objectIdValidation.idValidate, productValidation.update], updateProduct.update);
productRouter.delete("/:id", [objectIdValidation.idValidate], deleteProduct.delete);


productRouter.post("/purchases", [purchaseValidation.create], createPurchase.create);


module.exports = productRouter;