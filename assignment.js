let students = [
  { id: 1, name: "A", mobileno: 8978735498, address: "ABC", age: 20 },
  { id: 2, name: "B", mobileno: 7873547890, address: "BCD", age: 25 }
];
function addStudent(student) {
  students.push(student);
}
addStudent({ id: 3, name: "C", mobileno: 9999999999, address: "XYZ", age: 22 });

console.log(students);


function getStudents() {
  return students;
}

console.log(getStudents());

function getStudentById(id) {
  return students.find(student => student.id === id);
}
console.log(getStudentById(2));
