const API_URL_SECOND = "http://localhost:3000/teamTwo";

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
