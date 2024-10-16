//code for the mouse events
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", event => {
  event.target.style.backgroundColor = "crimson";
  event.target.textContent = "NOW YOU'VE DONE IT!!!🤬";
});

myButton.addEventListener("mouseover", event => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "Are you sure about that? 🤔";
});

myButton.addEventListener("mouseout", event => {
  event.target.style.backgroundColor = "limegreen";
  event.target.textContent = "Click Here! 😀";
});
