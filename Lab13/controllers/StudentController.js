const Student = require("../models/Student");

let controller = {
  getAllStudents: function (req, res, next) {
    let allStudents = Student.getAllStudents();
    res.status(200).json(allStudents);
  },
  getStudentById: function (req, res, next) {
    let id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "Id parameter is missing" });
    }
    let student = Student.getStudentById(id);
    res.status(200).json(student);
  },
  deleteStudentById: function (req, res, next) {
    let id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "Id parameter is missing" });
    }
    let student = Student.deleteStudentById(id);
    res.status(200).json(student);
  },
  createStudent: function (req, res, next) {
    let { id, name, program } = req.body;

    let student = new Student(id, name, program);
    let newCreatedStudent = student.addStudent();
    if (newCreatedStudent) res.status(200).json(newCreatedStudent);
    else res.status(404).json({ message: "already registered.." });
  },
  // to be implemetnted
  updateStudentById: function (req, res, next) {
    let studentId = req.params.id;
    let { id, name, program } = req.body;
    let updateStudent = new Student(id, name, program);
    if (!studentId) {
      return res.status(400).json({ message: "Id parameter is missing" });
    }
    res.status(200).json(updateStudent.updateStudentById(studentId));
  },

  searchByProgram: function (req, res, next) {
    const program = req.query.program;

    if (!program) {
      return res.status(400).json({ message: "Program parameter is missing" });
    }
    let results = Student.searchByProgram(program);
    console.log("The program is:", program);
    res.status(200).json(results);
  },
};

module.exports = controller;
