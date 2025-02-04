// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))



/////////// HEADER
//IMAGE
let header = document.createElement("img");
header.src = hero.image;
document.body.append(header);
header.style.maxWidth = "1440px";
header.style.display = "block"
header.style.margin = "0 auto";

///// MENU
// NAV
let menuBar = document.createElement("nav");

let icon = document.createElement("img");
icon.src = hero.icon;

let buttonMenu = document.createElement("button");
buttonMenu.innerHTML = '<i class="fa-solid fa-chevron-down"></i> <i class="fa-solid fa-user"></i>';


