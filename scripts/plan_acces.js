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




//Affichage du temps passé sur la page

let i = 0;
function countTime(){ //Calcul du temps
    i++;
}


function timeSpent(){ //Affichage du temps 
    let e = document.getElementsByClassName('TimeSpent')[0];
    
    e.nextElementSibling.remove();
    let txt = document.createElement('p');
    txt.style.justifyContent = 'center';
    if(i<60){
        txt.innerHTML = "Temps passé sur la page : " + i + " secondes";
    }
    if(i>=60){
        let minutes = Math.floor(i/60);
        txt.innerHTML =  "Temps passé sur la page : " + minutes + " minutes et " + i%60 + " secondes";
    }
    if(i>=3600){
        let heures = Math.floor(i/3600);
        let minutes = Math.floor((i-3600*heures)/60);
        txt.innerHTML =  "Temps passé sur la page : " + heures + " heures et " + minutes + " minutes et " + i%60 + " secondes";
    }
    
    e.after(txt);
}

setInterval(countTime,1000);
setInterval(timeSpent,1000);