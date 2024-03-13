    const lien_modal1 = document.getElementById('Image_profil');
    var modal1 = document.getElementById('modal1');
    modal1.style.display="none";
    lien_modal1.addEventListener('click', () => {
        if(modal1.style.display === "none"){
            modal1.style.display="block";  
        }
        else{
            modal1.style.display="none";   
        }
    });


