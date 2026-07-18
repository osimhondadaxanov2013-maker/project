const plus = document.querySelectorAll(".plus");
const subtitle = document.querySelectorAll(".subtitle");

plus.forEach((plyus, index) => {
  plyus.addEventListener("click", () => {
    const sbtl = subtitle[index];

    if (sbtl.style.display === "block") {
      sbtl.style.display = "none";
    } else {
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
      sbtl.style.marginBottom = "50px"
      sbtl.style.marginLeft = "40px"
    }
  });
});
