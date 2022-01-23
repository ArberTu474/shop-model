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

let totalPrice = 0;

function openCart() {
  const listItemTotal = document.querySelector("#list-item-total-label");
  const cartBuyBtn = document.querySelector("#cart-buy");
  const btnAlign = document.querySelector("#pop-up-action");
  const listTotalPrice = document.querySelector("#list-total-price");
  const popUpListContiner = document.querySelector("#pop-up-list-container");
  const emptyCart = document.querySelector("#empty-cart");

  // checks if the total price is 0 and formats the cart pop up
  if (totalPrice <= 0) {
    listItemTotal.style.display = "none";
    cartBuyBtn.style.display = "none";
    listTotalPrice.style.display = "none";
    popUpListContiner.style.display = "none";
    emptyCart.style.display = "flex";
    btnAlign.style.justifyContent = "center";
  } else {
    listItemTotal.style.display = "";
    cartBuyBtn.style.display = "";
    popUpListContiner.style.display = "block";
    listTotalPrice.style.display = "flex";
    emptyCart.style.display = "none";
    btnAlign.style.justifyContent = "space-between";
  }

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

// OFFERS

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

//Favorite toggle

let pressed = false;
function favoriteToggle(x) {
  if (pressed === false) {
    x.classList.replace("material-icons-outlined", "material-icons");
    pressed = true;
  } else if (pressed === true) {
    x.classList.replace("material-icons", "material-icons-outlined");
    pressed = false;
  }
}

//Cart functionality

let price;
let itemsNumber = 0;

function addCart(e) {
  //get from the element the price and converting it to a number
  price = parseInt(e.innerHTML.slice(20, 30));

  totalPriceCal();
  addCartItem();
  console.log(totalPrice);
  console.log(itemsNumber);
}

//Calculate the cart total price
const totalPriceLabel = document.querySelector("#total-price-label");

function totalPriceCal() {
  totalPrice = totalPrice + price;
  itemsNumber++;
  totalPriceLabel.textContent = `$${totalPrice}`;
}

//Creates list items
const popUpListContainer = document.querySelector("#pop-up-list-container");

function addCartItem() {
  let newPopUpList = document.createElement("div");
  newPopUpList.classList.add("pop-up-list");

  let newListItem = document.createElement("div");
  newListItem.classList.add("list-item");

  let newListIndicator = document.createElement("div");
  newListIndicator.classList.add("list-indicator");
  newListIndicator.textContent = itemsNumber;

  let newListItemNameContainer = document.createElement("div");
  newListItemNameContainer.classList.add("list-item-name-container");

  let newListItemName = document.createElement("p");
  newListItemName.classList.add("list-item-name");
  newListItemName.textContent = "iPhone 13 Por Max refubished";

  let newListItemPrice = document.createElement("div");
  newListItemPrice.classList.add("list-item-price");
  newListItemPrice.textContent = `$${price}`;

  popUpListContainer
    .appendChild(newPopUpList)
    .appendChild(newListItem)
    .appendChild(newListIndicator);

  newListItem
    .appendChild(newListItemNameContainer)
    .appendChild(newListItemName);
  newListItem.appendChild(newListItemPrice);
}
