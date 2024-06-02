

function ModalWindow(number){

        //On créé la fenetre modale avec chacun de ses composants
        let modalContainer = document.createElement("div");
        modalContainer.id = "modal-container";
        let modalContent = document.createElement("div");
        let imgModal; 
        let modalTitle;
        let modalText = document.createElement("p");
        modalText.style.fontSize = "100%";

        //Si le nombre est 1, cela signifie qu'on doit faire la fenetre modal n°1 sur le living lab
        if(number == 1){
            imgModal = document.getElementById("img_livinglab").cloneNode(true); //cloneNode permet de cloner l'élément voulu, ainsi on ne modifie pas l'élément de base mais une "copie"
            modalText.innerText = "Le living Lab est le fruit de collaboration avec l'entreprise de mutuelle santé Malakoff Médéric. Initialement, ce Living Lab avait pour but de détecter la chute des personnes âgées sans utiliser de capteurs portés (bracelet, médaillon...). Une solution a été proposée en utilisant un capteur de type Kinect permettant de garantir le respect de la vie privée et de connaitre à chaque instant la position de la personne dans le studio. Afin d'étendre les possibilités du studio, un ensemble de capteurs ont été ajoutés : prises connectées, capteurs d'environnements, température, lumière, humidité, gaz...), capteurs de consommation (électricité, eau), Caméras, micro et haut parleurs.  Plusieurs scénarios ont été mis en place pour utiliser les données des différents capteurs et envoyer une alarme (sms, mail) en cas de chute ou si la personne reste trop longtemps allongée sur le sol, en cas de détection d'anomalie (pas suffisamment de consommation d'eau en fonction d'une température trop élevée...). Ce démonstrateur permet également de visualiser les données des différents capteurs en temps réel et à distance, en se connectant sur un site web. Les travaux futurs en lien avec cette plateforme à développer de scénarios en conditions \"réelles\" dans des EPHAD par exemple pour contribuer dans la prise en charge des risques liés aux personnes en situation de dépendance (déshydratation, comportement, chutes...)." ; 
            modalTitle = document.getElementById("sous-titre1").cloneNode(true);;
        } else{ //Sinon c'est le numéro 2, donc on créé la fenetre modal n°2 sur l'environnement hybride connecté
            imgModal = document.getElementById("img_environnementHybride").cloneNode(true); //cloneNode permet de cloner l'élément voulu, ainsi on ne modifie pas l'élément de base mais une "copie"
            modalText.innerText = "Cette plateforme est en cours de développement et vise à offrir des services à la personne dans des environnements indoor (bureau connecté, école connectée, usine connectée, …). Parmi les services, nous envisageons l'étude du comportement des personnes, la détection d'anomalies et la sécurité de l'environnement. Deux enjeux majeurs sont traités : (1) l'application des algorithmes d'intelligence artificielle qui prend tout son sens pour la prédiction d'évènements à risque ; (2) la mise en place de moyens numériques interopérables comme une architecture réseau dédiée et des technologies d'acquisition et de communications standards permettant l'accès aux données et la centralisation/distribution de la prise de décision. Pour cette plateforme nous disposons de moyens de calcul intensif comme le serveur GPU pour faire du FoG computing qui présente une alternative intéressante par rapport au cloud pour des raisons de sécurité de données et de coût.";
            modalTitle = document.getElementById("sous-titre2").cloneNode(true);
        }
        
        //Bouton de fermeture de la modale
        let closeButton = document.createElement("div");
        let imgClose = document.createElement("img");
        imgClose.src = "images/icones/close.svg";
        closeButton.appendChild(imgClose);

        //On ajoute chaque élément dans le bon conteneur
        modalContent.appendChild(imgModal);
        modalContent.appendChild(modalTitle);
        modalContent.appendChild(modalText);
        modalContent.appendChild(closeButton);
        modalContainer.appendChild(modalContent);
        document.body.appendChild(modalContainer);

        //CSS de la fenetre modale
        modalContainer.style.position = "fixed";
        modalContainer.style.top = "10%";
        modalContainer.style.left = "15%";
        modalContainer.style.width = "70%";
        modalContainer.style.height = "80%";
        modalContainer.style.backgroundColor = "#D1E8E2";
        modalContainer.style.borderRadius = "20px";
        modalContainer.style.borderWidth = "3px";
        modalContainer.style.borderStyle = "solid";
        modalContainer.style.borderColor = "#116466";
        modalContainer.style.padding = "30px";
        modalContent.style.textAlign = "center";

        //CSS du bouton de fermeture
        closeButton.style.backgroundColor ="#116466";
        closeButton.style.position = "absolute";
        closeButton.style.top = "10px";
        closeButton.style.right = "10px";
        closeButton.style.borderRadius = "10px";
        closeButton.style.cursor = "pointer";

        // Pour fermer la fenêtre modale quand on clique sur le bouton de fermeture
        closeButton.addEventListener("click", () => {
            modalContainer.style.display = "none";
            let f = document.getElementsByClassName("flou"); 
            for(let i = 0; i<f.length; i++){
                f[i].style.filter = "blur(0)";          //rendre le fond normal
            }
        });

}



//Pour ouvrir les fenetres modales quand on clique sur les titres

let title1 = document.getElementById("sous-titre1");  //les titres sur lequels il faut cliquer pour ouvrir la modale 
let title2 = document.getElementById("sous-titre2");

title1.addEventListener("click", () =>{
    ModalWindow(1);    //On passe 1 en paramètre pour dire quelle fenetre on souhaite afficher (living lab ici)
    let f = document.getElementsByClassName("flou"); 
    for(let i = 0; i<f.length; i++){
        f[i].style.filter = "blur(10px)";            //rendre le fond flou (voir class flou dans le html, div qui recouvre toute la page)
    }
});

title2.addEventListener("click", () =>{
    ModalWindow(2); //On passe 2 en paramètre pour dire quelle fenetre on souhaite afficher (environnement hybride connecté ici)
    let f = document.getElementsByClassName("flou"); 
    for(let i = 0; i<f.length; i++){
        f[i].style.filter = "blur(5px)";            //rendre le fond flou (voir class flou dans le html, div qui recouvre toute la page)
    }
});