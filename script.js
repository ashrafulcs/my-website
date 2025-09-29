let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartDiv = document.getElementById("cart");
const totalP = document.getElementById("total");
const checkoutBtn = document.getElementById("checkout");

// Toggle cart
const toggleBtn = document.getElementById("toggle-cart");
const floatingCart = document.getElementById("floating-cart");

toggleBtn.addEventListener("click", () => {
  floatingCart.classList.toggle("collapsed");
});


// Update cart display
function updateCart() {
  cartDiv.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    let div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      ${item.name} - ৳${item.price} 
      <button onclick="removeItem(${index})">X</button>
    `;
    cartDiv.appendChild(div);
  });

  totalP.textContent = "Total: ৳" + total;
}

// Remove item from cart
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// Add product to cart
document.querySelectorAll(".item button").forEach(btn => {
  btn.addEventListener("click", () => {
    const parent = btn.parentElement;
    const name = parent.dataset.name;
    const price = parseInt(parent.dataset.price);

    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
  });
});

// Checkout
checkoutBtn.addEventListener("click", () => {
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "receipt.html";
});

// Initialize cart
updateCart();
