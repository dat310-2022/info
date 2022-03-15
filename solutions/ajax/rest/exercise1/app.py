"""
AJAX Students example
"""

from time import sleep
from flask import Flask, request, abort
import json

app = Flask(__name__)

# We are useing a global variable, 
# this is not thread safe, and BAD PRACTICE!
# However, keeps the example short. (No file or db io.)
STUDENTS = [
    { "student_no": 111111, "name": "John Smith"},
    { "student_no": 222222, "name": "Mary Jane"},
    { "student_no": 333333, "name": "Lars Kongen"}
]

@app.route("/students", methods=["GET"])
def getStudents():
    return json.dumps(STUDENTS)


@app.route("/students", methods=["POST"])
def addStudent():
    """adds a new student creates new student number"""
    student = request.get_json()
    sleep(1)
    print("Student: {}".format(student))
    if student.get("name", "") != "":
        student["student_no"] = STUDENTS[-1]["student_no"]+1
        STUDENTS.append(student)
        print("Student: {}".format(student))
        return STUDENTS[-1]
    else: 
        # bad request return 400 error
        abort(400, "Missing student_no or name")
    return ""

@app.route("/student/<int:student_no>", methods=["PUT"])
def updateStudent(student_no):
    data = request.get_json()
    if data.get("name", "") == "":
        abort(400, "No new name submitted")
    for student in STUDENTS:
        if student["student_no"] == student_no:
            # update data
            student["name"] = data["name"]
            break
    else:
        #not found
        abort(404, "Student not found")
    return "Student {} updated!".format(student_no)

@app.route("/student/<int:student_no>", methods=["DELETE"])
def removeStudent(student_no):
    print(student_no)
    print(STUDENTS)
    for student in STUDENTS:
        if student["student_no"] == student_no:
            STUDENTS.remove(student)
            break
    else:
        #not found
        abort(404, "Student not found")
    return "Student {} removed!".format(student_no)

@app.route("/")
def index():
    return app.send_static_file("student.html")


if __name__ == "__main__":
    app.run(debug=True)
