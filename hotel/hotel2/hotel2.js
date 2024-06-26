const acc = document.getElementsByClassName("accordion");
const back = document.querySelector(".back");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

back.addEventListener("click", () => {
  window.location.href = "../../tours/tour/tour.html";
})