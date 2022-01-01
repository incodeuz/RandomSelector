document.querySelector(".button").addEventListener("click", getRandom);
function getRandom() {
  let number = document.querySelector(".input").value;
  let random = Math.floor(Math.random() * number);
  document.querySelector(".text").innerHTML = random;
}
