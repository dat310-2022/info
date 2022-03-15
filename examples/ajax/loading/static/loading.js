async function getResponse() {
    /* display loading bar */
    document.getElementById("status").innerHTML = "<img src='/static/loading.gif' />";
    /* hide button */
    document.getElementById("submit").style.display = "none";

    var pw = document.getElementById("pw").value;
    var vars = "pw=" + pw;

    let reply = await fetch("get_pw", {
        method: "POST",
        headers:{
            "Content-type": "application/x-www-form-urlencoded"
        },
        body: vars
    });
    if (reply.status == 200){
        let hash = await reply.text();
        document.getElementById("status").innerHTML = "MD5: " + hash;
    }
    document.getElementById("submit").style.display = "inline";
}