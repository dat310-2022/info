/**
 * This file is part of Exercise #1
 */

async function checkUsername(username) {
    
    // TODO create url including encoded username
    let url = ''

    let reply = await fetch(url);
    if (reply.status == 200){
        let result = await reply.text();
        // TODO complete
    }
}