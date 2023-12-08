

let student = {
    // fields
    firstName: 'string',
    lastName: 'string',
    grades: [],
    // methods
    insertGrade: function (grade) {
        this.grades.push(grade);
    },
    computeAverageGrade: function (grades) {
        let sum = grades.reduce((cur, pre) => cur + pre, 0);
        return sum / grades.length;
    }
}


student.firstName = "Alex";
student.lastName = "Smith";
student.grades = [90, 98, 92, 90, 94];
student.insertGrade(100);
console.log(student.computeAverageGrade(student.grades));