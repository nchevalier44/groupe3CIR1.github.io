
let title = document.getElementById("sous-titre");
let modal = document.querySelector(".modal");
let span = document.getElementsByClassName("close")[0];



function openModal(){
    modal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
}

title.onclick = openModal();
span.onclick = closeModal();
