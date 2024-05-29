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
let membresNav = document.getElementById("membres-nav");

function naviguateToMembres(){
    membresNav.addEventListener("click",() =>{
        let confirm = window.confirm("Aller à la page membres ?");
        if(confirm){
            console.log("test");
            window.location = 'membres.html';
        }
        console.log(window.location);
       
    });
}

naviguateToMembres();

