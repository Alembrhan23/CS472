function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
    this.insertGrade=function(grade){
        this.grades.push(grade);
    };
    this.computeAverageGrade = function (grades) {
        let sum = this.grades.reduce((pre, cur) => cur + pre, 0);
        return sum / this.grades.length;
    }
}

// Testing 
// creating an object s1 and testing the methods
let s1 = new Student("Bob", "James");
s1.grades = [98, 99, 90, 94];
console.log(s1.firstName);
console.log(s1.lastName);
console.log(s1.grades);
console.log(s1.insertGrade(95));
console.log(s1.grades);
console.log(s1.computeAverageGrade(s1.grades));

console.log(Student.prototype)
console.log(s1);

// Creating an object s2
let s2 = new Student("Devid", "Kenny");
s2.grades = [90, 90, 90, 90];
console.log('Fullname:',s2.firstName + " " + s2.lastName);
console.log('grades:',s2.grades);
console.log('average:',s2.computeAverageGrade(s2.grades));