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

const listItemTotal = document.querySelector("#list-item-total-label");
const cartBuyBtn = document.querySelector("#cart-buy");
const btnAlign = document.querySelector("#pop-up-action");
const listTotalPrice = document.querySelector("#list-total-price");
const popUpListContiner = document.querySelector("#pop-up-list-container");
const emptyCart = document.querySelector("#empty-cart");

function openCart() {
  cartUiUpdate();
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
  bookmarkPill.setAttribute("class", " nav-icon-container offers-pill");
  bookmarkIcon.innerHTML = "bookmark_outline";
  homePill.setAttribute("class", " nav-icon-container home-pill");
  homeIcon.setAttribute("class", "material-icons-outlined nav-icon");
}

const bookmarkPopUP = document.querySelector("#bookmarkPopUp");

function openBookmark() {
  bookmarkPopUP.style.display = "flex";
  html.style.height = "100%";
  html.style.overflow = "hidden";
  body.style.height = "100%";
  body.style.overflow = "hidden";
  // Remove styling form others
  cartPill.setAttribute("class", "nav-icon-container cart-pill");
  homePill.setAttribute("class", "nav-icon-container home-pill");
  homeIcon.setAttribute("class", "material-icons-outlined nav-icon");
}

// checks if the total price is 0 and formats the cart pop up
function cartUiUpdate() {
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
}

