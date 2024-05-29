

function createModalWindow(){
    //on crée le conteneur de la fenetre modale 

    let modalContainer = document.createElement("div");
    let imgModal1 = document.getElementById("img_livinglab");
    let imgModal2 = "images/imgPlateforme"
    let modalTitle = document.getElementById("sous-titre");
    let modalText1 = document.getElementsByClassName("texte-living-lab")[0];
    let modalText2 = document.getElementsByClassName("texte-environnement")[0];

    modalContainer.appendChild(imgModal);
    
    modalContainer.innerHTML
    
    modalContainer.id = "modal-container";



    modalContainer.style.display = "none";

    
}

function OpenModalWindow(){
    let title = document.getElementById("sous-titre");  //les titres sur lequels il faut cliquer pour ouvrir la modale 
    title.addEventListener("click", () =>{

    });
}
