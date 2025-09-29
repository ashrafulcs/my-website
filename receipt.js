let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

let receiptDiv = document.getElementById("receipt");
let html = "<h3>Items Purchased:</h3>";

cart.forEach(item => {
  html += `<p>${item.name} - ৳${item.price}</p>`;
  total += item.price;
});

html += `<hr><p><b>Total: ৳${total}</b></p>`;
html += `<br><button onclick="goBack()">Back to Shop</button>`;
receiptDiv.innerHTML = html;

function goBack() {
  window.location.href = "index.html"; // change if your shop page has a different name
}

// clear cart after purchase
localStorage.removeItem("cart");
