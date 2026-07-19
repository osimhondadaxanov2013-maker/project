const API_URL = "http://localhost:3000/workers";

const workerContainer = document.getElementById("worker__container");
console.log(workerContainer);

async function getWorkers() {
  let res = await fetch(API_URL);
  let data = await res.json();
  console.log(data);

  workerContainer.innerHTML = "";
  data.forEach((worker) => {
    workerContainer.innerHTML += `
      <div class="worker__container--box">
        <div class="container__box--img">
          <img src="${worker.img}" alt="" />
        </div>
        <div class="container__box--text">
          <div class="box__text--job ${worker.job === "Marketing" ? "box__text--job--marketing" : "box__text--job--other"}">${worker.job}</div>
          <h2 class="box__text--title">${worker.title}</h2>
          <div class="box__text--price">
            <p class="text__price--price">${worker.price}</p>
            <span class="text__price--who">${worker.person}</span>
          </div>
        </div>
      </div>
    `;
  });
}
getWorkers();
