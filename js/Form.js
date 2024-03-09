const valid=false;
const form = document.getElementById("Form_body");
const date = document.getElementById("Date");
const username = document.getElementById("Username");
const email = document.getElementById("Email");
const password = document.getElementById("Password");
const surname = document.getElementById("Last Name");
const firstname = document.getElementById("First Name");

date.addEventListener("input", checkDate);
username.addEventListener("input", checkUsername);
email.addEventListener("input", checkEmail);
password.addEventListener("input", checkPassword);
surname.addEventListener("input", checkSurname);
firstname.addEventListener("input", checkName);

form.addEventListener("submit",checkAll);

function checkName() {
    let isOkay = false;
    let value = firstname.value;
    if (value.length>0) {
        isOkay = true;
    }
    if (!isOkay) {
        firstname.className = "invalid";
    }
    else {
        firstname.className = "valid";
    }
    return isOkay;
}

function checkSurname() {
    let isOkay = false;
    let value = surname.value;
    if (value.length>0) {
        isOkay=true;
    }
    if (!isOkay) {
        surname.className = "invalid";
    }
    else {
        surname.className = "valid";
    }
    return isOkay;
}

function checkDate() {
    let isOkay = false;
    let cur = new Date();
    let value2='';
    let value1 = date.value;
    console.log("value 2 init :",value2);
    if (value1.length>0) {
        let value2 = value1.slice(3,5)+'/'+value1.slice(0,2)+'/'+value1.slice(-4);
        let curY = cur.getFullYear();
        let curM = cur.getMonth();
        let curD = cur.getDate()

        let value = new Date(Date.parse(value2));
        let valY = value.getFullYear();
        let valM = value.getMonth();
        let valD = value.getDate();

        console.log("value 1 :",value1);
        console.log("value 2 :",value2);
        console.log("value1.slice(3,4) :",value1.slice(3,4));
        console.log("value1.slice(0,2) :",value1.slice(0,2));
        console.log("value1.slice(-4) :",value1.slice(-4));
        console.log("value :",value);
        console.log("valD :",valD);
        console.log("valM :",valM);
        console.log("valY :",valY);
        console.log("valY/4 :",valY/4);

        if (value == "Invalid Date" || valD<0 || valD>31 || valY>curY || valY<curY-150 || (valD>30 && valM%2!=0) ||
        (valY==curY && valM>curM) || (valY==curY && valM==curM && valD>curD) ||
        (valD>29 && valM==1) || (value1.slice(0,2)=="29" && value1.slice(3,5)=="02" && (valY%4!=0 || (valY%100==0 && valY%400!=0)))) {
            isOkay=false;
        }
        else {
            isOkay=true;
        }
    }
    if (!isOkay) {
        date.className = "invalid";
    }
    else {
        date.className = "valid";
    }
    return isOkay;


}

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

function checkEmail() {
    let value = email.value;
    let isOkay=false;
    /* vérifie que l'email commence par un caractère non spécial, accepte ensuite un nombre infini 
    de caractères alpahbumériques et _, accepte ensuite un nombre infini de caractères spéciaux,
    vérifie qu'il n'y a pas de caractère spécial avant le @ de l'email, accepete ensuite un nombre infini
    de caractères alphanumériques suivis de 0 ou 1 tiret ou . et ce un nombre infini de fois,
    enfin vérifie la présence d'un point suivi de 2 ou 3 lettres */
    let regex = /[A-Za-z0-9]+\w*[!#$%&\'\\\*\+\-/=\?\^_`{\|]*[^@!#$%&\'\\\*\+\-/=\?\^_`{\|]*\@[[A-Za-z0-9]*[\-.]?]*\.[a-z]{2,3}/;
    if (value.match(regex)) {
        isOkay = true;
    }
    if (!isOkay) {
        email.className = "invalid";
    }
    else {
        email.className = "valid";
    }
    return isOkay;
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

    let hasError = false;
    let str ="";
    if (!checkSurname()) {
        str+="Entrez un Nom !";
    }
    if (!checkName()) {
        if (hasError) {
            str+="\n";
        }
        str+="Entrez un prénom !";
    }
    if (!checkDate()) {
        if (hasError) {
            str+="\n";
        }
        str+="Entrez une date valide !";
    }
    if (!checkUsername()) {
        if (hasError) {
            str+="\n";
        }
        str+="Entrez un no; d'utilisateur correct !";
    }
    if (!checkEmail()) {
        if (hasError) {
            str+="\n";
        }
        str+="Entrez un email correct !";
    }
    if (!checkPassword()) {
        if (hasError) {
            str+="\n";
        }
        str+="Entrez un mot de passe correct !";
    }
    if (hasError) {
        alert(str);
    }

}
