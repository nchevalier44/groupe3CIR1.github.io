//Gratter la photo Ayoub Karine
function gratter(event){
    let posX = event.offsetX;
    let posY = event.offsetY;
    context.save();
    context.beginPath();
    let radius = 10;
    context.arc(posX, posY, radius, 0, 2*Math.PI);
    context.clip();
    context.clearRect(posX - radius, posY - radius, 2 * radius, 2 * radius);
    context.restore();
}


let img = document.getElementById("AyoubKarine");
let canvas = document.createElement("canvas");
canvas.width = img.width+2;
canvas.height = img.height+2;
canvas.style.position = "absolute";
img.parentElement.insertBefore(canvas, img);
let context = canvas.getContext("2d");
context.fillStyle = "#CCCCCC";
context.beginPath();
context.arc(canvas.width/2, canvas.height/2, 0.5*canvas.width, 0, Math.PI*2);
context.closePath();
context.fill();

canvas.addEventListener("mousemove", function(event){
    gratter(event);
});



//Mode édition

let is_editing = false;
let is_adding = true;
let button = document.createElement("button");
document.body.appendChild(button);
button.style.position = "absolute";
button.style.top = "6vw";
button.style.right = "4vw";
button.style.width = "6vw";
button.style.height = "2vw";
button.style.padding = "0.5vw";
button.style.borderRadius = "0.8vw";
button.style.borderColor = "white";
button.textContent = "Mode lecteur";
button.style.fontSize = "0.8vw";
button.style.backgroundColor = "#116466";
button.style.color = "white";

let tab_tags = ["Image processing", "Remote sensing", "Machine learning", "Deep learning", "Computer vision", "IoT", "IoMT", "Industrial IoT", "Digital VLSI design", "High Performance Embedded Computing", "Algorithm-Architecture Co-design", "3D Computer vision", "3D Quality assessment"];
let card_storage = document.getElementById("card-Ayoub-Karine").cloneNode(true);

button.addEventListener("click", () => {
    if(!is_editing){
        let id_admin = window.prompt("Identifiant du profil administrateur :");
        if(id_admin == "admin"){
            let pwd_admin = window.prompt("Mot de passe du profil administrateur :");
            if(pwd_admin == "admin_pwd"){
                is_editing = true;
                changeState();
            }
        }
    } else{
        let confirmation = window.confirm("Voulez-vous vraiment quitter le mode édition ?");
        if(confirmation){
            is_editing = false;
            changeState();
        } 
    }
});

function changeState(){
    changeButton();
    changeDeleteIcons();
    if(is_editing){
        createMenu();
    } else{
        deleteMenu();
    }
    
}

function changeButton(){
    if(is_editing){
        button.textContent = "Mode édition";
        button.style.backgroundColor = "#D9B08C";
    } else{
        button.textContent = "Mode lecteur";
        button.style.backgroundColor = "#116466";
    }
}


function changeDeleteIcons(){
    let cards = document.getElementsByClassName("card");
    let n = cards.length;
    for(let i = 0; i<n; i++){
        if(is_editing){
            addDeleteIcon(cards[i]);
        } else{
            cards[i].firstElementChild.lastElementChild.remove();
        }
    }
}

function addDeleteIcon(card){
    let deleteIcon = document.createElement("img");
    deleteIcon.src = "images/icones/delete.png";
    let name = getNameFromCard(card);            
    deleteIcon.alt = name;
    deleteIcon.style.position = "absolute";
    deleteIcon.style.width = "1.5vw";
    card.firstElementChild.appendChild(deleteIcon);
    deleteIcon.style.top = card.offsetTop + "px";
    deleteIcon.style.left = card.offsetLeft + card.clientWidth * 0.94 + "px";

    deleteIcon.addEventListener("click", () => {
        let confirmation = window.confirm("Etes-vous sur de vouloir supprimer cette carte ?");
        if(confirmation){
            deleteIcon.parentElement.parentElement.remove();
            updateAllDeleteIcon();
            updateOptionsPeople();
        }
    });
}

function updateAllDeleteIcon(){
    let cards = document.getElementsByClassName("card");
    let n = cards.length;
    for(let i = 0; i<n; i++){
        let deleteIcon = cards[i].firstElementChild.lastElementChild;
        deleteIcon.style.top = cards[i].offsetTop + "px";
        deleteIcon.style.left = cards[i].offsetLeft + cards[i].clientWidth * 0.94 + "px";
    }
}

