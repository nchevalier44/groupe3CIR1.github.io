
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


//CREATION DE L'AJOUT DE PUBLICATIONS

let button = document.createElement("button");
document.body.appendChild(button);
button.style.position = "absolute";
button.style.top = "10vw"; //Positionnement en haut à droite de l'écran
button.style.right = "4vw";
button.style.width = "6vw";
button.style.height = "2vw";
button.style.padding = "0.5vw";
button.style.borderRadius = "0.8vw";
button.style.borderColor = "white";
button.textContent = "Ajouter";
button.style.fontSize = "0.8vw";
button.style.backgroundColor = "#116466";
button.style.color = "white";


button.addEventListener("click", () => {
    createMenu();
});


function createMenu(){
    //Création du div contenant le menu
    let container = document.createElement("div");
    container.id = "menu-container";
    container.style.position = "fixed";
    container.style.backgroundColor = "#116466";
    container.style.border = "solid black 1px";
    container.style.color = "#D1E8E2";
    container.style.padding = "0.5vw";
    container.style.borderRadius = "1vw";
    container.style.right = "2vw";
    container.style.top = "8vw";
    container.style.fontSize = "80%";
    container.style.width = "22.5%";
    document.body.appendChild(container);

    let button2 = document.createElement("button");
    container.appendChild(button2);
    button2.style.position = "absolute";
    button2.style.top = "0.5vw"; //Positionnement en haut à droite du container
    button2.style.right = "0vw";
    button2.style.width = "3vw";
    button2.style.height = "2vw";
    button2.style.padding = "0.5vw";
    button2.style.borderRadius = "0.8vw";
    button2.style.borderColor = "white";
    button2.textContent = "Close";
    button2.style.fontSize = "0.8vw";
    button2.style.backgroundColor = "#116466";
    button2.style.color = "white";
    button2.addEventListener("click", () => {
        document.getElementById("menu-container").remove();
        button2.remove();
    });

    //Création du titre
    let title = document.createElement("h2");
    title.innerText = "Ajouter un publication";
    title.style.textAlign = "center";
    container.appendChild(title);

    //Ajouts d'une ligne 
    let hr = document.createElement("hr");
    container.appendChild(hr);
    hr.style.marginTop = "3%";
    hr.style.marginBottom = "3%";
    console.log("done");
    createAddMenu();
    console.log("done2");
}

function createAddMenu(){
    //Création d'un sous-menu pour remplir les informations
    let container = document.getElementById("menu-container");
    container.style.overflowY = "auto";
    container.style.height = "47%";
    let add_container = document.createElement("div");
    container.appendChild(add_container);
    add_container.id = "add-menu-container";
    let add_form = document.createElement("form");
    add_container.appendChild(add_form);
    add_form.addEventListener("submit", (event) => {
        event.preventDefault(); //C'est pour éviter de recharger la page
    });
    let hr = document.createElement("hr");
    hr.style.marginTop = "3%";
    hr.style.marginBottom = "3%";

    

    //Création des éléments pour selectionner le type de publication
    let select_pub = document.createElement("select");
    select_pub.name = "select_pub";
    let label_pub = document.createElement("label");
    label_pub.textContent = "Choisissez le type de publication : ";
    label_pub.for = select_pub.name;
    let option_article = new Option("Article", "article");
    let option_comm = new Option("Comunication", "communication");
    select_pub.appendChild(option_article);
    select_pub.appendChild(option_comm);
    add_form.appendChild(label_pub);
    add_form.appendChild(select_pub);
    
    //Création des éléments pour recueillir le nom du membre
    let input_name = document.createElement("input");
    input_name.type = "text";
    input_name.name = "name";
    input_name.placeholder = "P1 N1, P2 N2, ...";
    input_name.required = true;
    let label_name = document.createElement("label");
    label_name.textContent = "Particpants : ";
    label_name.for = input_name.name;
    let br = document.createElement("br");
    add_form.appendChild(br);
    add_form.appendChild(label_name);
    add_form.appendChild(input_name);


    //Création des éléments pour recueillir le titre
    let textarea_description = document.createElement("textarea");
    textarea_description.name = "description";
    textarea_description.placeholder = "";
    textarea_description.required = true;
    textarea_description.style.width = "95%";
    let label_description = document.createElement("label");
    label_description.textContent = "Titre de la publication : ";
    label_description.for = textarea_description.name;
    add_form.appendChild(br.cloneNode());
    add_form.appendChild(label_description);
    add_form.appendChild(textarea_description);

    //Création des éléments pour ajouter des précisions
    let textarea_precisions = document.createElement("textarea");
    textarea_precisions.name = "precisions";
    textarea_precisions.placeholder = "";
    textarea_precisions.style.width = "95%";
    let label_precisions = document.createElement("label");
    label_precisions.textContent = "Précisions sur la publication: ";
    label_precisions.for = textarea_precisions.name;
    add_form.appendChild(br.cloneNode());
    add_form.appendChild(label_precisions);
    add_form.appendChild(textarea_precisions);


    //Création des éléments pour recueillir l'année
    let input_year = document.createElement("input");
    input_year.type = "number";
    input_year.name = "year";
    input_year.placeholder = "2020";
    input_year.required = true;
    let label_year = document.createElement("label");
    label_year.textContent = "Année : ";
    label_year.for = input_year.name;
    add_form.appendChild(br.cloneNode());
    add_form.appendChild(label_year);
    add_form.appendChild(input_year);


    add_form.appendChild(hr.cloneNode());

    //Création des éléments pour le bouton d'ajout/modification
    let input_submit = document.createElement("button");
    input_submit.id = "submit-menu";
    input_submit.type = "submit";
    input_submit.textContent = "Ajouter une publication";
    input_submit.name = "submit";
    input_submit.addEventListener("click", SubmitButton);
    let center_input = document.createElement("div");
    center_input.style.textAlign = "center";
    center_input.appendChild(input_submit);
    add_form.appendChild(center_input);
}



