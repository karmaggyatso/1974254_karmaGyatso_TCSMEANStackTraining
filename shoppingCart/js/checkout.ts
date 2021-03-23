if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", retrieveSession);
} else {
  retrieveSession();
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

  var i = 1;

  do {
    var cartRowContent = `
        <div class="container cart-items">
            <img class="cart-image" src="${
              displayObjcart[i - 1].imgSrc
            }" alt="" width = "100" height="auto">
            <p class="cart-title">${displayObjcart[i - 1].title}</p>
            <p class="cart-price">${displayObjcart[i - 1].price}</p>
          </div>
        `;

    console.log(i);
    cartRow.innerHTML = cartRowContent;
    i++;
  } while (i <= displayObjcart.length);
  cartItems.appendChild(cartRow);

  // console.log(displayObjcart[0].title);
  // console.log(displayObjcart[0].price);
  // console.log(displayObjcart[0].imgSrc);
}
