let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        this.students.forEach(function(student) {
            console.log(this.title + ": " + student);
        }.bind(this)); // I'm Binding "this" to the callback function directly
    }
};

group.showList();


//Note: We can also fix the above by making the above 
// callback function to the forEach as arrow funciton. 