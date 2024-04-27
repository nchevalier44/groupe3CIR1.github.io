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




//Animation : Qui sommes-nous ?

function effaceQuiSommesNous(){
    let n = texte.length;
    let inter = setInterval(function() {
        console.log(n);
        if(n >= 0){
            quiSommesNous.innerText = quiSommesNous.textContent.substring(0, n);
            n--;
        } else{
            clearInterval(inter);
            interval = setInterval(animationQuiSommesNous, 1000);
        }
    }, 100);
}

function animationQuiSommesNous(){
    if(i < texteTab.length){
        quiSommesNous.innerText = quiSommesNous.textContent.concat(texteTab[i]);
        i++;
    } else{
        //Fait l'animation de la translation
        clearInterval(interval);
        quiSommesNous.style.transform = "translate(25%, 0)";
        setTimeout(function() {
            quiSommesNous.style.transform = "translate(-25%, 0)";
        }, 1500);
        setTimeout(function() {
            quiSommesNous.style.transform = "translate(0, 0)";
        }, 3000);
        i = 0;
        setTimeout(effaceQuiSommesNous, 6000);
    }
}

let quiSommesNous = document.createElement("p");
let logoLabIsen = document.getElementById("labisen-logo");
document.body.insertBefore(quiSommesNous, logoLabIsen);
quiSommesNous.style.fontFamily = "Lohit Devanagari";
quiSommesNous.style.textAlign = "center";
quiSommesNous.style.fontSize = "5vw";
quiSommesNous.style.fontWeight = "bold";
quiSommesNous.style.marginTop = "5%";

//Ajouter les propriétés pour la translation et animation
quiSommesNous.style.transitionDuration = "1.5s";
quiSommesNous.style.transitionProperty = "transform";

let texte = "Qui sommes-nous ?";
let texteTab = ["Qui ", "sommes", "-", "nous ", "?"];
let i = 0;

//Affiche mot par mot toutes les secondes
let interval = setInterval(animationQuiSommesNous, 1000);


