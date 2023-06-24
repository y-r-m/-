// const addBtn = document.querySelector("add");
// addBtn.addEventListener("click", () => {
//   const input = document.querySelector("cart");
// });

// function cartin() {
//   let cartlist = [product_apple, product_banan];
// }
// document.getElementById(`cart`).innerText = castlist;

const addTocartBtns = document.querySelectorAll(".add");
const cartItemList = document.querySelector(".cart-items");

console.log(addTocartBtns);
console.log(cartItemList);

addTocartBtns.forEach((button) => {
  //반복문
  button.addEventListener("click", () => {
    const ProductName =
      button.previousElementSibling.previousElementSibling.textContent;
    const ProductPrice = button.previousElementSibling.textContent;
    addToCart(ProductName, ProductPrice);
  });
});

function addToCart(name, price) {
  const cartItem = document.createElement("li");
  cartItem.textContent = `${name} - ${price}`;
  cartItemList.appendChild(cartItem);
}
