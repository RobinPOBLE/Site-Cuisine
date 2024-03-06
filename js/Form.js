const valid=false;
const form = document.getElementById("Form_body")
const date = document.getElementById("Date")
const username = document.getElementById("Username")
const email = document.getElementById("Email")




function isLetter(value) {
    return ((value.charCodeAt(0)>="A".charCodeAt(0) && 
    value.charCodeAt(0)<="Z".charCodeAt(0)) ||
    (value.charCodeAt(0)>="a".charCodeAt(0) 
    && value.charCodeAt(0)<="z".charCodeAt(0)));
}

function isNumber(value) {
    return (value.charCodeAt(0)>="0".charCodeAt(0) 
    && value.charCodeAt(0)<="9".charCodeAt(0));
}

function isSpecial(value) {
    
}

function checkDate() {

}

function checkUsername() {
    let value = username.value;
    let isOkay=False;
    if (value.length>5) {
        isOkay=True;
    }
    return isOkay
}

function checkEmail() {
    let value = email.value;
    let isOkay=false;
    let cur;
    if (value.length<5) {
        return isOkay;
    }
    if () {
        return isOkay;
    }
    for (let i=0; i<value.length; i++) {
        cur=value[i];
        if (i==0 && value.charCodeAt(0)<"A".charCodeAt(0) || ())
    }

}

