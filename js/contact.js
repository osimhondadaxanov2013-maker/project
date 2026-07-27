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
            <img width="390px" height="240px" src="${worker.img}" alt="${worker.title}">
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
