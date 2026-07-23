const API_URL = "http://localhost:3000/workers";

const container = document.getElementById("course-container");
console.log(container);

async function getWorkers() {
  let res = await fetch(API_URL);
  let data = await res.json();
  console.log(data);

  container.innerHTML = "";
  data.forEach((worker) => {
    container.innerHTML += `
          <div className="course__container--box">
            <img src="${worker.img}" alt="" />
            <div class="box__text--job">${worker.job}</div>
            <h2>${worker.title}</h2>
            <div class="box__text--price">
            <p class="text__price--price">${worker.price}</p>
            <span class="text__price--who">${worker.person}</span>
          </div>
          </div>
        `;
  });
}
getWorkers()