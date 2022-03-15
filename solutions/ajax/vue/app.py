"""
AJAX Students example
"""

from time import sleep
from flask import Flask, request
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
    sleep(1)
    return json.dumps(STUDENTS)

@app.route("/addStudent", methods=["POST"])
def addStudents():
    student = request.get_json()
    if student.get("student_no", "") != "" and student.get("name", "") != "":
        STUDENTS.append(student)
    sleep(1)
    print(STUDENTS)
    return ""

@app.route("/")
def index():
    return app.send_static_file("student.html")


if __name__ == "__main__":
    app.run(debug=True)
