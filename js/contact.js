const API_URL = "http://localhost:3000/workers";

const container = document.getElementById("course-container");

async function getWorkers() {
  let res = await fetch(API_URL);
  let data = await res.json();
  console.log(data);

    container.innerHTML = ""
    data.forEach((worker) => {
        container.innerHTML += `
        
        `
    })
}
