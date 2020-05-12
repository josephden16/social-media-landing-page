let btn = document.querySelector(".btn");
let slider = document.querySelector(".slider");
let body = document.querySelector(".body");
let dashboard = document.querySelector(".dashboard");
let totalFollowers = document.querySelector(".total-followers");
let overviewHeader = document.querySelector("#overview-header");
let overviewCard = document.querySelectorAll(".overview-card");
let facebook = document.querySelector(".facebook");
let twitter = document.querySelector(".twitter");
let instagram = document.querySelector(".instagram");
let youtube = document.querySelector(".youtube");
let username = document.querySelectorAll(".username");
let modeText = document.querySelector(".mode-text");
let fadedText = document.querySelectorAll(".faded-text");
btn.addEventListener("click", move);
let currentPos = "left";
function move() {
    switch (currentPos) {
        case "left":
            btn.style.backgroundImage =  "linear-gradient(to right,  hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
            slider.style.backgroundColor = "hsl(230, 17%, 14%)";
            btn.style.justifyContent = "flex-end";
            currentPos = "right";
            body.style.backgroundColor = "hsl(230, 17%, 14%)";
            body.style.color = "#fff";
            dashboard.style.backgroundColor ="hsl(228, 28%, 20%)";
            totalFollowers.style.color = "hsl(228, 34%, 66%)";
            overviewHeader.style.color = "#fff";
            overviewCard.forEach(function(elm) {
                elm.style.backgroundColor = "hsl(228, 28%, 20%)";
            });            
            facebook.style.backgroundColor = "hsl(228, 28%, 20%)";
            twitter.style.backgroundColor = "hsl(228, 28%, 20%)";
            instagram.style.backgroundColor = "hsl(228, 28%, 20%)";
            youtube.style.backgroundColor = "hsl(228, 28%, 20%)";
            username.forEach(function(elm) {
                elm.style.color = "hsl(228, 34%, 66%)";
            });
            fadedText.forEach(function(elm) {
                elm.style.color = "hsl(228, 34%, 66%)";
            });
            modeText.style.color = "hsl(228, 34%, 66%)";
            break;

        case "right":
            btn.style.backgroundImage = "none";
            slider.style.backgroundColor = "#fff";
            btn.style.justifyContent = "flex-start";
            currentPos = "left";
            body.style.backgroundColor = "hsl(0, 0%, 100%)";
            body.style.color = "#000";
            dashboard.style.backgroundColor ="hsl(225, 100%, 98%)";
            totalFollowers.style.color = "hsl(228, 12%, 44%)";
            overviewHeader.style.color = "hsl(228, 12%, 44%)";
            overviewCard.forEach(function(elm) {
                elm.style.backgroundColor = "hsl(227, 47%, 96%)";
            });            
            facebook.style.backgroundColor = "hsl(227, 47%, 96%)";
            twitter.style.backgroundColor = "hsl(227, 47%, 96%)";
            instagram.style.backgroundColor = "hsl(227, 47%, 96%)";
            youtube.style.backgroundColor = "hsl(227, 47%, 96%)";
            username.forEach(function(elm) {
                elm.style.color = "hsl(228, 12%, 44%)";
            });
            fadedText.forEach(function(elm) {
                elm.style.color = "hsl(228, 12%, 44%)";
            });
            modeText.style.color = "hsl(228, 12%, 44%)";
            break;
    }
}
