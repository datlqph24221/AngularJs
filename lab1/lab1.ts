interface Student {
    studentId: number;
    studentName: string;
    studentAge: number;
}

let allStudents: Student[] = [];

for (let i = 0; i < 10; i++) {
    let student: Student = {
        studentId: i,
        studentName: "Student " + i,
        studentAge: 18 + i
    };
    allStudents.push(student);
}

console.log(allStudents);