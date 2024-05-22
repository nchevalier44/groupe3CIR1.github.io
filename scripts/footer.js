
let numberPhone = document.getElementsByClassName("numberPhone");



function copyPasteAndCall(){
    let fenetre;
    for(let i=0;i<4;i++){
        numberPhone[i].addEventListener(`copy`,() =>{       //dès qu'un numéro de téléphone est copié, la fonction anonyme s'exécute
            fenetre = prompt("Si vous voulez appeler ce numéro : " +numberPhone[i].textContent+ " entrez le de nouveau dans le champ ci-dessous puis validez ");
            if(fenetre == numberPhone[i].textContent){      
                console.log("Vous appellez ce numéro: "+numberPhone[i].textContent);
                ringtone();
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
    document.body.appendChild(audio);
    setTimeout(()=>{                        //fonction anonyme pour supprimer le son
        let audioToRemove = document.getElementById("audio-id");
        audioToRemove.remove();          //Pour supprimer le div audio et donc arrêter la sonnerie 
    },6000);                            //Délai de 5s puis le son est supprimé 

}
    





copyPasteAndCall();

//Affichage du temps passé sur la page

let time = 0;
function countTime(){ //Calcul du temps
    time++;
}


function timeSpent(){ //Affichage du temps 
    let e = document.getElementsByClassName('TimeSpent')[0];
    
    e.nextElementSibling.remove();
    let txt = document.createElement('p');
    txt.style.justifyContent = 'center';
    if(time<60){
        txt.innerHTML = "Temps passé sur la page : " + time + " secondes";
    }
    if(time>=60){
        let minutes = Math.floor(time/60);
        txt.innerHTML =  "Temps passé sur la page : " + minutes + " minutes et " + time%60 + " secondes";
    }
    if(time>=3600){
        let heures = Math.floor(time/3600);
        let minutes = Math.floor((time-3600*heures)/60);
        txt.innerHTML =  "Temps passé sur la page : " + heures + " heures et " + minutes + " minutes et " + time%60 + " secondes";
    }
    
    e.after(txt);
}

setInterval(countTime,1000);
setInterval(timeSpent,1000);


