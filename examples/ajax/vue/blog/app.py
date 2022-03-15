from time import sleep
from flask import Flask, request
import json

app = Flask(__name__)

BLOGPOSTS = {
  "My Story": [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at aliquet sapien. Pellentesque bibendum felis quis nulla pulvinar, luctus lobortis turpis venenatis. Phasellus imperdiet neque neque, in condimentum nisi fringilla et. Nam aliquet justo nunc, et semper nunc hendrerit in. Suspendisse potenti. Nam lectus purus, ullamcorper aliquet aliquet eu, malesuada nec nulla. Etiam dui eros, interdum a diam non, tempus vestibulum lorem. Nulla facilisi. Pellentesque et purus non dolor semper eleifend eget eget sem. Sed gravida pharetra varius. Aenean elementum sapien in mi finibus dictum.",
    "In dictum ipsum id nisi pretium, a interdum magna blandit. Etiam laoreet semper est eu scelerisque. Donec ligula diam, vestibulum et nisi sit amet, faucibus faucibus augue. Cras sed quam ante. Vivamus nulla nulla, condimentum nec ligula ac, feugiat tincidunt est. Etiam laoreet, nibh nec mollis lacinia, lorem libero congue nulla, ut euismod arcu sem eu orci. Etiam in consequat mauris. Etiam tempor a turpis eget vehicula. Sed id nisl blandit, luctus lorem vitae, placerat risus. Vestibulum ut sollicitudin tellus, non porta augue. Nulla enim metus, vestibulum sed nibh a, ultricies fringilla diam. Fusce suscipit congue porta. Nullam sagittis, lorem eget ultrices tristique, augue lorem varius sapien, id sollicitudin nisl quam in lorem. Nam neque dui, gravida ut gravida non, volutpat sed nibh. In in elit id massa porta suscipit at vitae nunc. Fusce porta fermentum enim non viverra.",
    "Suspendisse convallis ligula sit amet magna vestibulum, nec accumsan leo fringilla. Vestibulum varius iaculis lacus, mattis tempor velit feugiat ac. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed imperdiet lorem purus, ut elementum dui faucibus ac. Morbi mollis ligula eget purus mollis congue. Phasellus varius vulputate lacinia. Nunc consectetur nunc ac orci blandit, non lobortis ante porttitor. Etiam ac elit at neque suscipit laoreet. Maecenas quam lacus, iaculis a condimentum nec, dignissim pretium massa. In mattis commodo posuere. Vivamus pretium ac tellus vel finibus. Sed condimentum dignissim pretium. Mauris consequat mi non nisl efficitur hendrerit. Curabitur ut sollicitudin leo."
  ],
  "New Story": [
    "In dictum ipsum id nisi pretium, a interdum magna blandit. Etiam laoreet semper est eu scelerisque. Donec ligula diam, vestibulum et nisi sit amet, faucibus faucibus augue. Cras sed quam ante. Vivamus nulla nulla, condimentum nec ligula ac, feugiat tincidunt est. Etiam laoreet, nibh nec mollis lacinia, lorem libero congue nulla, ut euismod arcu sem eu orci. Etiam in consequat mauris. Etiam tempor a turpis eget vehicula. Sed id nisl blandit, luctus lorem vitae, placerat risus. Vestibulum ut sollicitudin tellus, non porta augue. Nulla enim metus, vestibulum sed nibh a, ultricies fringilla diam. Fusce suscipit congue porta. Nullam sagittis, lorem eget ultrices tristique, augue lorem varius sapien, id sollicitudin nisl quam in lorem. Nam neque dui, gravida ut gravida non, volutpat sed nibh. In in elit id massa porta suscipit at vitae nunc. Fusce porta fermentum enim non viverra.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at aliquet sapien. Pellentesque bibendum felis quis nulla pulvinar, luctus lobortis turpis venenatis. Phasellus imperdiet neque neque, in condimentum nisi fringilla et. Nam aliquet justo nunc, et semper nunc hendrerit in. Suspendisse potenti. Nam lectus purus, ullamcorper aliquet aliquet eu, malesuada nec nulla. Etiam dui eros, interdum a diam non, tempus vestibulum lorem. Nulla facilisi. Pellentesque et purus non dolor semper eleifend eget eget sem. Sed gravida pharetra varius. Aenean elementum sapien in mi finibus dictum.",
    "Suspendisse convallis ligula sit amet magna vestibulum, nec accumsan leo fringilla. Vestibulum varius iaculis lacus, mattis tempor velit feugiat ac. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed imperdiet lorem purus, ut elementum dui faucibus ac. Morbi mollis ligula eget purus mollis congue. Phasellus varius vulputate lacinia. Nunc consectetur nunc ac orci blandit, non lobortis ante porttitor. Etiam ac elit at neque suscipit laoreet. Maecenas quam lacus, iaculis a condimentum nec, dignissim pretium massa. In mattis commodo posuere. Vivamus pretium ac tellus vel finibus. Sed condimentum dignissim pretium. Mauris consequat mi non nisl efficitur hendrerit. Curabitur ut sollicitudin leo."
  ],
  "Yesterday": [
    "Suspendisse convallis ligula sit amet magna vestibulum, nec accumsan leo fringilla. Vestibulum varius iaculis lacus, mattis tempor velit feugiat ac. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed imperdiet lorem purus, ut elementum dui faucibus ac. Morbi mollis ligula eget purus mollis congue. Phasellus varius vulputate lacinia. Nunc consectetur nunc ac orci blandit, non lobortis ante porttitor. Etiam ac elit at neque suscipit laoreet. Maecenas quam lacus, iaculis a condimentum nec, dignissim pretium massa. In mattis commodo posuere. Vivamus pretium ac tellus vel finibus. Sed condimentum dignissim pretium. Mauris consequat mi non nisl efficitur hendrerit. Curabitur ut sollicitudin leo.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at aliquet sapien. Pellentesque bibendum felis quis nulla pulvinar, luctus lobortis turpis venenatis. Phasellus imperdiet neque neque, in condimentum nisi fringilla et. Nam aliquet justo nunc, et semper nunc hendrerit in. Suspendisse potenti. Nam lectus purus, ullamcorper aliquet aliquet eu, malesuada nec nulla. Etiam dui eros, interdum a diam non, tempus vestibulum lorem. Nulla facilisi. Pellentesque et purus non dolor semper eleifend eget eget sem. Sed gravida pharetra varius. Aenean elementum sapien in mi finibus dictum.",
    "In dictum ipsum id nisi pretium, a interdum magna blandit. Etiam laoreet semper est eu scelerisque. Donec ligula diam, vestibulum et nisi sit amet, faucibus faucibus augue. Cras sed quam ante. Vivamus nulla nulla, condimentum nec ligula ac, feugiat tincidunt est. Etiam laoreet, nibh nec mollis lacinia, lorem libero congue nulla, ut euismod arcu sem eu orci. Etiam in consequat mauris. Etiam tempor a turpis eget vehicula. Sed id nisl blandit, luctus lorem vitae, placerat risus. Vestibulum ut sollicitudin tellus, non porta augue. Nulla enim metus, vestibulum sed nibh a, ultricies fringilla diam. Fusce suscipit congue porta. Nullam sagittis, lorem eget ultrices tristique, augue lorem varius sapien, id sollicitudin nisl quam in lorem. Nam neque dui, gravida ut gravida non, volutpat sed nibh. In in elit id massa porta suscipit at vitae nunc. Fusce porta fermentum enim non viverra.",
  ],
  "Tomorrow": [
    "Coming soon!"
  ],
}

@app.route("/")
def index():
    return app.send_static_file("index.html")

@app.route("/posts", methods=["GET"])
def listPosts():
  print(json.dumps(list(BLOGPOSTS.keys())))
  return json.dumps(list(BLOGPOSTS.keys()))

# use /post?title=TheTitle
@app.route("/post", methods=["GET"])
def getText():
    sleep(2)
    title = request.args.get("title", "")
    paragraphs = BLOGPOSTS.get(title, [])
    return json.dumps(paragraphs)

if __name__ == "__main__":
    app.run(debug=True)