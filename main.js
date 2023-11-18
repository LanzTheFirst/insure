const menu=document.querySelector(".nav-links")
const hamburger=document.querySelector(".icon-container")

hamburger.addEventListener("click", ()=>{
  menu.classList.toggle("show")
})