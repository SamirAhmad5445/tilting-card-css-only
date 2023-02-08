const card = document.querySelector(".card");
const gridDimension = 16;

for (let i = 0; i < gridDimension ** 2; i++) {
  let mouseTracker = document.createElement("div");
  mouseTracker.className = "mouse-tracker";
  card.appendChild(mouseTracker);
  // console.log(i);
}

const cardImage = document.createElement("img");
cardImage.setAttribute("src", card.getAttribute("data-src"));
cardImage.setAttribute("alt", card.getAttribute("data-alt"));
cardImage.className = "card-image";

card.appendChild(cardImage);
