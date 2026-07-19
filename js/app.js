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

const API_URL_SECOND = "http://localhost:3000/team";

const teamContainer = document.getElementById("team__container");

async function getTeam() {
  let resTeam = await fetch(API_URL_SECOND);
  let dataTeam = await resTeam.json();
  console.log(dataTeam);

  teamContainer.innerHTML = "";
  dataTeam.forEach((member) => {
    teamContainer.innerHTML += `
      <div class="team__container--box">
        <div class="container__box--img2">
          <img class="box__img--img" src="${member.img}" alt="" />
        </div>
        <h2 class="container__box--name">${member.name}</h2>
        <p class="container__box--job" >${member.job}</p>
      </div>
    `;
  });
}
getTeam();
