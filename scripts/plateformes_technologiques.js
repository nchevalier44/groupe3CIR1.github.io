
let modalContainer = document.querySelector(".modal-container");
let modalTriggers = document.querySelector(".modal-trigger");


function modalTrigger(){
    modalTriggers.forEach(trigger => trigger.addEventListener("click",toggleModal)); //addEventListener permet d'appliquer la fonction toggleModal à chaque clic de l'utilisateur
}

function toggleModal(){
    modalContainer.classList.toggle("active");   //gérér l'ajout ou la suppression d'une classe active(qui va rendre notre page ouverte ou fermée)
}

