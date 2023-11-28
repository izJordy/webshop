const addToCartButtons = document.getElementsByClassName("product-button");
const message = document.getElementById("message");
const cartItems = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const remove = document.getElementById("remove");

const productNames = ["Asus Rog Azoth", "Asus Rog Claymore", "Wooting 60HE"];
const productPrices = [295.45, 230.87, 189.99];

let cart = [];
let totalPrice = 0;


//voegt event toe aan alle buttons en geeft dan de parameter i door naar function addToCart
//dus bv als 2de product word geklikt dan word productIndex dus 1 want we tellen van 0
for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", function (e) {
    addToCart(i);
  });
}

remove.addEventListener("click", function(e) {
  alert("hello");
})

//function om toetevoege aan cart[] en gaat ook checken if product already exists in cart[]
function addToCart(productIndex) {
  const productName = productNames[productIndex];
  const productPrice = productPrices[productIndex];

  //find methode die zoekt het eerste element in cart[] waar item.name === productName
  const existingCartItem = cart.find(item => item.name === productName);

  //als iemand een product toevoegt word dit toegevoegt in cart[];
  const newItem = {
    name: productName,
    price: productPrice,
    quantity: 1 //omdat ze enkel met 1 kunnen toevoegoen (op het moment)
  };

  if (existingCartItem) {
    existingCartItem.quantity++;
  } else {
    cart.push(newItem);
  }

  showCart();
  updateTotalPrice();
}



//nog eens overgaan
function updateTotalPrice() {
  totalPrice = cart.reduce(function (total, item) {
    return total + item.price * item.quantity;
  }, 0);

  totalPriceElement.innerHTML = "Total Price: €" + totalPrice.toFixed(2);
}

function showCart() {
  cartItems.innerHTML = "";

  cart.forEach(function(item) {
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `<br>${item.name}<br>Quantity: ${item.quantity}<br>€${(item.price * item.quantity).toFixed(2)}`;
    cartItems.appendChild(cartItem);
  });
}

