let is_playing = false;
let radiusBall = "2vw";
let speed_ball = 0.3;
let speed_x = 0;
let speed_y = 0;
let moveInterval;

function initialisation(){
    let form = document.getElementById("form-contact");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if(!is_playing){
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

    gamePlace.addEventListener("mousemove", (event) => {
        changePositionPlayer(event);
    });
    

    //Création de la balle
    let ball = document.createElement("div");
    ball.id = "ball";
    gamePlace.appendChild(ball);
    ball.style.width = radiusBall;
    ball.style.height = radiusBall;
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
    let children_body = document.body.children;
    let n = children_body.length;
    for(let i = 1; i<n; i++){
        children_body[i].style.setProperty("filter", "blur(5px)");
    }
}

function deleteBlurBackground(){
    let children_body = document.body.children;
    let n = children_body.length;
    for(let i = 1; i<n; i++){
        children_body[i].style.setProperty("filter", "none");
    }
}

function changePositionPlayer(event){
    let player = document.getElementById("player");
    let gamePlace = document.getElementById("gamePlace");
    let mouse_pos = event.clientY;
    let h = player.getBoundingClientRect().height;
    let newpos = mouse_pos - gamePlace.parentElement.getBoundingClientRect().top - h/2;
    if(newpos < gamePlaceTop() || newpos > gamePlaceBottom() - h){
        return; //On ne bouge pas le joueur si sa nouvelle position sort du jeu
    }
    player.style.top = newpos + "px";
}

function countDown(){
    let number = document.createElement("h3");
    document.getElementById("game-container").appendChild(number);
    number.style.textAlign = "center";
    number.style.fontSize = "2vw";
    let i = 5;
    let tempInterval = setInterval(() => {
        if(i >= 0){
            number.innerHTML = i.toString();
            i--;
        } else{
            clearInterval(tempInterval);
            number.remove();
            start();
        }
    }, 1000);
    
}

function start(){
    let random_start_direction = Math.random();
    //On lance la balle dans une direction aléatoire
    if(random_start_direction <= 0.25){
        console.log("Top Right");
        speed_x = speed_ball;
        speed_y = speed_ball;
    } else if(random_start_direction <= 0.50){
        console.log("Top Left");
        speed_x = -1 * speed_ball;
        speed_y = speed_ball;
    } else if(random_start_direction <= 0.75){
        console.log("Bottom Right");
        speed_x = speed_ball;
        speed_y = -1 * speed_ball;
    } else{
        console.log("Bottom Left");
        speed_x = -1 * speed_ball;
        speed_y = -1 * speed_ball;
    }
    moveInterval = setInterval(changePositionBall, 1);
}

function changePositionBall(){
    let ball = document.getElementById("ball");
    let ball_position_x = parseFloat(window.getComputedStyle(ball).left);
    let ball_position_y = parseFloat(window.getComputedStyle(ball).top);
    let new_position_x = ball_position_x + speed_x;
    let new_position_y = ball_position_y - speed_y;
    collisionBall(new_position_x, new_position_y);
    ball.style.left = ball_position_x + speed_x + "px";
    ball.style.top = ball_position_y - speed_y + "px"; //on soustrait speed_y car si speed_y > 0 alors on va vers le haut mais on bouge la position à partir de top donc on inverse le signe 
    
}

function collisionBall(new_position_x, new_position_y){
    let ball = document.getElementById("ball");
    let player = document.getElementById("player");
    let bot = document.getElementById("bot");
    let ball_rect = ball.getBoundingClientRect();
    let player_rect = player.getBoundingClientRect();
    let bot_rect = bot.getBoundingClientRect();

    //Quand la balle arrive dans la zone du joueur
    if(new_position_x <= player.offsetLeft + player_rect.width){
        console.log("zone du joueur");
        //On regarde si le joueur touche la balle
        if(playerTop() + player_rect.height <= new_position_y + ball_rect.height && new_position_y <= playerTop() + 2*player_rect.height){
            console.log("collision du joueur");
            speed_x = -speed_x;
            updateSpeedBall();
        } else if(new_position_x <= gamePlaceLeft()){
            console.log("perdu");
            stopGame(false);
            return;
        }
    }

    //Quand la balle arrive dans la zone du bot
    console.log(new_position_x + " | " + bot.offsetLeft + " | " + bot_rect.width);
    if(new_position_x + ball_rect.width >= bot.offsetLeft - bot_rect.width){
        console.log("zone du bot");
        //On regarde si le bot touche la balle
        if(botTop() + bot_rect.height <= new_position_y + ball_rect.height && new_position_y <= botTop() + 2*bot_rect.height){
            console.log("collision du bot");
            speed_x = -speed_x;
            updateSpeedBall();
        } else if(new_position_x + ball_rect.width >= gamePlaceRight()){
            console.log("gagné");
            stopGame(true);
            return;
        }
    }

    //On regarde s'il va y avoir une collision avec le haut ou le bas de la zone de jeu
   if(new_position_y < gamePlaceTop() || new_position_y > gamePlaceBottom() - ball.clientHeight){
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
    return player.getBoundingClientRect().top - player.parentElement.getBoundingClientRect().top - parseFloat(window.getComputedStyle(player).borderWidth)*2;
}

function botTop(){
    //Renvoie position du haut du bot
    let bot = document.getElementById("bot");
    return bot.getBoundingClientRect().top - bot.parentElement.getBoundingClientRect().top - parseFloat(window.getComputedStyle(bot).borderWidth)*2;
}

function updateSpeedBall(){
    //On augmente la vitesse de la balle
    speed_ball += 0.04;
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
    if(win){
        alert("Vous avez gagné !\nVotre message s'enverra dans quelques secondes...");
        document.getElementById("game-container").remove();
        deleteBlurBackground();
        setTimeout(() => {
            document.getElementById("contact-before").style.display = "none";
            document.getElementById("contact-after").style.display = "block";
        }, 3000);
    } else{
        alert("Vous avez perdu !\nRetentez une prochaine fois :) ");
        setTimeout(() => {
            window.location = "contact.html";
        }, 3000);
    }
}

initialisation();