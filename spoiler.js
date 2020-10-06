
// Sélectionner nos éléments
let spoiler = document.querySelector('.btn');
let txt = document.querySelector('.texteCache')
let hidden = true;

// Cacher le message
txt.style.display = "none"; 

// Détecter le clic
spoiler.addEventListener('click', () =>{
    if(hidden){
        spoiler.textContent = "Cacher";
        txt.style.display = "block";
        hidden = false;
    } else {
        spoiler.textContent = "Afficher";
        txt.style.display = "none";
        hidden = true;
    }
});