const toggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

toggleBtn.addEventListener("click", function () {
 if (links.classList.contains("show-links")){
     links.classList.remove("show-links");
 } else {
     links.classList.add("show-links");
 }
});


/* toggleBtn.addEventListener("click", function () {
    if (sidebar.classList.contains("show-sidebar")) {
      sidebar.classList.remove("show-sidebar");
    } else {
      sidebar.classList.add("show-sidebar");
    }
   */