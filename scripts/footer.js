
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
                console.log("Vous n'avez pas saisi un numéro valable, merci de réessayer");
                alert("Vous n'avez pas saisi un numéro valable, merci de réessayer");
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


