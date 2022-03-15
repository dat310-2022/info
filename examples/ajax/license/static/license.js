async function checkLicense(){
    var name = document.getElementById("name").value;
    var license = document.getElementById("license").value;

    let response = await fetch("/check_license",{
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "name=" + name + "&license=" + license
    });
    if (response.status == 200){
        let result = await response.text()
        document.getElementById("license_check").innerHTML = result;
    }
}