function updatePlace(place){
    document.getElementById("place").value = place;
}

async function getPlace(postcode){
    let url = "/getplace?postcode=" + postcode;
    let response = await fetch(url);
    if (response.status == 200){
        let result = await response.text();
        updatePlace(result);
    }
}