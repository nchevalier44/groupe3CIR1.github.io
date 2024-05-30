//Zoom x2 sur l'image des compétences de l'équipe

function zoomCompetences(){
    let competences = document.getElementById("competences");
    if(competences.style.transform == "" || competences.style.transform == "scale(1, 1) translate(0px, 0px)"){ //Si ce sont les paramètres initiales
        competences.style.transform = "scale(2, 2) translate(-23%, 0)"; //Zoomer x2 et le mettre au milieu de la page pour qu'il soit visible
        competences.style.cursor = "zoom-out";
        let f = document.getElementsByClassName("flou");
        for(let i = 0; i<f.length; i++){
            f[i].style.filter = "blur(5px)"; //Ajouter un filtre flou à tous les autres éléments
        }
    } else{ //Si l'image est déjà agrandi
        competences.style.transform = "scale(1, 1) translate(0, 0)"; //Réinitialiser au zoom et à la position de départ
        competences.style.cursor = "zoom-in";
        let f = document.getElementsByClassName("flou");
        for(let i = 0; i<f.length; i++){
            f[i].style.filter = "blur(0)"; //Enlever le filtre flou
        }
    }
}
function initZoom(){
    let competences = document.getElementById("competences");
    competences.style.cursor = "zoom-in";
    competences.addEventListener("click", zoomCompetences);
}

initZoom();




//Animation : Qui sommes-nous ?

function effaceQuiSommesNous(){
    let n = texte.length;

    //Efface toutes les 100 ms une lettre et relance 1s après l'animation
    let inter = setInterval(function() {
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
        //Ajoute tous les mots
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

//Initialisation de la balise paragraphe contenant le texte "Qui sommes-nous ?"
let quiSommesNous = document.createElement("p");
let logoLabIsen = document.getElementById("labisen-logo");
document.body.insertBefore(quiSommesNous, logoLabIsen);
quiSommesNous.style.fontFamily = "Lohit Devanagari";
quiSommesNous.style.textAlign = "center";
quiSommesNous.style.fontSize = "5vw";
quiSommesNous.style.fontWeight = "bold";
quiSommesNous.style.marginTop = "5%";
quiSommesNous.className = "flou";

//Ajouts des propriétés de la translation et de l'animation
quiSommesNous.style.transitionDuration = "1.5s";
quiSommesNous.style.transitionProperty = "transform";

//Définition des variables globales pour ne pas les re-définir dans chaque fonctions
let texte = "Qui sommes-nous ?";
let texteTab = ["Qui ", "sommes", "-", "nous ", "?"];
let i = 0;
let interval = setInterval(animationQuiSommesNous, 1000); //Commence l'animation et ajoute un mot toutes les secondes