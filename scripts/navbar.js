//CLIC SUR LE LOGO LABISEN

function logoOnClick(){
    let logo = document.getElementById("labisen-nav");
    logo.addEventListener("click",()=>{
        window.location = 'index.html';             //Pour être dirigé vers l'accueil quand on clique sur logo
    });
    logo.addEventListener("mouseenter",()=>{
        logo.style.cursor = "pointer";              //Fonction anonyme pour changer le style du pointeur quand on passe sur le logo
    })
}

logoOnClick();

//HORLOGE NAVBAR

//appeler l'heure locale

clock();

//Fonction pour afficher l'heure
function clock() {

    //Heures absolues
    const date =  new Date();
    const hours = ((date.getHours() +11 ) % 12 + 1);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
   

    //Heure degré
    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;


    //Afficher l'heure
    document.querySelector('.heure').style.transform =
     `rotate(${hour}deg)`;
    document.querySelector('.minute').style.transform = 
    `rotate(${minute}deg)`;
    document.querySelector('.seconde').style.transform =
    `rotate(${second}deg)`;

}

//Interval 
setInterval(clock,1000);


//Naviguation dans la page membres

function naviguateToMembres(){
    try{
        let membresNav = document.getElementById("membres-nav");
        membresNav.addEventListener("click",() =>{
            let confirm = window.confirm("Aller à la page membres ?");
            if(confirm){
                window.location = 'membres.html';
            }
            else{
                window.location ='';
            }
        });
    } catch(error){
        //do nothing
    }
    
}

naviguateToMembres();


//Génère un message dans la console lorsque l'utilisateur essaye de copier un élement de la page
document.body.setAttribute("oncopy", "logCopy()");

function logCopy() {
    console.log("Be aware when you are copying thing that dont belongs to you !");
}

//Change le fond d'un boutton de la nav-barre lorsqu'il est pressé

let itemNav = document.getElementsByClassName("item-nav");

for(let i = 0; i<itemNav.length; i++){
    itemNav[i].addEventListener("click",()=>{
        itemNav[i].style.backgroundColor = "rgb(255, 255, 255)";
        itemNav[i].style.color = "rgb(0, 0, 0)";
    });
}








//Positioner les sous-menus des onglets recherche et infos/contact à la bonne position
let menu_infos_contact = document.getElementById("infos-contact-nav");
let ul_infos_contact = menu_infos_contact.lastElementChild;
ul_infos_contact.style.left = window.getComputedStyle(menu_infos_contact).left;

let menu_recherche = document.getElementById("recherche-nav");
let ul_recherche = menu_recherche.lastElementChild;
ul_recherche.style.left = window.getComputedStyle(menu_recherche).left;