function deleteMenu(){
    document.getElementById("menu-container").remove();
}

function createMenu(){
    //create the div menu
    let container = document.createElement("div");
    container.id = "menu-container";
    container.style.position = "fixed";
    container.style.backgroundColor = "#116466";
    container.style.border = "solid black 1px";
    container.style.color = "#D1E8E2";
    container.style.padding = "0.5vw";
    container.style.borderRadius = "1vw";
    container.style.right = "2vw";
    container.style.top = "10vw";
    container.style.fontSize = "80%";
    container.style.width = "22.5%";
    document.body.appendChild(container);

    //create the title
    let title = document.createElement("h2");
    title.innerText = "Ajouter/Editer";
    title.style.textAlign = "center";
    container.appendChild(title);

    //add a line to separate
    let hr = document.createElement("hr");
    container.appendChild(hr);
    hr.style.marginTop = "3%";
    hr.style.marginBottom = "3%";

    //create a form to choose if you add or edit a member
    let choose_action_form = document.createElement("form");
    choose_action_form.id = "choose-action-form";

    //create 
    let select_action = document.createElement("select");
    select_action.name = "select_action";
    let label_action = document.createElement("label");
    label_action.textContent = "Souhaitez-vous modifier ou ajouter un membre ? ";
    label_action.for = select_action.name;
    let option_add = new Option("Ajouter", "add", true);
    let option_edit = new Option("Modifier", "edit");

    let select_people = document.createElement("select");
    select_people.name = "select_people";
    select_people.style.display = "none";
    let label_people = document.createElement("label");
    label_people.textContent = "Choississez la personne à modifier ";
    label_people.for = select_people.name;
    label_people.style.display = "none";
    
    let br = document.createElement("br");
    
    //append all created tags to the menu
    select_action.appendChild(option_add);
    select_action.appendChild(option_edit);
    choose_action_form.appendChild(label_action);
    choose_action_form.appendChild(select_action);
    choose_action_form.appendChild(br.cloneNode());
    choose_action_form.appendChild(label_people);
    choose_action_form.appendChild(select_people);
    container.appendChild(choose_action_form);

    updateOptionsPeople();

    container.appendChild(hr.cloneNode());
    select_action.addEventListener("change", () => {
        if(select_action.value == "edit"){
            is_adding = false;
            label_people.style.display = "block";
            select_people.style.display = "block";
            document.getElementById("submit-menu").textContent = "Modifier un membre";
            if(document.getElementsByClassName("card").length != 0){
                setInformationsMenu("card-" + select_people.value);
            }
            
        } else{
            
            is_adding = true;
            label_people.style.display = "none";
            select_people.style.display = "none";
            document.getElementById("submit-menu").textContent = "Ajouter un membre";
            resetInformationsMenu();
        }
    });
    select_people.addEventListener("change", () => {
        setInformationsMenu("card-" + select_people.value);
    })
    createAddMenu();
}

function updateOptionsPeople(){
    let cards = document.getElementsByClassName("card");
    let select_people = document.getElementById("choose-action-form").elements.select_people;
    select_people.replaceChildren();
    let n = cards.length;
    for(let i = 0; i<n; i++){
        let option = new Option(getNameFromCard(cards[i]), cards[i].id.substring(5, cards[i].id.length));
        select_people.appendChild(option);
    }
}



