document.addEventListener("DOMContentLoaded", () => {
    let scrollContainer = document.querySelector(".wrapper"); // Select the correct class for the container
    let backBtn = document.getElementById("backBtn");
    let nextBtn = document.getElementById("nextBtn");
  
    scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
      scrollContainer.style.scrollBehavior = "auto";
    });
  
    nextBtn.addEventListener("click", () => {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += 300;
    });
  
    backBtn.addEventListener("click", () => {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft -= 300;
    });
  });