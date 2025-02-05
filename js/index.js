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

let serviceCard__Link = document.createElement("a");
serviceCard__Link.href = "#"; 
serviceCard__Link.textContent = services.linktext;
serviceCard__Link.classList.add("card-link");

serviceCard.appendChild(serviceCard__Img);
serviceCard.appendChild(serviceCard__Headline);
serviceCard.appendChild(serviceCard__paragraph);
serviceCard.appendChild(serviceCard__Link);


servicesSection.appendChild(serviceCard);
});


// FACILITIES SECTION
let facilitiesSection = document.querySelector(".facilities");
let facilityHeadline = document.createElement("h2");
facilityHeadline.textContent = facilities.headline;
facilitiesSection.append(facilityHeadline);

facilities.options.forEach(facility => {
    let facilityCard = document.createElement("article");
    facilityCard.classList.add("facilityCard");

    let facilityCard_icon = document.createElement("img");
    facilityCard_icon.src = facility.icon;

    let facilityCard_headline = document.createElement("h3");
    facilityCard_headline.textContent = facility.headline;

    let facilityCard_paragraph = document.createElement("p");
    facilityCard_paragraph.textContent = facility.text;

    let facilityCard_showmore = document.createElement("a");
    facilityCard_showmore.href = "#";

    facilityCard_showmore.textContent = facilities.link; // Bruger det overordnede "Show me more"
    facilityCard_showmore.classList.add("card-link");

    facilityCard.appendChild(facilityCard_icon);
    facilityCard.appendChild(facilityCard_headline);
    facilityCard.appendChild(facilityCard_paragraph);
    facilityCard.appendChild(facilityCard_showmore);
    facilitiesSection.appendChild(facilityCard);

});


//SITES SECTION

// DIV'en med HEADLINE, P & BUTTON
let sitesSection = document.querySelector(".sites");

let sitesSection__div = document.createElement("div");
sitesSection__div.classList.add("sitesSection__div")
let sitesSection__div__headline = document.createElement("h2");
sitesSection__div__headline.textContent = sites.headline;

let sitesSection__div__p = document.createElement("p");
sitesSection__div__p.textContent = sites.text;

let sitesSection__div__link = document.createElement("a");
sitesSection__div__link.classList.add("sites_div_button");
sitesSection__div__link.href = "#";
sitesSection__div__link.innerHTML = "Start";
// sitesSection__div__link.innerHTML = `${sites.btnicon} Start`;
let sitesSection__div__link__icon = document.createElement("img");
sitesSection__div__link__icon.src = sites.btnicon;

sitesSection.append(sitesSection__div);
sitesSection__div.appendChild(sitesSection__div__headline);
sitesSection__div.appendChild(sitesSection__div__p);

sitesSection__div.appendChild(sitesSection__div__link);
sitesSection__div__link.appendChild(sitesSection__div__link__icon);

//Site CARDS

sites.places.forEach(site => {
let sitesSection__card = document.createElement("div");
sitesSection__card.classList.add("sites__card"); 

let sitesSection__card__img = document.createElement("img");
sitesSection__card__img.src = site.img;
let sitesSection__card__name = document.createElement("h3");
sitesSection__card__name.textContent = site.name;
let sitesSection__card__city = document.createElement("p");
sitesSection__card__city.textContent = site.city;
let sitesSection__card__view = document.createElement("a");
sitesSection__card__view.classList.add("sitesSection__card__view");
sitesSection__card__view.href = "#";
sitesSection__card__view.innerHTML = "View site";


sitesSection__card.appendChild(sitesSection__card__img);
sitesSection__card.appendChild(sitesSection__card__name);
sitesSection__card.appendChild(sitesSection__card__city);
sitesSection__card.appendChild(sitesSection__card__view);

sitesSection.append(sitesSection__card);
});


// Advantages SECTION
let advantagesSection = document.querySelector(".advantages");

let advantagesHeadline = document.createElement("h2");
advantagesHeadline.textContent = "Our Advantages";
advantagesSection.append(advantagesHeadline);

advantages.forEach(advantage => {
    let advantagesCard = document.createElement("article");
    advantagesCard.classList.add("advantagesCard");

    let advantagesCard_icon = document.createElement("img");
    advantagesCard_icon.src = advantage.icon;

    let advantagesCard_headline = document.createElement("h3");
    advantagesCard_headline.textContent = advantage.headline;

    let advantagesCard_paragraph = document.createElement("p");
    advantagesCard_paragraph.textContent = advantage.text;


    advantagesCard.appendChild(advantagesCard_icon);
    advantagesCard.appendChild(advantagesCard_headline);
    advantagesCard.appendChild(advantagesCard_paragraph);

    advantagesSection.appendChild(advantagesCard);

});



