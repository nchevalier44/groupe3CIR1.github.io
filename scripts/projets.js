
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
    let topPage = document.getElementById("membres-nav"); //pour se rendre en haut de la page on prend par exemple un élément de la navbar car il se situe en haut de la page, ici on a pris membres-nav 
    arrow.addEventListener("click", () =>{
        topPage.scrollIntoView({ behavior: 'smooth'});  //scrollIntoView permet de scroll automatiquement dans la page vers l'élément topPage
    });

    arrow.addEventListener("mouseenter",()=>{
        arrow.style.cursor = "pointer";              //Fonction anonyme pour changer le style du pointeur quand on passe la souris sur la flèche
    })
}


arrowDown();


//IMAGES PROJETS

function switchImage(){

    let img1 = document.getElementById("img-projet1");  
    let img2 = document.getElementById("img-projet2"); 
    let img3 = document.getElementById("img-projet3"); 

    img1.addEventListener("click",() =>{
        if(img1.src.endsWith("images/logos/castel.png")){       //on utilise la méthode endsWith qui renvoie true si ici la source de l'image est bien celle de l'image originale
            img1.src = "images/img-projet1-switch.jpg";         //si oui alors on la modifie en changeant la source
        }
        else{
            img1.src = "images/logos/castel.png";               //sinon on garde/remet l'image originale
        }
    });

    //même méthode
    
    img2.addEventListener("click",() =>{
        if(img2.src.endsWith("images/img-projet2.jpg")){
            img2.src = "images/img-projet2-switch.jpg";
        }
        else{
            img2.src = "images/img-projet2.jpg";
        }
    });

    img3.addEventListener("click",() =>{
        if(img3.src.endsWith("images/img-projet3.jpg")){
            img3.src = "images/img-projet3-switch.jpg";
        }
        else{
            img3.src = "images/img-projet3.jpg";
        }
    });


}

switchImage();