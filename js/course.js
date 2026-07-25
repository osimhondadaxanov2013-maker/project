const plus = document.querySelectorAll(".plus");
const subtitle = document.querySelectorAll(".subtitle");

plus.forEach((plyus, index) => {
  plyus.addEventListener("click", () => {
    const sbtl = subtitle[index];

    if (sbtl.style.display === "block") {
      sbtl.style.display = "none";
      plyus.innerHTML = plyus.innerHTML.replace("-", "+");
    } else {
      plyus.innerHTML = plyus.innerHTML.replace("+", "-");
      sbtl.style.display = "block";
      sbtl.style.width = "560px";
      sbtl.style.height = "104px";
      sbtl.style.fontWeight = "400";
      sbtl.style.fontSize = "16px";
      sbtl.style.lineHeight = "160%";
      sbtl.style.letterSpacing = "0%";
      sbtl.style.color = "#424551";
      sbtl.style.padding = "20px 1px";
      sbtl.style.fontFamily = "'Lato', sans-serif";
      sbtl.style.marginBottom = "50px";
      sbtl.style.marginLeft = "40px";
    }
  });
});

const API_URL = "http://localhost:3000/workers";

const workerContainer = document.getElementById("worker__container");
console.log(workerContainer);

async function getWorkers() {
  let res = await fetch(API_URL);
  let data = await res.json();
  console.log(data);

  workerContainer.innerHTML = "";
  data.slice(0, 2) .forEach ((worker) => {
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
