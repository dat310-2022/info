/**
 * This file is part of Exercise #1b
 */

async function checkUsername(username) {
    
    // TODO create url including encoded username
    let url = "/check_username;

    let reply = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "username=" + username
    });
    if (reply.status == 200){
        let result = await reply.text();
        document.getElementById("username_status").innerHTML = result;
    }
}