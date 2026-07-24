const boxes = document.querySelectorAll("#box");
const gridBtn = document.querySelector(".events__grid--table");
const listBtn = document.querySelector(".events__grid--list");
const table = document.querySelector("#table");
const grids = document.querySelector('.grids')

gridBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.classList.remove("grid");
    box.classList.add("list");
    listBtn.style.color = "#000";
    gridBtn.style.color = "#ff3f3a";
    grids.classList.remove('grids')
    grids.classList.add('list')
  });
});

listBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.classList.remove("list");
    box.classList.add("grid");
    listBtn.style.color = "#ff3f3a";
    gridBtn.style.color = "#000";
    grids.classList.remove('list')
    grids.classList.add('grids')
  });
});