function createAddMenu(){
    let container = document.getElementById("menu-container");
    let add_container = document.createElement("div");
    add_container.id = "add-menu-container";
    let add_form = document.createElement("form");
    add_form.addEventListener("submit", (event) => {
        event.preventDefault();
    });
    let hr = document.createElement("hr");
    hr.style.marginTop = "3%";
    hr.style.marginBottom = "3%";

    //JOB
    let select_job = document.createElement("select");
    select_job.name = "select_job";
    let label_job = document.createElement("label");
    label_job.textContent = "Choisissez le poste du membre : ";
    label_job.for = select_job.name;
    let option_chercheur = new Option("Enseignant chercheur", "enseignants-chercheurs");
    let option_post_doc = new Option("Post-doc", "post-docs");
    let option_doctorant = new Option("Doctorant", "doctorants");
    let option_ancien_doctorant = new Option("Ancien doctorant", "anciens-doctorants");
    select_job.appendChild(option_chercheur);
    select_job.appendChild(option_post_doc);
    select_job.appendChild(option_doctorant);
    select_job.appendChild(option_ancien_doctorant);
    add_form.appendChild(label_job);
    add_form.appendChild(select_job);
    
    //NOM
    let input_name = document.createElement("input");
    input_name.type = "text";
    input_name.name = "name";
    input_name.placeholder = "Prénom et nom";
    input_name.required = true;
    let label_name = document.createElement("label");
    label_name.textContent = "Nom du membre : ";
    label_name.for = input_name.name;
    let br = document.createElement("br");
    add_form.appendChild(br);
    add_form.appendChild(label_name);
    add_form.appendChild(input_name);

    //IMAGE
    let input_image = document.createElement("input");
    input_image.type = "file";
    input_image.name = "image";
    input_image.accept = "image/*";
    input_name.required = true;
    let label_image = document.createElement("label");
    label_image.textContent = "Photo du membre : ";
    label_image.for = input_image.name;
    add_form.appendChild(br.cloneNode());
    add_form.appendChild(label_image);
    add_form.appendChild(input_image);

    //DESCRIPTION
    let textarea_description = document.createElement("textarea");
    textarea_description.name = "description";
    textarea_description.placeholder = "Métier, lieu de travail, email, projet, ...";
    textarea_description.required = true;
    textarea_description.style.width = "95%";
    let label_description = document.createElement("label");
    label_description.textContent = "Description du membre : ";
    label_description.for = textarea_description.name;
    add_form.appendChild(br.cloneNode());
    add_form.appendChild(label_description);
    add_form.appendChild(textarea_description);

    add_form.appendChild(hr.cloneNode());

    //LIENS
    let tab_link = ["linkedin", "researchgate", "website", "google-scholar"]
    let label_links = document.createElement("label");
    label_links.textContent = "Liens : ";
    add_form.appendChild(label_links);
    for(let i = 0; i<4; i++){
        let input_checkbox = document.createElement("input");
        input_checkbox.type = "checkbox";
        input_checkbox.name = tab_link[i] + "-checkbox";
        let label_checkbox = document.createElement("label");
        label_checkbox.textContent = tab_link[i] + " ";
        label_checkbox.for = input_checkbox.name;
        input_checkbox.addEventListener("change", () => {
            if(input_checkbox.checked){
                input_link.style.display = "inline";
            } else{
                input_link.style.display = "none";
            }
        })

        let input_link = document.createElement("input");
        input_link.type = "url";
        input_link.name = tab_link[i] + "-link";
        input_link.placeholder = "https://example.com";
        input_link.style.marginLeft = "5%";
        input_link.style.display = "none";
        
        add_form.appendChild(br.cloneNode());
        add_form.appendChild(label_checkbox);
        add_form.appendChild(input_checkbox);
        add_form.appendChild(input_link);
    }

    add_form.appendChild(hr.cloneNode());

    //TAGS
    let label_tags = document.createElement("label");
    label_tags.textContent = "Tags : ";
    add_form.appendChild(label_tags);
    add_form.appendChild(br.cloneNode());
    for(let i = 0; i<tab_tags.length; i++){
        let input_checkbox = document.createElement("input");
        input_checkbox.type = "checkbox";
        input_checkbox.name = tab_tags[i].replaceAll(" ", "-").toLowerCase() + "-checkbox";
        input_checkbox.style.marginRight = "3%";
        input_checkbox.className = "tag-menu";
        let label_checkbox = document.createElement("label");
        label_checkbox.textContent = tab_tags[i];
        label_checkbox.for = input_checkbox.name;
        
        add_form.appendChild(label_checkbox);
        add_form.appendChild(input_checkbox);
    }

    //SUBMIT
    let input_submit = document.createElement("button");
    input_submit.id = "submit-menu";
    input_submit.type = "submit";
    input_submit.textContent = "Ajouter un membre";
    input_submit.name = "submit";
    input_submit.addEventListener("click", SubmitButton);
    add_form.appendChild(hr.cloneNode());
    let center_input = document.createElement("div");
    center_input.style.textAlign = "center";
    center_input.appendChild(input_submit);
    add_form.appendChild(center_input);


    add_container.appendChild(add_form);
    container.appendChild(add_container);
}

