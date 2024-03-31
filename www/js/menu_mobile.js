document.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.getElementById("Menu_mobile_png");
    var menu_mobile = document.querySelector(".menu_mobile");
    var buttonSous1 = document.querySelector(".a_sous_menu1 ");
    var menuSous1 = document.querySelector(".sous_menu1 ");
    var buttonSous2 = document.querySelector(".a_sous_menu2 ");
    var menuSous2 = document.querySelector(".sous_menu2 ");


    console.log(menuButton);
    console.log(menu_mobile);
    console.log(buttonSous1);
    console.log(menuSous1);
    console.log(buttonSous2);
    console.log(menuSous2);

    menuButton.addEventListener("click", function() {
        console.log("Menu button clicked");
        if (menu_mobile.style.display === "none") {
            menu_mobile.style.display = "flex";
        } else {
            menu_mobile.style.display = "none";
        }
    });

    buttonSous1.addEventListener("click", function() {
        console.log("Submenu button clicked");
        menuSous1.classList.toggle("show");
    });
    buttonSous2.addEventListener("click", function() {
        console.log("Submenu button clicked");
        menuSous2.classList.toggle("show");
    });
});


