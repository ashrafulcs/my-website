let cart = [];

const cartDiv = document.getElementById("cart");
const totalP = document.getElementById("total");

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

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

document.querySelectorAll(".item button").forEach((btn) => {
  btn.addEventListener("click", () => {
    let parent = btn.parentElement;
    let name = parent.getAttribute("data-name");
    let price = parseInt(parent.getAttribute("data-price"));

    cart.push({ name, price });
    updateCart();
  });
});

document.getElementById("checkout").addEventListener("click", () => {
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "receipt.html";
});
