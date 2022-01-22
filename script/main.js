const account = document.querySelector("#account");
const loginPopUp = document.querySelector("#loginPopUp");
const html = document.querySelector("#html");
const body = document.querySelector("#body");

// height: 100%;
// overflow: hidden;
function openAccount() {
  loginPopUp.style.display = "flex";
  html.style.height = "100%";
  html.style.overflow = "hidden";
  body.style.height = "100%";
  body.style.overflow = "hidden";
}

const email = document.querySelector("#email");
const password = document.querySelector("#password");

function closeAccount() {
  email.value = null;
  password.value = null;
  loginPopUp.style.display = "";
  html.style.height = "";
  html.style.overflow = "";
  body.style.height = "";
  body.style.overflow = "";
}

const cart = document.querySelector("#cart");
const cartIcon = document.querySelector("#cartIcon");
const cartPopUp = document.querySelector("#cartPopUp");
const cartPill = document.querySelector(".cart-pill");

function openCart() {
  cartIcon.setAttribute("class", "material-icons nav-icon");
  cartPill.setAttribute(
    "class",
    " nav-icon-container cart-pill active-nav-icon"
  );
  cartPopUp.style.display = "flex";
  html.style.height = "100%";
  html.style.overflow = "hidden";
  body.style.height = "100%";
  body.style.overflow = "hidden";
  // Remove styling form others
  offersPill.setAttribute("class", " nav-icon-container offers-pill");
  offersIcon.setAttribute("class", "material-icons-outlined nav-icon");
  homePill.setAttribute("class", " nav-icon-container home-pill");
  homeIcon.setAttribute("class", "material-icons-outlined nav-icon");
}

function closeCart() {
  cartIcon.setAttribute("class", "material-icons-outlined nav-icon");
  cartPill.setAttribute("class", " nav-icon-container cart-pill");
  cartPopUp.style.display = "none";
  html.style.height = "";
  html.style.overflow = "";
  body.style.height = "";
  body.style.overflow = "";

  //set home as active
  homePill.setAttribute(
    "class",
    " nav-icon-container home-pill active-nav-icon"
  );
  homeIcon.setAttribute("class", "material-icons nav-icon");
}

const offers = document.querySelector("#offers");
const offersIcon = document.querySelector("#offersIcon");
const offersPill = document.querySelector(".offers-pill");

function offersToggle() {
  offersPill.setAttribute(
    "class",
    " nav-icon-container offers-pill active-nav-icon"
  );
  offersIcon.setAttribute("class", "material-icons nav-icon");

  //remove styling from others
  homePill.setAttribute("class", " nav-icon-container home-pill");
  homeIcon.setAttribute("class", "material-icons-outlined nav-icon");
  cartIcon.setAttribute("class", "material-icons-outlined nav-icon");
  cartPill.setAttribute("class", " nav-icon-container cart-pill");
}

//HOME TOGGLE

const home = document.querySelector("#home");
const homeIcon = document.querySelector("#homeIcon");
const homePill = document.querySelector(".home-pill");

function homeToggle() {
  homePill.setAttribute(
    "class",
    " nav-icon-container home-pill active-nav-icon"
  );
  homeIcon.setAttribute("class", "material-icons nav-icon");

  //Remove styling from othres
  offersPill.setAttribute("class", " nav-icon-container offers-pill");
  offersIcon.setAttribute("class", "material-icons-outlined nav-icon");
}
