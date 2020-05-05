let btn = document.querySelector(".btn");
let slider = document.querySelector(".slider");
let body = document.querySelector(".body");
btn.addEventListener("click", move);
let currentPos = "left";
function move() {
    switch (currentPos) {
        case "left":
            btn.style.backgroundImage =  "linear-gradient(to right,  hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
            slider.style.backgroundColor = "hsl(230, 17%, 14%)";
            btn.style.justifyContent = "flex-end";
            currentPos = "right";
            break;
        case "right":
            btn.style.backgroundImage = "none";
            slider.style.backgroundColor = "#fff";
            btn.style.justifyContent = "flex-start";
            currentPos = "left"
            break;
    }
}
