/**
 * This file is part of Exercise #2
 */

async function lookup(item_id) {
    if (item_id.length == 3) { /* if item id is 3 digits */
        let reply = await fetch("/inventory?item_id=" + item_id);
        if (reply.status==200){
            let result = await reply.json();
            /* fill in form fields */
            document.getElementById("name").value = result.name;
            document.getElementById("brand").value = result.brand;
            document.getElementById("size_x").value = result.size_x;
            document.getElementById("size_y").value = result.size_y;
            document.getElementById("size_z").value = result.size_z;
            document.getElementById("price").value = result.price;
            document.getElementById("available").checked = result.available;
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