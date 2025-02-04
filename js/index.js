// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))



/////////// HEADER
//IMAGE
let wrapper = document.querySelector(".wrapper");
wrapper.style.maxWidth = "1440px";
wrapper.style.margin = "0 auto";

let header = document.querySelector("header");
// document.body.append(header);
header.style.display = "grid";
header.style.gridArea = "1/1/2/-1";
header.style.justifyContent = "space-between";


let headerImg = document.createElement("img");
headerImg.src = hero.image;
header.appendChild(headerImg);

headerImg.style.maxWidth = "100%";
headerImg.style.order = "2";

///// MENU
// NAV
let menuBar = document.createElement("nav");
header.appendChild(menuBar);

//style nav
menuBar.style.display = "grid";
menuBar.style.gridTemplateColumns = "2";
menuBar.style.gridTemplateRows = "1";
menuBar.style.justifyContent = "space-between";
menuBar.style.order = "1";
menuBar.style.alignItems = "flex-start"


let icon = document.createElement("img");
icon.src = hero.icon;
icon.style.display = "block";
icon.style.gridColumn = "1";
icon.style.gridRow = "1";
//icon.style.order = 2;
menuBar.appendChild(icon);

let buttonMenu = document.createElement("button");
menuBar.appendChild(buttonMenu);

//buttonMenu.style.display = "grid";
buttonMenu.style.width = "5.4em";
buttonMenu.style.height = "3.3em";
buttonMenu.style.borderRadius = "30px";
buttonMenu.style.borderStyle = "none";
buttonMenu.style.gridColumn = "2";
buttonMenu.style.gridRow = "1";

/*




let menuBar = document.createElement("nav");


// ikon



// Menu Knap
let buttonMenu = document.createElement("button");
// let buttonContent1 = document.createElement("i");
// let buttonContent2 = document.createElement("i");
// buttonContent1.innerHTML = '<i class="fa-solid fa-chevron-down"></i> <i class="fa-solid fa-user"></i>';
// document.body.append(buttonContent1)
buttonMenu.innerHTML = '<i class="fa-solid fa-chevron-down"></i> <i class="fa-solid fa-user"></i>';
menuBAr.append(buttonMenu);

*/





