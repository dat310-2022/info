"""
Flask: Using templates
"""

from setup_db import add_grade, add_student, select_courses, select_grades, select_students, get_student, get_course, get_student_grades, get_course_grades, select_grade_stats
import sqlite3
from flask import Flask, render_template, request, redirect, url_for, g

app = Flask(__name__)


DATABASE = './database.db'


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


@app.route("/")
def index():
    conn = get_db()
    return render_template("index.html", 
                    courses=select_courses(conn), 
                    students=select_students(conn))

@app.route("/student/<int:student_no>")
def student_grades(student_no):
    conn = get_db()
    return render_template("student_grades.html", 
                    grades=get_student_grades(conn, student_no), 
                    student=get_student(conn,student_no))

@app.route("/course/<course_id>")
def course_grades(course_id):
    conn = get_db()
    return render_template("course_grades.html", 
                    grades=get_course_grades(conn,course_id), 
                    stats=select_grade_stats(conn, course_id),
                    course=get_course(conn,course_id))

@app.route("/add_grade.html", methods=["GET","POST"])
def grade_form():
    if request.method == "GET":
        student_no = request.args.get("student", "")
        course_id = request.args.get("course","")
        return render_grade_form(student_no,course_id)

    student_no = request.form.get('stud','')
    course_id = request.form.get('course', '')
    grade = request.form.get('grade', '')

    err, msg = '',''
    if student_no == '' or course_id == '' or grade == '':
        err = "You need to select a student, course and grade."
    else:
        try:
            conn = get_db()
            add_grade(conn,course_id,student_no,grade)
            msg = "Added grade {} for {} in course {}".format(grade, student_no, course_id)
        except Error as e:
            err = str(e)

    formtype = request.form.get('type', '')
    if formtype == "student":
        return render_grade_form(student_no=student_no, msg=msg, err=err)
    elif formtype == "course":
        return render_grade_form(course_id=course_id, msg=msg, err=err)
    else:
        return render_grade_form(msg=msg, err=err)

def render_grade_form(student_no="",course_id="", msg="", err=""):
    conn = get_db()
    students = []
    courses = []
    if student_no == "":
        students = select_students(conn)
    else:
        students = [get_student(conn, student_no)]
    if course_id == "":
        courses = select_courses(conn)
    else:
        courses = [get_course(conn, course_id)]
    if err != "":
        return render_template("add_grades.html", grades_error=err, courses=courses, students=students)
    elif msg != "":
        return render_template("add_grades.html", msg=msg, courses=courses, students=students)
    return render_template("add_grades.html", courses=courses, students=students)


@app.route("/student_form")
def student_form():
    return render_template("add_student.html")

@app.route("/student", methods=["POST"])
def adding_student():
    name = request.form.get('name','')

    if name == "":
        err = "No name entered."
        return render_template("add_student.html", name_error=err)
    conn = get_db()
    students = select_students(conn)
    student_no = ""
    for no in range(100000, 999999):
        for s in students:
            if no == s["student_no"]:
                break
        else:
            student_no = no
            break

    add_student(conn,student_no, name)

    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(debug=True)