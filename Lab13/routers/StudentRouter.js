let express = require("express");
let router = express.Router();
let studentController = require("../controllers/StudentController");
router.get("/search", studentController.searchByProgram); //filtering by proram use queryString
router.get("/", studentController.getAllStudents); // get all students
router.get("/:id", studentController.getStudentById); // get single student by id
router.post("/", studentController.createStudent); // add new student
router.delete("/:id", studentController.deleteStudentById); //
router.put("/:id", studentController.updateStudentById);
router.get("/search", studentController.searchByProgram); //filtering by proram use queryString
// /students/search?program=compro
module.exports = router;
