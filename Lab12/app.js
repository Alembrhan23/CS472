/** 
Note: 
  1. In the following code, I have added sample data to support and test my methods, 
      and also I put the users and products in a separate router files.
  2. When you test the post method for both /users and /products case, 
      please try to add the data in the body. I added an error handler on that. 
  3. Thank you!
*/
const express = require("express");
const path = require("path");
const studentRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");
const app = express();

// PORT, also possible to define in the env
const PORT = process.env.PORT || 3000;
app.use(express.json()); // data parser

app.use("/", studentRouter);
app.use("/", productRouter);

// main home page
app.all("/", (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, "./public/views/index.html"));
});
// 404 page middleware
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "./public/views/404.html"));
});

// Error handling middleware
// I am puting the error handler at the bottom to be executed after the others
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(400).send("Something went wrong!");
});

app.listen(PORT, () => console.log("Server started on port 3000"));
