let is_playing = false;
let speed_ball = 2;
let speed_x = 0;
let speed_y = 0;
let moveInterval;
let botInterval;
let speed_bot = 2;

function initialisation(){
    let form = document.getElementById("form-contact");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if(!is_playing){ //On ne peut pas lancer le jeu s'il est déjà en cours
            createGame();
            is_playing = true;
        }
    });
}

function createGame(){
    addBlurBackground();
    createWindow();
    setTimeout(countDown, 4000); //4s = temps de l'animation
}

function createWindow(){
    //Création de la fenetre
    let container = document.createElement("div");
    container.id = "game-container";
    container.style.width = "80%";
    container.style.height = "80%";
    container.style.position = "fixed";
    container.style.top = "10%";
    container.style.left = "10%";
    container.style.backgroundColor = "#D1E8E2";
    container.style.border = "solid #2C3531 0.3vw";
    container.style.borderRadius = "3vw";
    container.style.boxShadow = "10px 5px 5px #2C3531";
    document.body.appendChild(container);

    //Création du titre
    let title = document.createElement("h1");
    title.style.textAlign = "center";
    title.style.marginTop = "2%";
    title.style.color = "#2C3531";
    title.style.fontSize = "3vw";
    title.style.fontWeight = "900";
    title.innerHTML = "Gagnez pour envoyer !";
    container.appendChild(title);

    //Création du lieu du jeu
    let gamePlace = document.createElement("div");
    gamePlace.id = "gamePlace";
    gamePlace.style.width = "80%";
    gamePlace.style.height = "70%";
    gamePlace.style.margin = "auto";
    gamePlace.style.marginTop = "1%";
    gamePlace.style.backgroundColor = "#116466";
    gamePlace.style.border = "solid #2C3531 0.2vw";
    gamePlace.style.opacity = "0";
    gamePlace.style.animationName = "fadeIn";
    gamePlace.style.animationIterationCount = "1";
    gamePlace.style.animationDuration = "3s";
    gamePlace.style.animationTimingFunction = "ease-in";
    gamePlace.style.animationDelay = "1s";

    setTimeout(() => {
        gamePlace.style.opacity = "1"; //Animation fondu
    }, 3900);
    container.appendChild(gamePlace);

    //Quand la souris bouge, on appelle la fonctoin changePositionPlayer qui bouge le joueur en fonction de la souris
    gamePlace.addEventListener("mousemove", (event) => {
        changePositionPlayer(event);
    });
    

    //Création de la balle
    let ball = document.createElement("div");
    ball.id = "ball";
    gamePlace.appendChild(ball);
    ball.style.width = "2vw";
    ball.style.height = "2vw";
    ball.style.borderRadius = "50%";
    ball.style.backgroundColor = "whitesmoke";
    ball.style.position = "absolute";
    ball.style.top = "49%";
    ball.style.left = "49%";
    ball.style.border = "solid #2C3531 0.1vw";
    

    //Création des rectangles (joueur et bot)
    let player = document.createElement("div");
    player.id = "player";
    gamePlace.appendChild(player);
    player.style.width = "1%";
    player.style.height = "10%";
    player.style.backgroundColor = "whitesmoke";
    player.style.position = "absolute";
    player.style.top = "45%";
    player.style.border = "solid #2C3531 0.1vw";
    player.style.left = "10%";

    let bot = document.createElement("div");
    bot.id = "bot";
    gamePlace.appendChild(bot);
    bot.style.width = "1%";
    bot.style.height = "10%";
    bot.style.backgroundColor = "whitesmoke";
    bot.style.position = "absolute";
    bot.style.top = "45%";
    bot.style.border = "solid #2C3531 0.1vw";
    bot.style.right = "10%";
}

function addBlurBackground(){
    //Pour chaque enfant de body, on met un filtre flou (on met pas directiement le flou à body car sinon la fenetre qui s'ajoutera à body sera elle aussi flouté)
    let children_body = document.body.children;
    let n = children_body.length;
    for(let i = 1; i<n; i++){
        children_body[i].style.setProperty("filter", "blur(5px)");
    }
}

function deleteBlurBackground(){
    //Pour chaque enfant de body, on enlève le filtre flou
    let children_body = document.body.children;
    let n = children_body.length;
    for(let i = 1; i<n; i++){
        children_body[i].style.setProperty("filter", "none");
    }
}

