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
    event.preventDefault();
    let req = new XMLHttpRequest();
    let str ="username="+encodeURIComponent(username.value)+"&userpwd="+encodeURIComponent(password.value);
    req.open("POST", "../htbin/login.py", true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    req.onreadystatechange = function() {
        if (req.readyState == 4) {
            if (req.status == 200) {
                console.log(req.responseText)
                if (req.responseText.includes('Le nom d\'utilisateur ne doit pas être vide.') || req.responseText.includes('Le mot de pass ne doit pas être vide.') || req.responseText.includes('Le nom d\'utilisateur et le mot de pass sont invalides.')) {
                    document.getElementById("error_log").innerHTML = req.responseText;
                } else {
                    // Success case handling
                    document.getElementById("error_log").innerHTML = req.responseText;
                }
            } else {
                // Handle request error
                console.log("Error:", req.status);
            }
        }
    };
    req.send(str);
}

