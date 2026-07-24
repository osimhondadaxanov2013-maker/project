const API_URL = "http://localhost:3000/workerTwo";

const container = document.getElementById("course-container");

async function getWorkers() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    container.innerHTML = "";

    data.forEach((worker) => {
      container.innerHTML += `
        <div class="course-card">
          <div class="course-image">
            <img src="${worker.img}" alt="${worker.title}">
          </div>

          <div class="course-body">
            <span class="course-category ${worker.class}">
              ${worker.job}
            </span>

            <h3 class="course-title">
              ${worker.title}
            </h3>

            <div class="course-info">
              <span class="course-price">${worker.price}</span>
              <span class="course-author">| ${worker.person}</span>
            </div>
          </div>
        </div>
      `;
    });
  } catch (error) {
    console.log("Xatolik:", error);
  }
}

getWorkers();

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