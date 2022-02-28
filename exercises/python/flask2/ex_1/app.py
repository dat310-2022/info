"""
Exercise #1: Booking
"""

from flask import Flask, render_template
import math

app = Flask(__name__)


@app.route("/")
def index():
    prop = {
        "name": "Vestlia Resort",
        "address": "Bakkestøvlvegen 81, Geilo, 3580, Norway",
        "phone": "+4732087200",
        "email": "resort@unknown.no",
        "photo": "https://vestlia.no/wp-content/uploads/2019/10/web_vestlia_night-1920x1080.jpg"
    }
    book = {
        "nights": 1,
        "rooms": 1,
        "checkin": "15/03/2018",
        "checkout": "21/03/2018",
        "is_breakfast": True,
        "is_lunch": False,
        "is_dinner": False
    }

    return render_template("booking.html", property=prop)


if __name__ == "__main__":
    app.run()