function changePositionPlayer(event){
    let player = document.getElementById("player");
    let gamePlace = document.getElementById("gamePlace");
    let mouse_pos = event.clientY; //On récupère la position de la souris
    let h = player.getBoundingClientRect().height; //element.getBoundingClientRect() Renvoie des informations sur l'élément par rapport au viewport de la page
    let newpos = mouse_pos - gamePlace.parentElement.getBoundingClientRect().top - h/2;
    if(newpos < gamePlaceTop() || newpos > gamePlaceBottom() - h){
        return; //On ne bouge pas le joueur si sa nouvelle position sort du jeu
    }
    player.style.top = newpos + "px";
}

function countDown(){
    //Affiche le compte à rebour
    let number = document.createElement("h3");
    document.getElementById("game-container").appendChild(number);
    number.style.textAlign = "center";
    number.style.fontSize = "2vw";
    let i = 5;
    let tempInterval = setInterval(() => {
        if(i >= 0){
            number.innerHTML = i.toString(); //On affiche le chiffre
            i--;
        } else{
            clearInterval(tempInterval);
            number.remove();
            start(); //On commence le jeu
        }
    }, 1000);
    
}

function start(){
    let random_start_direction = Math.random();
    //On lance la balle dans une direction aléatoire
    if(random_start_direction <= 0.25){
        speed_x = speed_ball;
        speed_y = speed_ball;
    } else if(random_start_direction <= 0.50){
        speed_x = -1 * speed_ball;
        speed_y = speed_ball;
    } else if(random_start_direction <= 0.75){
        speed_x = speed_ball;
        speed_y = -1 * speed_ball;
    } else{
        speed_x = -1 * speed_ball;
        speed_y = -1 * speed_ball;
    }
    moveInterval = setInterval(changePositionBall, 1);

    //On lance le bot
    botInterval = setInterval(changePositionBot, 1);
}

function changePositionBall(){
    let ball = document.getElementById("ball");

    let ball_position_x = parseFloat(window.getComputedStyle(ball).left); //window.getComputedStyle(element) renvoie le style de l'élément : si dans le css on met l'unité en %, vw, rem, etc... cela nous renvoie en pixel
    let ball_position_y = parseFloat(window.getComputedStyle(ball).top); //window.getComputedStyle(element) renvoie le style de l'élément : si dans le css on met l'unité en %, vw, rem, etc... cela nous renvoie en pixel
    
    let new_position_x = ball_position_x + speed_x;
    let new_position_y = ball_position_y - speed_y;

    collisionBall(new_position_x, new_position_y); //On regarde s'il va y avoir une collision avec la nouvelle position de la balle

    ball.style.left = ball_position_x + speed_x + "px";
    ball.style.top = ball_position_y - speed_y + "px"; //on soustrait speed_y car si speed_y > 0 alors on va vers le haut mais on bouge la position à partir de top donc on inverse le signe 
    
}

function collisionBall(new_position_x, new_position_y){
    //Dès que la balle touche un mur, sa vitesse augmente
    let ball = document.getElementById("ball");
    let player = document.getElementById("player");
    let bot = document.getElementById("bot");
    let ball_rect = ball.getBoundingClientRect(); //element.getBoundingClientRect() Renvoie des informations sur l'élément par rapport au viewport de la page
    let player_rect = player.getBoundingClientRect(); //element.getBoundingClientRect() Renvoie des informations sur l'élément par rapport au viewport de la page
    let bot_rect = bot.getBoundingClientRect(); //element.getBoundingClientRect() Renvoie des informations sur l'élément par rapport au viewport de la page

    //Quand la balle arrive dans la zone du joueur
    if(new_position_x <= (player.offsetLeft + player_rect.width)){
        //On regarde si le joueur touche la balle
        
        //offsetTop renvoie la différence entre le top de la carte et le top du parent
        if(player.offsetTop <= (new_position_y + ball_rect.height) && new_position_y <= (player.offsetTop + player_rect.height)){
            speed_x = -speed_x;
            updateSpeedBall();
        } else if(new_position_x <= gamePlaceLeft()){
            stopGame(false);
            return;
        }
    }

    //Quand la balle arrive dans la zone du bot
    if((new_position_x + ball_rect.width) >= (bot.offsetLeft)){
        //On regarde si le bot touche la balle

        //offsetTop renvoie la différence entre le top de la carte et le top du parent
        if(bot.offsetTop <= (new_position_y + ball_rect.height) && new_position_y <= (bot.offsetTop + bot_rect.height)){
            speed_x = -speed_x;
            updateSpeedBall();
        } else if(new_position_x + ball_rect.width >= gamePlaceRight()){
            stopGame(true);
            return;
        }
    }

    //On regarde s'il va y avoir une collision avec le haut ou le bas de la zone de jeu
   if(new_position_y < gamePlaceTop() || new_position_y > gamePlaceBottom() - ball_rect.height){
        speed_y = -speed_y;
        updateSpeedBall();
    }
}

