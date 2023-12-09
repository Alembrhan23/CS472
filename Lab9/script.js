//I preferred to use the class approach 
//My Student class
class Student{
    constructor(id) {
        this.sid = id;
        this.answers = [];
    }
    addAnswer(question) {
        this.answers.push(question);
    }
}

// my Questions class
class Question{
    constructor(id, answer) {
        this.qid = id;
        this.answer = answer;
    }
    checkAnswer(studentAnswer) {
        return this.answer == studentAnswer;
    }
}

// my Quiz class
class Quiz {
    constructor(questions, students) {
      this.questions = new Map(questions.map((q) => [q.qid, q.answer]));
      this.students = students;
    }
  
    scoreStudentBySid(studentId) {
      const student = this.students.find((s) => s.sid === studentId);
      if (!student) {
        console.log(`ID ${sid} not found.`);
        return;
      }
  
      return student.answers.reduce((score, studentAnswer) => {
        const correctAnswer = this.questions.get(studentAnswer.qid);
        if (correctAnswer && studentAnswer.checkAnswer(correctAnswer)) {
          return score + 1;
        }
        return score;
      }, 0);
    }
  
    getAverageScore() {
      const totalScore = this.students.reduce(
        (total, student) => total + this.scoreStudentBySid(student.sid), 0);
  
      return this.students.length > 0 ? totalScore / this.students.length : 0;
    }
  }


// object creation and testing my methods
const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new
Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5