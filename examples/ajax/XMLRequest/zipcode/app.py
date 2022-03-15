"""
AJAX Zipcode example
"""

from time import sleep
from flask import Flask, request
import datetime

app = Flask(__name__)

@app.after_request
def setExpiration(response): 
    if response.expires == None:
        expire_date = datetime.datetime.now()
        expire_date = expire_date + datetime.timedelta(hours=1)
        response.expires = expire_date
    return response


@app.route("/getplace", methods=["GET"])
def getplace():
    POSTCODES = {
        "0107": "Oslo",
        "0506": "Oslo",
        "4090": "Hafrsfjord",
        "4033": "Stavanger",
        "4014": "Stavanger",
        "4050": "Sola",
        "4056": "Tananger"
    }
    sleep(1)
    postcode = request.args.get("postcode", None)
    # look up corresponding place or return empty string
    if postcode and (postcode in POSTCODES):
        return POSTCODES[postcode]
    return ""


@app.route("/")
def index():
    return app.send_static_file("zipcode.html")


if __name__ == "__main__":
    app.run(debug=True)
