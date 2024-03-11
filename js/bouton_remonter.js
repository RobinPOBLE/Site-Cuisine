/*Js pour un effet de remonter plus doux pour le bouton "retour haut de page"*/

const top=document.querySelector('.top');


top.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
});