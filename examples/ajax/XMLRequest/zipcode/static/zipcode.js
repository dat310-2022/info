function updatePlace(place){
    document.getElementById("place").value = place;
}

function getPlace(postcode){
    let url = "/getplace?postcode=" + postcode;
    ajaxGET(url, updatePlace)
}


function ajaxGET(url, success){
    var xhr = new XMLHttpRequest();
    /* register an embedded function as the handler */
    xhr.onreadystatechange = function () {
        /* readyState = 4 means that the response has been completed
         * status = 200 indicates that the request was successfully completed */
        if (xhr.readyState == 4 && xhr.status == 200) {
            var result = xhr.responseText;
            success(result);
        }
    };
    /* send the request using GET */
    xhr.open("GET", url, true);
    xhr.send(null);
}