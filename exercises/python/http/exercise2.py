"""
Simple HTTP server.

https://docs.python.org/3/library/http.server.html
"""
from urllib.parse import urlparse, parse_qsl
from http.server import BaseHTTPRequestHandler, HTTPServer

class myHTTPServer_RequestHandler(BaseHTTPRequestHandler):
    """
    HTTPRequestHandler class

    Parsing of the request is done by the base class BaseHTTPRequestHandler.
    """

    # GET
    def do_GET(self):
        # Send response status code
        self.send_response(200)

        # Send headers
        self.send_header('Content-type', 'text/html')
        self.end_headers()

        
        parsed = urlparse(self.path)
        x = parse_qsl(parsed.query)

        message = " ".join([ "{}:{}".format(p[0],p[1]) for p in x])
        # Write message content as utf-8 data
        self.wfile.write(bytes(message, "utf8"))
        return

    # POST
    def do_POST(self):
        # Send response status code
        self.send_response(200)

        # Send headers
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        # Gets the size of data
        l = int(self.headers.get("Content-length"))
        # Gets the data itself (byte string)
        vars = self.rfile.read(l)

        # Input parameters (as a dict)
        
        message = "Hello POST!"
        # Write message content as utf-8 data
        self.wfile.write(bytes(message, "utf8"))
        return

def main():
    server_address = ('127.0.0.1', 8080)
    httpd = HTTPServer(server_address, myHTTPServer_RequestHandler)
    print("running server...")
    httpd.serve_forever()

if __name__ == "__main__":
    main()