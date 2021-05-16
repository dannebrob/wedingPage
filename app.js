const toggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const hidden = document.querySelector(".video");

toggleBtn.addEventListener("click", function () {
 if (links.classList.contains("show-links")){
     links.classList.remove("show-links");
     hidden.classList.remove("hidden");
 } else {
     links.classList.add("show-links");
     hidden.classList.add("hidden");
 }
});


/* toggleBtn.addEventListener("click", function () {
    if (sidebar.classList.contains("show-sidebar")) {
      sidebar.classList.remove("show-sidebar");
    } else {
      sidebar.classList.add("show-sidebar");
    }
   */