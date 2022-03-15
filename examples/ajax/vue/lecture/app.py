from time import sleep
from flask import Flask, request
import json
app = Flask(__name__)

@app.route("/")
def index():
    return app.send_static_file("index.html")

PLAYLIST = [
    { "name": "My favorite", "band": "This band"},
    { "name": "Second favorite", "band": "Other band"},
]

@app.route("/playlist")
def playlist():
    sleep(1)
    return json.dumps(PLAYLIST)

@app.route("/add", methods=["POST"])
def addsong():
    sleep(3)
    song = request.get_json()
    if song not in PLAYLIST:
        PLAYLIST.append(song)
    return "OK"

if __name__ == "__main__":
    app.run(debug=True)