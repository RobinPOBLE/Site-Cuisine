document.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.getElementById("Menu_mobile_png");
    var menu_mobile = document.querySelector(".menu_mobile");
    var buttonSous = document.querySelector(".a_menuSous");
    var menuSous = document.querySelector(".menuSous");
    menuButton.addEventListener("click", function() {
        if (menu_mobile.style.display === "none") {
            menu_mobile.style.display = "flex";
        } else {
            menu_mobile.style.display = "none";
        }
    });

    buttonSous.addEventListener("click", function() {
        menuSous.classList.toggle("show");
    });
});


