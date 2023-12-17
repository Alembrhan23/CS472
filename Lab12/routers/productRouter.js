const express = require("express");
const router = express.Router();

// I am using a sample data overhere
const products = [
  { id: 83645, name: "Tv", price: 100 },
  { id: 86355, name: "Apple Watch", price: 200 },
  { id: 97287, name: "Book", price: 50 },
];

// creating the get method for the products

router.get("/products", (req, res, next) => {
  res.send(products);
});

// creating the post method for the products
router.post("/products", (req, res, next) => {
  let newProduct = ({ id, name, price } = req.body);
  if (!id || !name || !price) {
    throw new Error();
  }
  products.push(newProduct);
  res.send(newProduct);
});

module.exports = router;
