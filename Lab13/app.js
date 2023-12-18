const express = require("express");
const studentRouter = require("./routers/StudentRouter");
const Student = require("./models/Student");
const app = express();

app.use(express.json());
// app.use((req, res, next) => {
//   console.log(req.query);
//   res.send(req.query);
// });
// const studentInCompro = Student.searchByProgram("Compro");
// console.log(studentInCompro);
// app.use("/students/search", (req, res, next) => {
//     const program = req.query.program;
//     if(program)
//   //   console.log("The program", program);
//   //   console.log("The program", studentDb);
//   res.json(studentInCompro);
// });

app.use("/students", studentRouter);
// // app.use("/search", searchRouter);

app.listen(3000, () => {
  console.log("Server has started on port 3000");
});
