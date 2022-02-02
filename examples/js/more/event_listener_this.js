function handle(element,value){
    if (!value){
        value = "yellow";
    }
    element.style.backgroundColor = value;
}

document.getElementById("red").onclick = function(){ handle(this, "green")};
