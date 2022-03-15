/**
 * This file is part of Exercise #1
 */

async function checkUsername(username) {
    
    // TODO create url including encoded username
    let url = "/check_username?username=" + username;

    let reply = await fetch(url);
    if (reply.status == 200){
        let result = await reply.text();
        document.getElementById("username_status").innerHTML = result;
    }
}