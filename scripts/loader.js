loading();

function createLoader(){

    let body = document.body;


    //Creation du fond de chargement
    let div2 = document.createElement("div");
    
    body.insertBefore(div2, body.firstChild);
    div2.setAttribute("class", "loader");
    div2.style.height = "100%";
    div2.style.width = "100%";
    div2.style.position = "absolute";
    div2.style.backgroundColor = "#2C3531";
    div2.style.display = "flex";
    div2.style.flexDirection = "column";
    div2.style.justifyContent = "center";
    div2.style.alignItems = "center";




    //Creation de l'animation du chargement

    //Image LABIsen
    let img = div2.appendChild(document.createElement("img"));
    img.setAttribute("class", "img");
    img.setAttribute("src", "images/LabISEN.png");
    img.style.marginTop ="0px";
    img.style.height = "30%";
    img.style.width = "60%";
    img.style.textAlign = "center";
    

    
    //LETTRES CHARGEMENT
    
    let divLetter = div2.appendChild(document.createElement("div"));
    divLetter.setAttribute("class", "letters");
    let c = ['C', 'H', 'A', 'R', 'G', 'E', 'M', 'E', 'N', 'T'];
    let count = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1];
    for(let i = 0; i < 10 ; i++) {
        let letter = divLetter.appendChild(document.createElement("span"));
        letter.innerHTML = c[i];
        letter.setAttribute("class", "letter");
        
        
    }
    divLetter.style.marginTop ="50px";
    divLetter.style.letterSpacing ="10px"

    
    



    //CERCLE
    let divCircle = div2.appendChild(document.createElement("div"));
    divCircle.setAttribute("class", "circle");
    divCircle.style.top = "0";
    divCircle.style.left = "0";
    divCircle.style.marginTop ="100px";
    divCircle.style.height = "100px";
    divCircle.style.width = "100px";
    divCircle.style.border = "4px solid #116466";
    divCircle.style.borderRadius = "50%";
    divCircle.style.borderTop = "4px solid #D9B08C";
    divCircle.style.animation = "rotate 2s linear infinite";
    
}

function loading(){ //Cette fonction cache le contenu de la page le temps d'afficher le loading screen
    let childrend = document.body.children;
    let n = childrend.length;

    for(let i = 0; i < n; i++){ //Pour chaque element de la page, on ne l'affiche pas
        childrend[i].style.display  = "none";
    }

    createLoader();

    setTimeout(function(){ //On ré-affiche le contenu à l'issu du chargement
        for(let i = 1; i < n+1; i++){
            childrend[i].style.display = "";
        }
        document.querySelector(".loader").classList.add("fondu-out");
        setTimeout(function(){
            childrend[0].style.display = "none";},1000);
        
    }, 2500);

    

}


