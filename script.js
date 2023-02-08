const card = document.querySelector(".card");
const cardImage = document.querySelector(".card img");
const gridDimension = 16;

for (let i = 0; i < gridDimension ** 2; i++) {
  let mouseTracker = document.createElement("div");
  mouseTracker.className = "mouse-tracker";
  card.insertBefore(mouseTracker, cardImage);
  // console.log(i);
}
