
function arrowDown(){
    let divArrow = document.createElement("div");       //div pour contenir la flèche en bas de page
    let arrow = document.createElement("img");
    arrow.src = "images/icones/arrow_up.svg";
    let lastElement = document.getElementsByClassName("barre")[5];  //on veut faire apparaître la flèche en bas de page, donc on va la faire apparaître dans un div en dessous notre dernière barre sur la page
    lastElement.appendChild(divArrow);                  //le div devient enfant de la barre 
    divArrow.appendChild(arrow);                        //puis la flèche (img) devient enfant de ce div

    //style de la flèche, on modifie le css
    arrow.style.width = "80px";
    arrow.style.backgroundColor = "#116466";
    divArrow.style.display = "flex";
    divArrow.style.justifyContent = "center";
    divArrow.style.alignItems = "center";
    arrow.style.marginTop = "20px";
    arrow.style.borderRadius = "30%";
    
    //remonter en haut de la page quand on clique sur la flèche
    let topPage = document.getElementById("membres-nav"); //pour se rendre en haut de la page on prend par exemple un élément de la navbar
    arrow.addEventListener("click", () =>{
        topPage.scrollIntoView({ behavior: 'smooth'});  //scrollIntoView permet de scroll automatiquement dans la page vers l'élément topPage
    });
}


arrowDown();