let NewPubName;
let NewPubTitle;
let NewPubType;
let NewPubYear;
let NewPubPrecisions;

function SubmitButton(event){
    event.preventDefault();
    NewPubName = document.getElementsByName("name")[0].value;
    NewPubTitle = document.getElementsByName("description")[0].value;
    NewPubType = document.getElementsByName("select_pub")[0].value;
    NewPubYear = document.getElementsByName("year")[0].value;
    NewPubPrecisions = document.getElementsByName("precisions")[0].value;

    //Remise a zéro du form 
    document.getElementsByName("name")[0].value = "";
    document.getElementsByName("description")[0].value = "";
    document.getElementsByName("year")[0].value = "";
    document.getElementsByName("precisions")[0].value = "";

    console.log(NewPubName);
    console.log(NewPubTitle);
    console.log(NewPubType);
    console.log(NewPubYear);

    console.log(typeof(NewPubType));
    console.log(typeof(NewPubName));
    console.log(typeof(NewPubTitle));
    console.log(typeof(NewPubYear));

    AddPub();
}

function AddPub(){
    let commSpan = document.getElementById("communcations-field"); 
    let artSpan = document.getElementById("articles-field");
    let contenant = document.createElement("div");


    if(NewPubType == "article"){
        artSpan.appendChild(contenant);
        contenant.setAttribute("class", "publications");

        let square_yellow = document.createElement("div");
        square_yellow.setAttribute("class", "square_yellow");
        contenant.appendChild(square_yellow);
    }

    else{
        commSpan.appendChild(contenant);
        contenant.setAttribute("class", "publications");

        let square_blue = document.createElement("div");
        square_blue.setAttribute("class", "square_blue");
        contenant.appendChild(square_blue);
    }

    let publications_txt = document.createElement("div");
    contenant.appendChild(publications_txt);
    publications_txt.setAttribute("class", "publications_txt");

    let content_pub = document.createElement("p");
    publications_txt.appendChild(content_pub);
    content_pub.setAttribute("class", "content_pub");

    let blue_txt = document.createElement("span");
    content_pub.appendChild(blue_txt);
    blue_txt.setAttribute("class", "blue_txt");
    blue_txt.textContent = NewPubName + " ";

    let title = document.createElement("span");
    content_pub.appendChild(title);
    title.setAttribute("class", "title");
    title.textContent = NewPubTitle + " ";

    let precisions = document.createElement("i");
    content_pub.appendChild(precisions);
    precisions.setAttribute("class", "precisions");
    precisions.textContent = NewPubPrecisions +" , ";


    let year = document.createElement("span");
    year.setAttribute("class", "year");
    year.textContent = NewPubYear +".";
    content_pub.appendChild(year);

}


//example

// //<div class="publications">
// <div class="square_yellow"></div>
// <div class="publications_txt">
//     <p class="content_pub">
//          <span class="blue_txt">
//              <b>Mélissa Hanafi-Portier , Sarah Samadi , Laure Corbari , Marion Boulard , Elda Miramontes , et al: </span><span class="title">Multiscale spatial patterns and environmental drivers of seamount and island slope megafaunal assemblages along the Mozambique channel.</span> </b> <i>Deep Sea Research Part I: Oceanographic Research Papers, <span class="year" >2023</span></i></p> 
// </div>
// </div>