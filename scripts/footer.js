
let numberPhone = document.getElementsByClassName("numberPhone");


function copyPasteAndCall(){
    let fenetre;
    for(let i=0;i<4;i++){
        numberPhone[i].addEventListener("copy",() =>{
            fenetre = prompt("Si vous voulez appeler ce numéro : " +numberPhone[i].textContent+ " entrez le de nouveau dans le champ ci-dessous puis validez ");
            if(fenetre == numberPhone[i].textContent){      
                let audio = new Audio('../audio/SonnerieGoofy.mp3');
                console.log("Vous appellez ce numéro: "+numberPhone[i].textContent);
                audio.play();
            }
        });
    }
        
}

/*function call(){
    if(copyPaste == numberPhone[i].textContent){
        console.log("Vous appellez ce numéro: "+numberPhone[i].textContent);
        let audio = new Audio("groupe3CIR1.github.io/audio/Michael ringtone GTA 5 sound effect.mp3/");
        audio.play();
    }
    
}*/

copyPasteAndCall();