function pricesReset() {
  price = 0;
  itemsNumber = 0;
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

const bookmarkIcon = document.querySelector("#bookmarkIcon");
const bookmarkPill = document.querySelector(".bookmark-pill");

function closeBookmark() {
  bookmarkIcon.setAttribute("class", "material-icons-outlined nav-icon");
  bookmarkPill.setAttribute("class", "nav-icon-container bookmark-pill");
  bookmarkPopUp.style.display = "none";
  html.style.height = "";
  html.style.overflow = "";
  body.style.height = "";
  body.style.overflow = "";

  bookmarkIcon.innerText = "bookmark_border";
  //set home as active
  homePill.setAttribute(
    "class",
    " nav-icon-container home-pill active-nav-icon"
  );
  homeIcon.setAttribute("class", "material-icons nav-icon");
}

// BOOKMARK

function bookmarkToggle(e) {
  openBookmark(e);
  bookmarkIcon.innerText = "bookmark";

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
  bookmarkPill.setAttribute("class", " nav-icon-container offers-pill");
  bookmarkIcon.innerHTML = "bookmark_outline";
}

//Bookmark list render

const bookmarkListContainer = document.querySelector(
  "#bookmark-list-container"
);

function bookmarkListRender(element) {
  let newBookmarkListItem = document.createElement("div");
  newBookmarkListItem.classList.add("bookmark-list-item");

  let idNumber = document.createAttribute("number");
  idNumber.value = element.getAttribute("number");
  newBookmarkListItem.setAttribute("number", element.getAttribute("number"));

  let newListImg = document.createElement("img");
  newListImg.classList.add("list-img");
  newListImg.setAttribute("src", element.getAttribute("image"));

  let newListTtile = document.createElement("h2");
  newListTtile.classList.add("list-title");
  newListTtile.textContent = element.getAttribute("name");

  let newListButton = document.createElement("span");
  newListButton.classList.add("material-icons");
  newListButton.classList.add("list-bookmark");
  newListButton.setAttribute("number", element.getAttribute("number"));

  newListButton.setAttribute("onclick", "favoriteToggle(this)");
  newListButton.setAttribute("pressed", element.getAttribute("pressed"));

  newListButton.textContent = "bookmark_add";

  bookmarkListContainer
    .appendChild(newBookmarkListItem)
    .appendChild(newListImg);

  newBookmarkListItem.appendChild(newListTtile);
  newBookmarkListItem.appendChild(newListButton);
}

// Removes the empty bookmark icon if the user has bookmared sth
const emptyBookmarkIcon = document.querySelector("#empty-bookmark");

function emptyBookmark() {
  if (
    bookmarkListContainer.getElementsByClassName("bookmark-list-item").length >=
    1
  ) {
    emptyBookmarkIcon.style.display = "none";
  } else {
    emptyBookmarkIcon.style.display = "block";
  }
}

function resetBookmarkIcon(element) {
  const resetIcon = document.querySelector(
    `[number = "${element.getAttribute("number")}"]`
  );
  resetIcon.classList.replace("material-icons", "material-icons-outlined");
  resetIcon.setAttribute("pressed", false);
}

function removeBookmarkItem(element) {
  const removedElement = document.querySelector(
    `[class = "bookmark-list-item"][number = "${element.getAttribute(
      "number"
    )}"]`
  );
  resetBookmarkIcon(element);
  removedElement.remove();
  console.log(removedElement);
  console.log(element.getAttribute("pressed"));
}

//Favorite toggle

function favoriteToggle(x) {
  favoritebutton(x);
  emptyBookmark();
}

function favoritebutton(x) {
  if (x.getAttribute("pressed") === "false") {
    x.classList.replace("material-icons-outlined", "material-icons");
    x.setAttribute("pressed", true);
    bookmarkListRender(x);
    // resetBookmarkIcon(x);
  } else if (x.getAttribute("pressed") === "true") {
    removeBookmarkItem(x);
    resetBookmarkIcon(x);
  }
}

//Cart functionality

let price;
let itemsNumber = 0;

function addCart(e) {
  //get from the element the price and converting it to a number
  price = parseInt(e.innerHTML.slice(20, 30));

  totalPriceCal();
  addCartItem(e.name);
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

function addCartItem(name) {
  let newPopUpList = document.createElement("div");
  newPopUpList.classList.add("pop-up-list");

  let newListItem = document.createElement("div");
  newListItem.classList.add("list-item");

  let newListIndicator = document.createElement("div");
  newListIndicator.classList.add("list-indicator");
  newListIndicator.setAttribute("onclick", "removeCartItem(this)");
  newListIndicator.textContent = itemsNumber;

  let newListItemNameContainer = document.createElement("div");
  newListItemNameContainer.classList.add("list-item-name-container");

  let newListItemName = document.createElement("p");
  newListItemName.classList.add("list-item-name");
  newListItemName.textContent = name;

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

//Remvoe items from cart list by clicking the item indicator

let listIndicator = document.querySelector("#item-image-container");
let popUpList = document.querySelector(".pop-up-list");

function updateListItemIndicator() {
  let length =
    popUpListContainer.getElementsByClassName("list-indicator").length;

  var indArray = $(".list-indicator").toArray();

  for (var i = 0; i < indArray.length; i++) {
    indArray[i].innerHTML = i + 1;

    if (i === 0) {
      indArray[i].value = i;
    }
  }
  cartUiUpdate();

  if (indArray.length === 0) {
    pricesReset();
  }
}

let decreasePrice;

function removeCartItem(x) {
  let indexNr = x.textContent - 1;

  // Decreases the total price
  decreasePrice = popUpListContainer
    .getElementsByClassName("list-item-price")
    [indexNr].innerHTML.slice(1);

  decreasePrice = parseInt(decreasePrice);
  console.log(decreasePrice);
  totalPriceCalDecresase();

  // Removes cart item
  popUpListContainer.removeChild(popUpListContainer.childNodes[indexNr]);

  updateListItemIndicator();
}

// Calculates the total price when it is decreased
function totalPriceCalDecresase() {
  itemsNumber--; // Removes one 1 item counter from the cart list
  totalPrice = totalPrice - decreasePrice;
  totalPriceLabel.textContent = `$${totalPrice}`;
}

// Clears all the cart list items

const bin = document.querySelector("#bin");

bin.addEventListener("click", function () {
  popUpListContainer.innerHTML = "";
  totalPrice = 0;
  cartUiUpdate();
  pricesReset();
});
