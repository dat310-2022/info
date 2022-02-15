const courses = [
    { course_id: "MAT100",	course_name: "Mathematical methods I."},
    { course_id: "MAT200",	course_name: "Mathematical methods II."},
    { course_id: "DAT100",	course_name: "Object-oriented programming"},
    { course_id: "DAT200",	course_name: "Algorithms and data structures"},
    { course_id: "DAT220",	course_name: "Databases"},
    { course_id: "DAT310",	course_name: "Web programming"},
    { course_id: "DAT320",	course_name: "Operating Systems"}
]

const students = [
    { student_no: "111111",	student_name: "John Smith" },
    { student_no: "222222",	student_name: "Mary Jane" },
    { student_no: "333333",	student_name: "Lars Kongen" }
]

const grades = [
    { student_no: "111111", course_id : "MAT100", grade: "B" },
    { student_no: "222222", course_id : "MAT100", grade: "D" },
    { student_no: "333333", course_id : "MAT100", grade: "A" },
    { student_no: "111111", course_id : "MAT200", grade: "C" },
    { student_no: "222222", course_id : "MAT200", grade: "C" },
    { student_no: "333333", course_id : "MAT200", grade: "A" },
    { student_no: "111111", course_id : "DAT100", grade: "B" },
    { student_no: "222222", course_id : "DAT100", grade: "C" },
    { student_no: "333333", course_id : "DAT100", grade: "A" },
    { student_no: "111111", course_id : "DAT200", grade: "C" },
    { student_no: "222222", course_id : "DAT200", grade: "D" },
    { student_no: "333333", course_id : "DAT200", grade: "A" },
    { student_no: "111111", course_id : "DAT220", grade: "C" },
    { student_no: "222222", course_id : "DAT220", grade: "B" },
    { student_no: "333333", course_id : "DAT220", grade: "A" },
    { student_no: "222222", course_id : "DAT310", grade: "A" },
    { student_no: "333333", course_id : "DAT310", grade: "B" },
    { student_no: "333333", course_id : "DAT320", grade: "A" },
    { student_no: "111111", course_id : "MAT100", grade: "B" }
]

class DataStore {
    constructor(courses, students, grades){
        this.state = Vue.reactive({
            courses: courses,
            students: students,
            grades: grades
        });
    }
    studentGrades(student_no){
        return this.state.grades.filter(
            grade => grade.student_no === student_no );
    }
    courseGrades(course_id){
        return this.state.grades.filter(
            grade => grade.course_id === course_id );
    }
    student(student_no){
        return this.state.students.find(
            stud => stud.student_no === student_no );
    }
    course(course_id){
        return this.state.courses.find(
            course => course.course_id === course_id );
    }
    addGrade(student_no, course_id, grade){
        if (this.student(student_no) &&
            this.course(course_id) &&
            grade){
                this.state.grades.push({ 
                    student_no: student_no,
                    course_id: course_id,
                    grade: grade
                });
                console.log("added grade");
            }
        else console.log("could not validate input");
    }
}


let store = new DataStore(courses, students, grades);