function gamePlaceTop(){
    //Renvoie position du haut de la zone de jeu
    let gamePlace = document.getElementById("gamePlace");
    return gamePlace.getBoundingClientRect().top - gamePlace.parentElement.getBoundingClientRect().top - parseFloat(window.getComputedStyle(gamePlace).borderWidth)*2;
}

function gamePlaceBottom(){
    //Renvoie position du bas de la zone de jeu
    let gamePlace = document.getElementById("gamePlace");
    return gamePlace.getBoundingClientRect().bottom - gamePlace.parentElement.getBoundingClientRect().top - parseFloat(window.getComputedStyle(gamePlace).borderWidth)*2;
}

function gamePlaceLeft(){
    //Renvoie position de la gauche de la zone de jeu
    let gamePlace = document.getElementById("gamePlace");
    return gamePlace.getBoundingClientRect().left - gamePlace.parentElement.getBoundingClientRect().left - parseFloat(window.getComputedStyle(gamePlace).borderWidth)*2; 
}

function gamePlaceRight(){
    //Renvoie position de la droite de la zone de jeu
    let gamePlace = document.getElementById("gamePlace");
    return gamePlace.getBoundingClientRect().right - gamePlace.parentElement.getBoundingClientRect().left - parseFloat(window.getComputedStyle(gamePlace).borderWidth)*2;
}

function playerTop(){
    //Renvoie position du haut du joueur
    let player = document.getElementById("player");
    return player.getBoundingClientRect().top - player.parentElement.getBoundingClientRect().top;
}

function botTop(){
    //Renvoie position du haut du bot
    let bot = document.getElementById("bot");
    return bot.getBoundingClientRect().top - bot.parentElement.getBoundingClientRect().top;
}

function updateSpeedBall(){
    //On augmente la vitesse de la balle
    speed_ball += 0.05;
    if(speed_x < 0){
        speed_x = -speed_ball;
    } else{
        speed_x = speed_ball
    }

    if(speed_y < 0){
        speed_y = -speed_ball;
    } else{
        speed_y = speed_ball
    }
}

function stopGame(win){
    clearInterval(moveInterval);
    clearInterval(botInterval);
    if(win){
        alert("Vous avez gagné !\nVotre message s'enverra dans quelques secondes...");
        document.getElementById("game-container").remove();
        deleteBlurBackground();
        setTimeout(() => {
            document.getElementById("contact-before").style.display = "none";
            document.getElementById("contact-after").style.display = "block";
        }, 1000);
    } else{
        alert("Vous avez perdu !\nRetentez une prochaine fois :) ");
        setTimeout(() => {
            window.location = "contact.html";
        }, 1000);
    }
}

function changePositionBot(){
    let ball = document.getElementById("ball");
    let ball_position_y = parseFloat(window.getComputedStyle(ball).top); //window.getComputedStyle(element) renvoie le style de l'élément : si dans le css on met l'unité en %, vw, rem, etc... cela nous renvoie en pixel
    let bot = document.getElementById("bot");
    let bot_position_y = parseFloat(window.getComputedStyle(bot).top); //window.getComputedStyle(element) renvoie le style de l'élément : si dans le css on met l'unité en %, vw, rem, etc... cela nous renvoie en pixel
    let h = bot.getBoundingClientRect().height; //element.getBoundingClientRect() Renvoie des informations sur l'élément par rapport au viewport de la page

    let new_pos;
    if(bot_position_y > ball_position_y){
        new_pos = bot_position_y - speed_bot;
    } else{
        new_pos = bot_position_y + speed_bot;
    }

    if(new_pos < gamePlaceTop() || new_pos > gamePlaceBottom() - h){
        return; //On ne bouge pas le bot si sa nouvelle position sort du jeu
    }
    bot.style.top = new_pos + "px";
}

initialisation();