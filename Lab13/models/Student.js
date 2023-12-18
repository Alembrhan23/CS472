// Creating students in memory database,
const studentsDb = [
  { id: 116857, name: "Anna Johns", program: "Compro" },
  { id: 615757, name: "Smith Dove", program: "Compro" },
  { id: 618975, name: "Jom Jerry", program: "MBA" },
];
// creating the student class
class Student {
  constructor(id, name, program) {
    this.id = id;
    this.name = name;
    this.program = program;
  }

  // declaring methods
  addStudent() {
    // let student = studentsDb.find((s) => s.id == this.id);
    // if (!student) {
    //   studentsDb.push(this);
    // }
    if (!studentsDb.find((s) => s.id == this.id)) {
      studentsDb.push(this);
      return this;
    }
  }
  static getAllStudents() {
    return studentsDb;
  }
  static getStudentById(studentId) {
    let index = studentsDb.find((s) => s.id === studentId);
    // if (index > -1) return studentsDb[index];
    //   return new Error("NOT FOUND");
    return studentsDb.find((s) => s.id == studentId);
  }
  static deleteStudentById(studentId) {
    let index = studentsDb.find((s) => s.id === studentId);
    if (index !== -1) return studentsDb.splice(index, 1);
    return new Error("NOT FOUND");
  }
  updateStudentById(studentId) {
    let oldStudentIndex = studentsDb.findIndex((s) => s.id == studentId);

    studentsDb.splice(oldStudentIndex, 1, this);
    return studentsDb;
    // let index = studentsDb.find((s) => s.id === studentId);
    // if (index !== -1) return studentsDb.splice(index, this);
    // else return new Error("NOT FOUND");
  }
  static searchByProgram(program) {
    return studentsDb.filter((s) => s.program === program);
  }
}

module.exports = Student;
