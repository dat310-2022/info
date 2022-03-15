function showStudents(students){
    let rows = "";
    for (let index = 0; index < students.length; index++) {
        rows += "<tr><td>" + students[index].name + "</td><td>" + students[index].student_no + "</td></tr>";
    }
    document.querySelector("#student_table tbody").innerHTML = rows;
}

async function getStudents(){
    let response = await fetch("/students");
    if (response.status == 200){
        let students = await response.json();
        showStudents(students)
    }
}

function getStudentFromForm(){
    let name = document.getElementById("name").value;
    let number = document.getElementById("student_no").value;
    return { name: name, student_no: number};
}

function addStudent(){
    let student = getStudentFromForm();

    fetch("/addStudent", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
    });
}