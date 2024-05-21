
let numberPhone = document.getElementsByClassName("numberPhone");



function copyPasteAndCall(){
    let fenetre;
    for(let i=0;i<4;i++){
        numberPhone[i].addEventListener("copy",() =>{
            fenetre = prompt("Si vous voulez appeler ce numéro : " +numberPhone[i].textContent+ " entrez le de nouveau dans le champ ci-dessous puis validez ");
            if(fenetre == numberPhone[i].textContent){      
                console.log("Vous appellez ce numéro: "+numberPhone[i].textContent);
                ringtone();
            }
            else{
                console.log("Vous n'avez pas saisi un numéro valable, merci de réessayer")
            }
        });
    }
        
}

function ringtone(){
    let audio = new Audio("/audio/SonnerieMichael.mp3");
    audio.play();
}

/*function call(){
    if(copyPaste == numberPhone[i].textContent){
        console.log("Vous appellez ce numéro: "+numberPhone[i].textContent);
        let audio = new Audio("groupe3CIR1.github.io/audio/Michael ringtone GTA 5 sound effect.mp3/");
        audio.play();
    }
    
}*/

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


