if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

let cartObj = [];

function ready() {
  var addToCartButtons = document.getElementsByClassName("addToBasket");
  for (let i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }
}

function addToCartClicked(event) {
  var addToCart = {};
  var button = event.target;
  var shopItem = button.parentElement;
  addToCart["title"] = shopItem.getElementsByClassName(
    "item-title"
  )[0].innerText;
  addToCart["price"] = shopItem.getElementsByClassName(
    "item-price"
  )[0].innerText;
  addToCart["imgSrc"] = shopItem.getElementsByClassName("item-image")[0].src;

  console.log(addToCart);

  cartObj.push(addToCart);

  sessionInStorage();
  retrieveSession();

  //   addItemToCart(title, price, imgSrc);
}

function sessionInStorage() {
  sessionStorage.setItem("cartList", JSON.stringify(cartObj));
}

function retrieveSession() {
  var retrieveObj = JSON.parse(sessionStorage.getItem("cartList"));
  console.log("message from retrieve");
  console.log(retrieveObj);

  addItemToCart(retrieveObj);
}

function addItemToCart(retrieveObj) {
  var displayObjcart = retrieveObj;
  console.log("message from addItemToCart");
  console.log(displayObjcart);

  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");

  var cartItems = document.getElementsByClassName("cart-items")[0];

  for (let i = 0; i < displayObjcart.length; i++) {
    var cartRowContent = `
        <div class="cart-item">
            <img class="cart-image" src="${displayObjcart[i].imgSrc}" alt="" width = "100" height="auto">
            <p class="cart-title">${displayObjcart[i].title}</p>
            <p class="cart-price">${displayObjcart[i].price}</p>
          </div>
        `;
  }

  cartRow.innerHTML = cartRowContent;
  cartItems.appendChild(cartRow);
  console.log(displayObjcart[0].title);
  console.log(displayObjcart[0].price);
  console.log(displayObjcart[0].imgSrc);
}
