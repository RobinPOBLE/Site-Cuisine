/*Js pour un effet de remonter plus doux pour le bouton "retour haut de page"*/

window.onload = () => {
    const topButton = document.querySelector('.top');
    topButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
};