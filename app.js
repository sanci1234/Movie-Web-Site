const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
const maxClicks = 4;

const clickCounts = new Array(movieLists.length).fill(0);
arrows.forEach((arrow, i) => {
  arrow.addEventListener("click", function () {
    const movieList = movieLists[i];
    if (clickCounts[i] < maxClicks - 1) {
      const style = window.getComputedStyle(movieList);
      const matrix = new WebKitCSSMatrix(style.transform);
      movieList.style.transform = `translateX(${matrix.m41 - 300}px)`;
      clickCounts[i]++;
    } else {
      movieList.style.transform = 'translateX(0px)';
      clickCounts[i] = 0;
    }
  });
});


// dark mode
const ball = document.querySelector(".toggle-ball");
const items= document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-item-title.active")

ball.addEventListener("click", function () {
    items.forEach((item) => item.classList.toggle("active"));
})
