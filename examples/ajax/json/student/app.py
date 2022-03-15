"""
AJAX License example
"""

from flask import Flask, request, redirect
import json

app = Flask(__name__)


@app.route("/get_data", methods=["GET"])
def check_license():
    DATA = {
        "name":"John Doe",
        "student_no": 111111
    }
    return json.dumps(DATA)

@app.route("/post_data", methods=["POST"])
def print_data():
    print(request.get_json())
    return "OK"

@app.route("/")
def index():
    return app.send_static_file("index.html")


if __name__ == "__main__":
    app.run(debug=True)
