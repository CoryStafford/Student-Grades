//createStudent() should return a new student object. The name of the student, and which grade the student is in, must be passed to the function as arguments. The returned object should have a name property and a grade property.
//addMathGrade() should add a new "math" property to the student with a value of "B".
//addHistoryGrade() should add a new "history" property to the student with a value of "C".
//addScienceGrade() should add a new "science" property to the student with a value of "A".

const createStudent = (name, grade) => {
    student = {}    
    student.name = name;
    student.grade = grade;
    return student
}

const addMathGrade = (student) => {
    student.math = 'B'
    return student
}
const addHistoryGrade = (student) => {
    student.history = 'C'
    return student
} 
const addScienceGrade = (student) => {
    student.science = 'A'
    return student 
}

const studentA = createStudent('Cory', '11')
addMathGrade(studentA)
addHistoryGrade(studentA)
addScienceGrade(studentA)

console.log(studentA)
