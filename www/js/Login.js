const valid=false;
const form = document.getElementById("Login_body");
const username = document.getElementById("username");
const password = document.getElementById("userpwd");

username.addEventListener("input", checkUsername);
password.addEventListener("input", checkPassword);

form.addEventListener("submit",checkAll);




function checkUsername() {
    let value = username.value;
    let isOkay=false;
    if (value.length>5) {
        isOkay=true;
    }
    if (!isOkay) {
        username.className = "invalid";
    }
    else {
        username.className = "valid";
    }
    return isOkay
}


function checkPassword() {
    let value = password.value;
    let isOkay=false;
    /*
    Vérifie la présence des caractères requis dans le string puis vérifie que le mot de passe
    contient au moins 12 caractères non vides
    */
    let regex = /((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\(\_\-\;\:\!\?\.\/\*\&\$\)]))\s*.{12,}/ 
    if (value.match(regex)!=null) {
        isOkay = true;
    }
    if (!isOkay) {
        password.className = "invalid";
    }
    else {
        password.className = "valid";
    }
    return isOkay;
}

function checkAll(event) {
    let req = new XMLHttpRequest();
    let hasError = false;
    let str ="username="+username.value+"&userpwd="+password.value;
    req.open("POST", "../htbin/login.py",true)
    req.send(str)
    console.log(str)
    console.log(req.responseText)
    console.log(req.readyState)
    console.log(req.status)
    if (req.responseText=='Le nom d\'utilisateur ne doit pas être vide.' || req.responseText=='Le mot de pass ne doit pas être vide.' || req.responseText=='Le nom d\'utilisateur et le mot de pass sont invalides.' ) {
        event.preventDefault();
        if (this.readyState==4 && this.status==200) {
            document.getElementById(error_log).innerHTML = req.responseText;
        }
    }
    else {
        event.preventDefault();
        req.onreadystatechange = function() {
            if (this.readyState==4 && this.status==200) {
                document.getElementById("error_log").innerHTML = req.responseText;
            }
            else {
                console.log(this.readyState);
                console.log(this.status);
            }
        }
        
    }

}
