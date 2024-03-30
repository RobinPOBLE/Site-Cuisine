document.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.getElementById("Menu_mobile_png");
    var mobileMenu = document.querySelector(".menu_mobile");
    
    menuButton.addEventListener("click", function() {
        if (mobileMenu.style.display === "none") {
            mobileMenu.style.display = "flex";
        } else {
            mobileMenu.style.display = "none";
        }
    });
});


