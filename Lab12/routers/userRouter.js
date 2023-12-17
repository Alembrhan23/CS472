const express = require("express");
const router = express.Router();

// I am using a sample data overhere
const users = [
  { id: 12345, name: "Bob", position: "supervisor" },
  { id: 54326, name: "Anna", position: "Assistant" },
  { id: 97338, name: "Smith", position: "Manager" },
];

// creating the get method for the user

router.get("/users", (req, res, next) => {
  res.send(users);
});
// creating the post method for the user
router.post("/users", (req, res, next) => {
  let newUser = ({ id, name, position } = req.body);
  if (!id || !name || !position) {
    throw new Error();
  }
  users.push(newUser);
  res.send(newUser);
});

module.exports = router;
