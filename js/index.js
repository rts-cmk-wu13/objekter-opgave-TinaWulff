// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))



/////////// HEADER
//IMAGE
let wrapper = document.querySelector(".wrapper");

let header = document.querySelector("header");
// document.body.append(header);

let headerImg = document.createElement("img");
headerImg.src = hero.image;
header.appendChild(headerImg);

///// MENU
// NAV
let menuBar = document.createElement("nav");
header.appendChild(menuBar);

let icon = document.createElement("img");
menuBar.appendChild(icon);
icon.src = hero.icon;
icon.classList.add("icon");


let buttonMenu = document.createElement("button");
menuBar.appendChild(buttonMenu);
buttonMenu.classList.add("buttonMenu");


// buttonMenu.style.width = "5.4em";
// buttonMenu.style.height = "3.3em";
// buttonMenu.style.borderRadius = "30px";
// buttonMenu.style.borderStyle = "none";
// buttonMenu.style.gridColumn = "2";
// buttonMenu.style.gridRow = "1";

let buttonContent1 = document.createElement("i");
let buttonContent2 = document.createElement("i");
buttonContent1.innerHTML = '<i class="fa-solid fa-chevron-down"></i>'
buttonContent2.innerHTML = '<i class="fa-solid fa-circle-user"></i>'
buttonMenu.appendChild(buttonContent1);
buttonMenu.appendChild(buttonContent2);
buttonContent1.classList.add("buttonContentChevron");
buttonContent2.classList.add("buttonContentUser");

// HERO SECTION
let heroSection = document.querySelector(".hero");


// H1
let heroHeadline = document.createElement("h1");
heroHeadline.innerHTML = hero.headline;
heroSection.appendChild(heroHeadline);

// p
let heroParagraph = document.createElement("p");
heroParagraph.innerHTML = hero.copy;
heroSection.appendChild(heroParagraph);


// Hero-section -> button
let HeroButtonDiv = document.createElement("div");
heroSection.appendChild(HeroButtonDiv);
HeroButtonDiv.classList.add("HeroButtonDiv");

let heroLinkImg = document.createElement("img");
heroLinkImg.src = hero.icon;
let heroLink = document.createElement("a");
heroLink.href = "#";
heroLink.innerHTML = "Explore";


HeroButtonDiv.appendChild(heroLinkImg);
HeroButtonDiv.appendChild(heroLink);

// SERVICES SECTION

let servicesSection = document.querySelector(".services");

services.forEach(services => {
let serviceCard = document.createElement("article");
serviceCard.classList.add("serviceCard");

let serviceCard__Img = document.createElement("img");
serviceCard__Img.src = services.illustration;

let serviceCard__Headline = document.createElement("h2");
serviceCard__Headline.textContent = services.headline;

let serviceCard__paragraph = document.createElement("p");
serviceCard__paragraph.textContent = services.text;

let serviceCard__Link = document.createElement("p");
serviceCard__Link.textContent = services.linktext;

servicesSection.appendChild(serviceCard__Img);
servicesSection.appendChild(serviceCard__Headline);
servicesSection.appendChild(serviceCard__paragraph);
servicesSection.appendChild(serviceCard__Link);

});









