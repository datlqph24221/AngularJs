let allStudents = [];
for (let i = 0; i < 10; i++) {
    let student = {
        studentId: i,
        studentName: "Student " + i,
        studentAge: 18 + i
    };
    allStudents.push(student);
}
console.log(allStudents);
