window.alert("CSS is awesome! Don't you think so?");
// code for the mouse events
const coolFeatureOne = document.getElementById("coolFeatureOne");

coolFeatureOne.addEventListener("click", event => {
  event.target.style.backgroundColor = "limegreen";
  event.target.style.color = "#f2f2f2";
  event.target.textContent = "Hey There!";
});

coolFeatureOne.addEventListener("mouseover", event => {
  event.target.style.backgroundColor = "gold";
  event.target.style.color = "brown";
  event.target.textContent = "Hmmm...should you do it?";
});

coolFeatureOne.addEventListener("mouseout", event => {
  event.target.style.backgroundColor = "darkblue";
  event.target.style.color = "#f2f2f2";
  event.target.textContent = "Cool Feature 1";
});

const coolFeatureTwo = document.getElementById("coolFeatureTwo");

coolFeatureTwo.addEventListener("click", event => {
  event.target.style.backgroundColor = "limegreen";
  event.target.style.color = "#f2f2f2";
  event.target.textContent = "Hey There!";
});

coolFeatureTwo.addEventListener("mouseover", event => {
  event.target.style.backgroundColor = "gold";
  event.target.style.color = "brown";
  event.target.textContent = "Hmmm...should you do it?";
});