function SubmitButton(){
    if(is_adding){
        addMember();
    } else{
        if(document.getElementsByClassName("card").length == 0){
            window.alert("Il n'y a aucun membre à modifier ! \nVeuillez sélectionner \"Ajouter\"")
        } else{
            let b = checkIfMemberExist();
            if(b){
                return;
            }
            let infos = getInformationsFromMenu();
            let card = infos.get("card");
            resetCard(card);
            editMember(card);
        }
        
    }
    updateAllDeleteIcon();
    updateOptionsPeople();
    setInformationsMenu("card-" + document.getElementById("choose-action-form").elements.select_people.value);

    
}

function editMember(card){
    let infos = getInformationsFromMenu();

    let name = infos.get("name");
    card.getElementsByClassName("prenom-nom")[0].textContent = name;
    name = "card-"+name.replaceAll(" ", "-");
    if(card.id != name){
        card.id = name;
    }
    if(infos.get("image-file") != undefined){
        let image = card.getElementsByClassName("photo")[0];
        image.src = URL.createObjectURL(infos.get("image-file"));
        
    }
    
    let description = card.getElementsByClassName("infos")[0];
    description.innerText = infos.get("description");

    let links = infos.get("links");
    let div_storage = card_storage.getElementsByClassName("reseaux")[0];
    let tab_li = [];
    for(let key_value of links){
        let div_li_storage;
        let list_li = div_storage.firstElementChild.children;
        for(let i = 0; i<list_li.length; i++){
            let li = list_li[i];
            let img = li.firstElementChild.firstElementChild;
            if(img.alt.toLowerCase().replaceAll(" ", "-") == key_value[0]){
                div_li_storage = li;
            }    
        }
        let clone = div_li_storage.cloneNode(true);
        clone.firstElementChild.href = key_value[1];
        tab_li.push(clone);
    }
    let new_reseaux_div = div_storage.cloneNode(true);
    new_reseaux_div.firstElementChild.replaceChildren(); //Delete all children
    tab_li.forEach((node) => {
        new_reseaux_div.firstElementChild.appendChild(node);
    });
    card.getElementsByClassName("content")[0].appendChild(new_reseaux_div);

    let keywords_div_storage = card_storage.getElementsByClassName("keywords")[0];
    let list_keywords = keywords_div_storage.firstElementChild;
    let tags_name = infos.get("tags");
    let new_keywords_div = keywords_div_storage.cloneNode(true);
    let new_list_keywords = new_keywords_div.firstElementChild;
    new_list_keywords.replaceChildren();
    tags_name.forEach((name) => {
        let new_li = document.createElement("li");
        new_li.textContent = name;
        new_list_keywords.appendChild(new_li);
    });
    card.getElementsByClassName("content")[0].appendChild(new_keywords_div);

    let job = infos.get("job");
    let job_div = document.getElementsByClassName(job)[0].getElementsByClassName("cards")[0];
    job_div.appendChild(card);
}

function addMember(){
    let b = checkIfMemberExist();
    if(b){
        return;
    }
    let card = card_storage.cloneNode(true);
    document.getElementsByClassName("enseignants-chercheurs")[0].appendChild(card);
    card.getElementsByClassName("photo")[0].src = "images/image-profil.png";
    resetCard(card);
    editMember(card);
}

function checkIfMemberExist(){
    let infos = getInformationsFromMenu();
    let cards = document.getElementsByClassName("card");
    let all_names = [];
    for(let i = 0; i<cards.length; i++){
        let nom = cards[i].id.replaceAll("-", " ").substring(5, cards[i].id.length);
        if(is_adding){
            all_names.push(nom);
        } else{
            if(infos.get("name") != nom){
                all_names.push(nom);
            }
        }
    }

    if(all_names.includes(infos.get("name"))){
        alert("Le membre existe déjà !");
        return true;
    }
    return false;
}

function getNameFromCard(card){
    return card.id.replaceAll("-", " ").substring(5, card.id.length);
}

function getJobFromCard(card){
    return card.parentElement.parentElement.className;
}

function getImageFromCard(card){
    return card.getElementsByClassName("photo")[0].src;
}

function getDescriptionFromCard(card){
    return card.getElementsByClassName("infos")[0].innerText;
}

