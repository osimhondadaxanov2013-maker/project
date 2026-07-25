const rows = document.querySelectorAll(".grid__list--row");
const gridBtn = document.querySelector(".events__grid--table");
const listBtn = document.querySelector(".events__grid--list");
const grids = document.querySelector(".grids");

gridBtn.addEventListener("click", () => {
  grids.classList.remove("card-view");
  rows.forEach((row) => row.classList.remove("card-row"));
  listBtn.style.color = "#000";
  gridBtn.style.color = "#ff3f3a";
});

listBtn.addEventListener("click", () => {
  grids.classList.add("card-view");
  rows.forEach((row) => row.classList.add("card-row"));
  listBtn.style.color = "#ff3f3a";
  gridBtn.style.color = "#000";
});
