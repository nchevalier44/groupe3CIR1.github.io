
//Récupération des différents champs que l'uttilisateur pourra utilisé et ajustements
let Name = document.getElementById('Name');
Name.setAttribute('required', 'true');  
//l'attribut "required" signifie que l'utilisateur doit impérativement correctement remplir ce champs

let Email = document.getElementById('email');
Email.setAttribute('required', 'true');

let txt = document.getElementsByTagName('textarea')[0]; 
txt.setAttribute('required', 'true');
txt.setAttribute('minlength', '20');
txt.setAttribute('maxlength', '1000');

let checkName = false;  //Variable verifiant si le nom est correctement rempli

let sendButton = document.getElementById('sendButton');
sendButton.addEventListener('click',function(){
    
    //Verifie les conditions pour envoyer le message 
    

    if( !checkName ){  //Pour chacune des conditions, on verifie si elle est remplie et indique à l'utilisateur l'erreur si besoin
        Name.setCustomValidity("Veuillez renseigner votre nom et votre prénom.");
    }
    else{
        Name.setCustomValidity("");
    }

    if(Email.validity.valid == false){ 
        Email.setCustomValidity("Veuillez renseigner un email correct.")
    }
    else{
        Email.setCustomValidity("");
    }

    if(txt.value.length < 20){
        txt.setCustomValidity("20 caractères sont requis pour nous contacter. Vous pouvez préciser la raison de cette prise de contact.");
    }
    else{
        txt.setCustomValidity("");
    }


});



//Fonction pour griser le bouton si les conditions d'envoi ne sont pas respectées

function check(){
    let a = Name.value.split(' ').length;

    if(a >=2){ //On verifie manuellement que le champs Nom et prénom soit correctement rempli
        checkName = true;
    }
    else{
        checkName = false;
    }

    if(checkName == false || Email.validity.valid == false || txt.value.length < 20){ //On modifie la couleur du bouton en conséquence
        sendButton.style.backgroundColor = "grey";
    }
    else if(checkName == true && txt.value.length >=20 && Email.validity.valid == true){
        sendButton.style.backgroundColor = "#D9B08C";
    }
}