/**
 * This file is part of Exercise #2
 */

async function lookup(item_id) {
    if (item_id.length == 3) { /* if item id is 3 digits */
        let reply = await fetch("/inventory?item_id=" + item_id);
        if (reply.status==200){
            // TODO parse JSON response

            // TODO fill in form fields
        }
    }
    else {
        /* clear form values */
        document.getElementById("name").value = "";
        document.getElementById("brand").value = "";
        document.getElementById("size_x").value = "";
        document.getElementById("size_y").value = "";
        document.getElementById("size_z").value = "";
        document.getElementById("price").value = "";
        document.getElementById("available").checked = false;
    }
}

