document.querySelectorAll(".movie-list-container").forEach((container) => {
  const arrow = container.querySelector(".arrow");
  const movieList = container.querySelector(".movie-list");
  const movieItems = container.querySelectorAll(".movie-item");
  const slideWidth = 300; 

  function calculateMaxClicks() {
    const totalWidth = movieList.scrollWidth;
    const visibleWidth = movieList.clientWidth;
    return Math.ceil((totalWidth - visibleWidth) / slideWidth);
  }

  let maxClicks = calculateMaxClicks();
  let clickCount = 0;

  arrow.addEventListener("click", () => {
    if (clickCount < maxClicks) {
      const style = window.getComputedStyle(movieList);
      const matrix = new WebKitCSSMatrix(style.transform);
      movieList.style.transform = `translateX(${matrix.m41 - slideWidth}px)`;
      clickCount++;
    } else {
      movieList.style.transform = "translateX(0px)";
      clickCount = 0;
    }
  });

  window.addEventListener("resize", () => {
    maxClicks = calculateMaxClicks();
    clickCount = 0;
    movieList.style.transform = "translateX(0px)"; 
  });
});

// dark mode
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-item-title.active"
);

ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});
