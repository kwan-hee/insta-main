// const input = document.querySelector("input#searchInput");
// const log = document.querySelector("span#result");

const com = document.querySelector("input#comment");
const Button = document.querySelector("button#bt");

Button.addEventListener("click", function (e) {
  document.querySelector("p#result").innerHTML = com.value;
  com.value = null;
});
