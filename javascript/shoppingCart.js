const addToCartButtons = document.getElementsByClassName("product-button");
const message = document.getElementById("message");

const productNames = ["Asus Rog Azoth", "Asus Rog Claymore", "Wooting 60HE", "vier", "vijf", "zes", "zeven"];

for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", function(e) {
    message.innerHTML += `${productNames[i]} <br>`;
  });
};