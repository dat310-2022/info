contacts = new Array();

async function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let form = document.getElementById("loginform");
    form.style.display = "none";

    let response = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password})
    });
    if (response.status != 200){
        form.style.display = "block";
        alert("Wrong username or password!");
        return
    }
    let user = await response.json();
    let logoutform = document.getElementById("logoutform");
    logoutform.style.display = "block";
    document.getElementById("loggedinname").innerText = user.username;
    
    // an alternative to this call would be 
    // returning the addresses as a field of the user
    getAddresses();
}

async function logout(){
    let response = await fetch("/logout")
    if (response.status != 200){
        alert("Failed to log out!");
        return
    }

    let form = document.getElementById("loginform");
    form.style.display = "block";
    let logoutform = document.getElementById("logoutform");
    logoutform.style.display = "none";
    document.getElementById("address-wrapper").style.display = "none";
}

// try if there is a user logged in
async function getUser(){
    let response = await fetch("/user")
    if (response.status == 404){
        console.log("No user logged in!")
        return
    }
    if (response.status == 200){
        let user = await response.json();
        let logoutform = document.getElementById("logoutform");
        logoutform.style.display = "block";
        document.getElementById("loggedinname").innerText = user.username;

        let form = document.getElementById("loginform");
        form.style.display = "none";
        // an alternative to this call would be 
        // returning the addresses as a field of the user
        getAddresses();
    }
}

async function getAddresses(){
    let response = await fetch("/addresses");
    if (response.status != 200){
        alert("Failed to get addresses");
        return
    }
    let result = await response.json();
    result.forEach((address)=>{
        contacts.push(new Entry(address.id,address.name,address.tel, address.email));
    });
    document.getElementById("address-wrapper").style.display = "block";
    displayEntries();
}

async function storeAddress(address){
    let response = await fetch("/addresses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(address)
    });
    if (response.status == 200){
        let newid = await response.text();
        return newid;
    }
    return "-1";
}

async function updateAddress(address){
    let url = "/addresses/" + address.id;

    let response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(address)
    });
    if (response.status != 200){
        console.log("Error saving changes.")
        return false;
    }
    return true;
}

async function deleteAddress(address){
    let url = "/addresses/" + address.id;
    let response = await fetch(url, {
        method: "DELETE",
    });
    if (response.status != 200){
        console.log("Error deleting contact.")
        return false;
    }
    return true;
}