function getLinksFromCard(card){
    let liste_liens = card.getElementsByClassName("reseaux")[0];
    if(liste_liens == undefined){
        return new Map();
    }
    let li = liste_liens.firstElementChild.children;
    let dico = new Map();
    let n = li.length;
    for(let i = 0; i<n; i++){
        dico.set(li[i].firstElementChild.firstElementChild.alt.toLowerCase().replaceAll(" ", "-"), li[i].firstElementChild.href);
    }
    return dico;
}

function getTagsFromCard(card){
    let keywords = card.getElementsByClassName("keywords")[0];
    if(keywords == undefined){
        return [];
    }
    let children = keywords.firstElementChild.children;
    let tab = [];
    let n = children.length;
    for(let i = 0; i<n; i++){
        tab.push(children[i].textContent.toLowerCase().replaceAll(" ", "-"));
    }
    return tab;
}

function getInformationsCard(card){
    let dico = new Map();
    dico.set("name", getNameFromCard(card));
    dico.set("job", getJobFromCard(card));
    dico.set("image", getImageFromCard(card));
    dico.set("description", getDescriptionFromCard(card));
    dico.set("links", getLinksFromCard(card));
    dico.set("tags", getTagsFromCard(card));
    return dico;
}

function getInformationsFromMenu(){
    let form = document.getElementById("add-menu-container").firstElementChild;
    let infos = new Map();
    infos.set("name", form.elements.name.value);
    infos.set("job", form.elements.select_job.value);
    infos.set("image-file", form.elements.image.files[0]);
    infos.set("description", form.elements.description.value);

    let links = new Map(); //links
    let name_links = ["linkedin", "researchgate", "website", "google-scholar"];
    name_links.forEach((element) => {
        if(form.elements[element+"-checkbox"].checked){
            links.set(element, form.elements[element+"-link"].value);
        };
    }); 

    let tags = []; //tags
    let n = tab_tags.length;
    for(let i = 0; i<n; i++){
        let nom = tab_tags[i].replaceAll(" ", "-").toLowerCase() + "-checkbox";
        if(form.elements[nom].checked){
            tags.push(tab_tags[i]);
        }
    }
    infos.set("links", links);
    infos.set("tags", tags);

    //get card
    let form_people = document.getElementById("choose-action-form");
    infos.set("card", document.getElementById("card-"+form_people.elements.select_people.value));
    return infos;
}

function setInformationsMenu(name_card){
    resetInformationsMenu();
    let informations = getInformationsCard(document.getElementById(name_card));
    let form = document.getElementById("add-menu-container").firstElementChild;
    form.elements.select_job.value = informations.get("job"); //Job
    form.elements.name.value = informations.get("name"); //Name
    form.elements.description.value = informations.get("description"); //Description
    let links = informations.get("links"); //links
    let name_links = ["linkedin", "researchgate", "website", "google-scholar"];
    name_links.forEach((element) => {
        let l = links.get(element);
        if(l != undefined){
            form.elements[element+"-checkbox"].checked = true;
            form.elements[element+"-link"].value = l;
            form.elements[element+"-link"].style.display = "inline";
        }
    }); 
    let tags = informations.get("tags"); //tags
    let n = tags.length;
    for(let i = 0; i<n; i++){
        let nom = tags[i] + "-checkbox";
        form.elements[nom].checked = true;
    }
}   

function resetInformationsMenu(){
    let form = document.getElementById("add-menu-container").firstElementChild;
    form.elements.select_job.value = "enseignants-chercheurs";
    form.elements.name.value = "";
    form.elements.description.value = "";
    form.elements.image.value = "";
    let name_links = ["linkedin", "researchgate", "website", "google-scholar"];
    name_links.forEach((element) => {
        form.elements[element+"-checkbox"].checked = false;
        form.elements[element+"-link"].value = "";
        form.elements[element+"-link"].style.display = "none";
    }); 
    let tags = document.getElementsByClassName("tag-menu");
    let n = tags.length;
    for(let i = 0; i<n; i++){
        tags[i].checked = false;
    }
}

function resetCard(card){
    let nom = card.getElementsByClassName("prenom-nom")[0];
    nom.textContent = "";
    let description = card.getElementsByClassName("infos")[0];
    description.textContent = "";
    let links = card.getElementsByClassName("reseaux");
    if(links.length != 0){
        links[0].remove();
    }
    let tags = card.getElementsByClassName("keywords");
    if(tags.length != 0){
        tags[0].remove();
    }
}