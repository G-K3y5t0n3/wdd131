const menuButton = document.querySelector("button");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

function getBiggerImage(path) {
  const url = new URL(path);
  const newPath = url.pathname.split("-")[0];
  return newPath + '-full.jpg';   
}

const imageViewer = document.querySelector("dialog")

document.querySelector(".gallery").addEventListener("click", (event) => {
  if (event.target.tagName !== "IMG") return;

  const fullImage = imageViewer.querySelector("img");
  fullImage.src = getBiggerImage(event.target.src) 
  fullImage.alt = event.target.alt

  imageViewer.showModal()
})

imageViewer.addEventListener("click", (event) => {
  if (event.target.tagName === "DIALOG" ||
    event.target.tagName === "BUTTON"    
  )  {
    imageViewer.close()
  }
})