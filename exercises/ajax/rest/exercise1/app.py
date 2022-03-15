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


@app.route("/addstudent", methods=["POST"])
def addStudent():
    """adds a new student creates new student number"""
    student = request.get_json()
    sleep(1)
    if student.get("name", "") != "":
        student["student_no"] = STUDENTS[-1]["student_no"]+1
        print("Adding student: {}".format(student))
        STUDENTS.append(student)
        return json.dumps(STUDENTS)
    else: 
        # bad request return 400 error
        abort(400, "Missing student_no or name")


@app.route("/")
def index():
    return app.send_static_file("student.html")


if __name__ == "__main__":
    app.run(debug=True)
