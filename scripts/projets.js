
function flecheBasDePage(){
    let fleche = document.createElement("img");
    fleche.src = "images/icones/arrow_up.svg";
    let lastElement = document.getElementsByClassName("barre")[0];
    lastElement.appendChild(fleche); 

}