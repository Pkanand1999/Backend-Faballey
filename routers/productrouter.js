const express = require("express");
const authLoginUser = require("../Middleware/auth.middleware");
const {
  getproductTops,
  getProductDresses,
  createOne,
  AddCart,
} = require("../controller/productController");
const users = require("../models/usermodel");
const cart = require("../models/cartmodel");
const products = require("../models/productmodel");
 
const product = express.Router();

product.get("/tops", async (req, res) => {
  try {
    const response = req.query;
    console.log(rating);
    const data = await getproductTops(response);
    res.status(200).send(data);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send({
      error: "Something went wrong",
    });
  }
});

product.get("/dress", async (req, res) => {
  try {
    const response = req.query;
    console.log(rating);
    const data = await getProductDresses(response);
    res.status(200).send(data);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send({
      error: "Something went wrong",
    });
  }
});

product.post("/products", async (req, res) => {
  try {
    const body = req.body;
    const data = await createOne(body);
    res.status(200).send(data);
  } catch (e) {
    return res.status(500).send({
      error: "Already exists",
    });
  }
});

module.exports = product;