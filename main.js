// fetch('header.html').then((response) =>
// response.text().then((body) => 
// (document.querySelector('#header').innerHTML = body))
// )

document.addEventListener('DOMContentLoaded', addHeaderAndFooter)

async function addHeaderAndFooter() {
  let header = await fetch("header.html").then((response) =>
    response.text()
  )
  //header.classList.add(".header")
  let footer = await fetch("footer.html").then((response) =>
    response.text()
  )
  //footer.classList.add(".footer")
  document.body.insertAdjacentHTML("afterbegin",header)
  document.body.insertAdjacentHTML("beforeend",footer)
}

function myFunction(imgs) {
  let expandImg = document.getElementById("expandedImg");
  let imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}