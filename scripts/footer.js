
let numberPhone = document.getElementsByClassName("numberPhone");



function copyPasteAndCall(){
    let fenetre;
    for(let i=0;i<4;i++){
        //numberPhone est un tableau car on a récupéré des classes
        numberPhone[i].addEventListener(`copy`,() =>{       //dès qu'un numéro de téléphone est copié, la fonction anonyme s'exécute
            fenetre = prompt("Si vous voulez appeler ce numéro : " +numberPhone[i].textContent+ " entrez le de nouveau dans le champ ci-dessous puis validez ");
            if(fenetre == numberPhone[i].textContent){      
                console.log("Vous appellez ce numéro: "+numberPhone[i].textContent);        //affiche le numéro concerné
                ringtone();     //fonction pour lancer l'audio (voir en dessous)
            }
            else{
                console.log("Vous n'avez pas saisi un numéro valable, merci de réessayer");
                alert("Vous n'avez pas saisi un numéro valable, merci de réessayer");
            }
        });
    }
        
}


function ringtone(){                                //Pour ajouter la sonnerie et la lancer
    let audio = document.createElement("audio");
    audio.id = "audio-id"
    audio.src = "audio/SonnerieGoofy.mp3";
    audio.autoplay = true;                          //Pour que le son se lance directement après avoir validé dans le prompt
    document.body.appendChild(audio);           //on ajoute la balise audio au body de la page HTML
    setTimeout(()=>{                        //fonction anonyme pour supprimer le son
        let audioToRemove = document.getElementById("audio-id");
        audioToRemove.remove();          //Pour supprimer le div audio et donc arrêter la sonnerie 
    },6000);                            //Délai de 6s (6000ms) puis le son est supprimé 

}
    

copyPasteAndCall();

///////////////////////Affichage du temps passé sur la page/////////////////////



let time = 0;
function countTime(){ //Calcul du temps
    time++;
}


function timeSpent(){ //Affichage du temps 
    let e = document.getElementsByClassName('TimeSpent')[0];
    
    e.nextElementSibling.remove(); //On efface le temps actuel sinon les lignes vont s'additionner sans se retirer
    let txt = document.createElement('p');
    txt.style.justifyContent = 'center';

    //On affiche le temps passé sur la page. On distingue les différents cas soit <60s, >60s<3600s, >3600s
    if(time<60){
        txt.innerHTML = "Temps passé sur la page : " + time + " secondes";
    }
    if(time>=60){
        let minutes = Math.floor(time/60); //La fonction floor permet de récupérer un nombre entier 
        txt.innerHTML =  "Temps passé sur la page : " + minutes + " minutes et " + time%60 + " secondes";
    }
    if(time>=3600){
        let heures = Math.floor(time/3600);
        let minutes = Math.floor((time-3600*heures)/60);
        txt.innerHTML =  "Temps passé sur la page : " + heures + " heures et " + minutes + " minutes et " + time%60 + " secondes";
    }
    
    e.after(txt); //On ajoute le texte
}

setInterval(countTime,1000); //Interval pour compter le temps
setInterval(timeSpent,1000); //Interval pour afficher correctement le temps


