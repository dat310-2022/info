function increment(){
    let counter = 0;

    // get all cookies
    let cookies = document.cookie.split(";");
    for (let i=0; i< cookies.length; i++){
        let cookie = cookies[i];
        // for counter cookie, set counter.
        if (cookie.split("=")[0].trim() == "counter"){
            counter = parseInt(cookie.split("=")[1]);
        }
    }

    // increment counter
    counter++;

    // store counter
    document.cookie = "counter=" + counter.toString();

    // set another cookie (does not erase the counter)
    document.cookie = "other=brr";

    // update display:
    document.getElementById("count").innerText = counter;
}