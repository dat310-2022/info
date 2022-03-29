"""
Flask: Login
"""

from setup_db import *
from flask import Flask, render_template, request, redirect, url_for, flash, session, g, abort
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.debug = True
app.secret_key = 'some_secret'

def get_db():
    if not hasattr(g, "_database"):
        print("create connection")
        g._database = sqlite3.connect("database.db")
    return g._database


@app.teardown_appcontext
def teardown_db(error):
    """Closes the database at the end of the request."""
    db = getattr(g, '_database', None)
    if db is not None:
        print("close connection")
        db.close()

def valid_login(username, password):
    """Checks if username-password combination is valid."""
    # user password data typically would be stored in a database
    conn = get_db()

    hash = get_hash_for_login(conn, username)
    # the generate a password hash use the line below:
    # generate_password_hash("rawPassword")
    if hash != None:
        return check_password_hash(hash, password)
    return False


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":  # if the form was submitted (otherwise we just display form)
        if valid_login(request.form["username"], request.form["password"]):
            conn = get_db()
            user = get_user_by_name(conn,request.form["username"])
            print(user)
            session["username"] = user["username"]
            session["role"] = user["role"]
            return redirect(url_for("index"))
        else:
            flash("Invalid username or password!")
    return render_template("login.html")

@app.route("/register", methods=["POST"])
def register():
    #validate username
    username = request.form.get("username","").strip()
    if username == "":
        flash("Enter username")
        return render_template("login.html")
    if len(username) < 4:
        flash("Username must have at least 4 characters")
        return render_template("login.html")

    pw = request.form.get("password","")
    if pw == "":
        flash("Enter password")
        return render_template("login.html")
    
    hash = generate_password_hash(pw)
    
    conn = get_db()
    id = add_user(conn, username, hash)
    if id == -1:
        flash("Username already taken")
        return render_template("login.html")

    session["username"] = username
    return redirect(url_for("index"))

@app.route("/logout")
def logout():
    session.pop("username")
    session.pop("role")
    return redirect(url_for("index"))

# restrict access to certain routes as shown below.
@app.route("/admin")
def adminonly():
    if not session.get("role",None) == "admin":
        abort(403)
    return render_template("admin.html", username=session.get("username", None), role=session.get("role", None))

@app.route("/")
def index():
    return render_template("index.html", username=session.get("username", None), role=session.get("role", None))


if __name__ == "__main__":
    app.run()