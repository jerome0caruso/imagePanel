

const panels = document.querySelectorAll(".panel");

function toggleClass() {
    this.classList.toggle("open");
}

function toggleActive(e) {
    if(e.propertyName.includes("flex")){
    this.classList.toggle("open-active");
    }
}


panels.forEach(panel => panel.addEventListener("click", toggleClass));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));

