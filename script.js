const card = document.querySelector(".card");
const cardImage = document.querySelector(".card-image");
const gridDimension = 10;

for (let i = 0; i < gridDimension ** 2; i++) {
  let mouseTracker = document.createElement("div");
  mouseTracker.className = "mouse-tracker";
  mouseTracker.setAttribute("aria-hidden", "true");
  card.insertBefore(mouseTracker, cardImage);
}
