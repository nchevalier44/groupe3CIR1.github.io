

function ModalWindow(number){
    //on crée le conteneur de la fenetre modale 

    if(number == 1){
        
        //On créé la fenetre modale 1
        let modalContainer1 = document.createElement("div");
        modalContainer1.id = "modal-container";
        let modalContent1 = document.createElement("div");
        let imgModal1 = document.getElementById("img_livinglab").cloneNode(true);//cloneNode permet de cloner l'élément voulu, ainsi on ne modifie pas l'élément de base mais une "copie"
        let modalTitle1 = document.getElementById("sous-titre1").cloneNode(true);
        let modalText1 = document.createElement("p");
        modalText1.innerText = "Le living Lab est le fruit de collaboration avec l'entreprise de mutuelle santé Malakoff Médéric. Initialement, ce Living Lab avait pour but de détecter la chute des personnes âgées sans utiliser de capteurs portés (bracelet, médaillon...). Une solution a été proposée en utilisant un capteur de type Kinect permettant de garantir le respect de la vie privée et de connaitre à chaque instant la position de la personne dans le studio. Afin d'étendre les possibilités du studio, un ensemble de capteurs ont été ajoutés : prises connectées, capteurs d'environnements, température, lumière, humidité, gaz...), capteurs de consommation (électricité, eau), Caméras, micro et haut parleurs.  Plusieurs scénarios ont été mis en place pour utiliser les données des différents capteurs et envoyer une alarme (sms, mail) en cas de chute ou si la personne reste trop longtemps allongée sur le sol, en cas de détection d'anomalie (pas suffisamment de consommation d'eau en fonction d'une température trop élevée...). Ce démonstrateur permet également de visualiser les données des différents capteurs en temps réel et à distance, en se connectant sur un site web. Les travaux futurs en lien avec cette plateforme à développer de scénarios en conditions \"réelles\" dans des EPHAD par exemple pour contribuer dans la prise en charge des risques liés aux personnes en situation de dépendance (déshydratation, comportement, chutes...)." ; 
        
        //Bouton de fermeture de la modale
        let closeButton1 = document.createElement("div");
        let imgClose = document.createElement("img");
        imgClose.src = "images/icones/close.svg";
        closeButton1.appendChild(imgClose);

    modalContent1.appendChild(imgModal1);
    modalContent1.appendChild(modalTitle1);
    modalContent1.appendChild(modalText1);
    modalContent1.appendChild(closeButton1);

    modalContent2.appendChild(imgModal2);
    modalContent2.appendChild(modalTitle2);
    modalContent2.appendChild(modalText2);
    modalContent2.appendChild(closeButton2);

    modalContainer1.appendChild(modalContent1);
    modalContainer2.appendChild(modalContent2);

    document.body.appendChild(modalContainer1);
    document.body.appendChild(modalContainer2);

                 //en display none, les fenetres ne s'afficheront pas tant qu'on aura pas cliqué sur les titres
    
    modalContent1.style.display = "none";
    modalContent2.style.display = "none";

    //CSS de la fenetre modale

    //modal1
    modalContainer1.style.position = "absolute";
    modalContainer1.style.top = "1%";
    modalContainer1.style.left = "25%";
    modalContainer1.style.width = "50%";
    modalContainer1.style.height = "50";
    modalContainer1.style.backgroundColor = "white";
    modalContainer1.style.borderRadius = "20px";
    modalContainer1.style.borderWidth = "3px";
    modalContainer1.style.borderStyle = "solid";
    modalContainer1.style.borderColor = "#116466";
    modalContainer1.style.transition = "opacity 10s ease-in-out";
    modalContainer1.style.zIndex = "1000";

    modalContent1.style.textAlign = "center";
    

    //modal2
    modalContainer2.style.position = "absolute";
    modalContainer2.style.top = "1%";
    modalContainer2.style.left = "25%";
    modalContainer2.style.width = "50%";
    modalContainer2.style.height = "50";
    modalContainer2.style.backgroundColor = "white";
    modalContainer2.style.borderRadius = "20px";
    modalContainer2.style.borderWidth = "3px";
    modalContainer2.style.borderStyle = "solid";
    modalContainer2.style.borderColor = "#116466";
    modalContainer2.style.transition = "opacity 10s ease-in-out";
    modalContainer2.style.zIndex = "1000";

    modalContent2.style.textAlign = "center";

    //closeButton1

    closeButton1.style.backgroundColor ="#116466";
    closeButton1.style.position = "absolute";
    closeButton1.style.top = "10px";
    closeButton1.style.right = "10px";
    closeButton1.style.borderRadius = "10px";
    closeButton1.style.cursor = "pointer";

        //closeButton2
        closeButton2.style.backgroundColor ="#116466";
        closeButton2.style.position = "absolute";
        closeButton2.style.top = "10px";
        closeButton2.style.right = "10px";
        closeButton2.style.borderRadius = "10px";
        closeButton2.style.cursor = "pointer";

        // Pour fermer la fenêtre modale quand on clique sur le bouton de fermeture
        closeButton2.addEventListener("click", () => {
            modalContainer2.style.display = "none";
            let f = document.getElementsByClassName("flou"); 
            for(let i = 0; i<f.length; i++){
                f[i].style.filter = "blur(0)";          //rendre le fond normal
            }
        });
        
    }

}


//Pour ouvrir les fenetres modales quand on clique sur les titres

let title1 = document.getElementById("sous-titre1");  //les titres sur lequels il faut cliquer pour ouvrir la modale 
let title2 = document.getElementById("sous-titre2");

    title1.addEventListener("click", () =>{
        console.log("test");
        modalContent1.style.display = "block";    //on passe le display en block pour afficher à l'écran le div modalContainer
        let f = document.getElementsByClassName("flou"); 
        for(let i = 0; i<f.length; i++){
            f[i].style.filter = "blur(10px)";            //rendre le fond flou (voir class flou dans le html, div qui recouvre toute la page)
        }
    });

    title2.addEventListener("click", () =>{
        modalContent2.style.display = "block";
        let f = document.getElementsByClassName("flou"); 
        for(let i = 0; i<f.length; i++){
            f[i].style.filter = "blur(5px)";            //rendre le fond flou (voir class flou dans le html, div qui recouvre toute la page)
        }
    });

    // Pour fermer les fenêtres modales quand on clique sur le bouton de fermeture
    closeButton1.addEventListener("click", () => {
        modalContent1.style.display = "none";
        let f = document.getElementsByClassName("flou"); 
        for(let i = 0; i<f.length; i++){
            f[i].style.filter = "blur(0)";          //rendre le fond normal
        }
    });

    closeButton2.addEventListener("click", () => {
        modalContent2.style.display = "none";
        let f = document.getElementsByClassName("flou"); 
        for(let i = 0; i<f.length; i++){
            f[i].style.filter = "blur(0)";          //rendre le fond normal
        }
    });
}


ModalWindow();