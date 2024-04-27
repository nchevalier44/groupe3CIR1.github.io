//Zoom x2 sur l'image des compétences de l'équipe

function zoomCompetences(){
    let competences = document.getElementById("competences");
    console.log(competences.style.transform);
    if(competences.style.transform == "" || competences.style.transform == "scale(1, 1) translate(0px, 0px)"){
        competences.style.transform = "scale(2, 2) translate(-25%, 0)"; //Zoomer x2 et le mettre au milieu de la page pour qu'il soit visible
        competences.style.cursor = "zoom-out";
    } else{
        competences.style.transform = "scale(1, 1) translate(0, 0)"; //Réinitialiser au zoom et à la position de départ
        competences.style.cursor = "zoom-in";
    }
}

let competences = document.getElementById("competences");
competences.style.cursor = "zoom-in";
competences.addEventListener("click", zoomCompetences);

