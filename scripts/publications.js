
//Pour cette page on va effectuer un filtre qui va nous permettre d'afficher les publications qui correspondent aux input de l'utilisateur
//Pour ceci l'utilisateur dispose de 3 zone de texte pour écrire ses instructions pour le nom, le titre ou l'année de la publication
//Il pourra également filtrer les publications en fonction de leur type (communication ou article)

let publications = document.getElementsByClassName("publications_txt");  
//Je recupère la zone qui m'interresse sous forme de tableau
//Ce tableau contienr les publication de la pages

let array = getInfo();


function getInfo() { //Cette fonction me permet de récuperer facilement les "paramètres" de la publication
    

    let array = [];
    let i = 0
    for(let j = 0; j < publications.length; j++) {
        array[i] = publications[j].getElementsByClassName("blue_txt")[0].textContent;  //les personnes ayant participés à la publication
        i++;
        array[i] = publications[j].getElementsByClassName("title")[0].textContent;  //Le titre de la publications
        i++;
        array[i] = publications[j].getElementsByClassName("year")[0].textContent;  //L'année de publication
        i++;
    }
    return array; //Ces informations sont stockés dans un tableau 

}

function filter(id){
    let array = getInfo();
    

    let input = document.getElementById(id); //On récupère la zonne concernée par le filtre (soit les zones de textes ou la radio)

    let attribute;
    

    if(id == "search-input1"){  //le classement de mon tableau d'information me permet d'attribuer une valeur en fonction de la zone de texte solicitée
        attribute = 0;
    }
    if(id == "search-input2"){
        attribute = 1;
    }
    if(id == "search-input3"){
        attribute = 2;
    }
    

    let j = 0
    
    for(let i = attribute; i < publications.length*3; i+=3){  
        //Ainsi le point de départ de ma boucle change et avance de trois en trois donc corrrespond uniquement à l'élément à filtrer (càd le nom, le titre ou l'année)
        if(array[i].toLowerCase().includes(input.value.toLowerCase()) == false){ //On enlève si cela ne correspond pas
            //La fonction include me permet de vérifier si l'argument est compris dans l'élement qui appelle la fonction
            publications[j].style.display = "none";
            publications[j].previousElementSibling.style.display = "none";
        }
        else{ //Si le filtre correspond, on prend soin d'afficher l'élement dans le cas où il a déjà été filtré 
            publications[j].style.display = "";
            publications[j].previousElementSibling.style.display = "";

        }
        j++; 
    }

    let commSpan = document.getElementById("communcations-field"); //On récupère la partie Communications
    let artSpan = document.getElementById("articles-field");    //Idem pour articles

    switch(input.value){ 
        case "all" : //Affiche toutes les publications
            commSpan.style.display = "";
            artSpan.style.display = "";

            document.getElementsByClassName("barre")[2].style.display = "";

            break;
        case "communication" : //Affiche communication et enlève article
            commSpan.style.display = "";
            artSpan.style.display = "none";
            document.getElementsByClassName("barre")[2].style.display = "none";
            break;
        case "article" :  //Affiche Article et enlève communication
            commSpan.style.display = "none";
            artSpan.style.display = "";
            document.getElementsByClassName("barre")[2].style.display = "none";

            break;
        default :
    }
    




}