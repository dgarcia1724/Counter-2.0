const currentCount = document.querySelector(".currentCount");

// buttons
const up = document.querySelector(".up");
const down = document.querySelector(".down");
const reset = document.querySelector(".reset");

let x = 0;

currentCount.innerHTML = x;

function color() {
  if (x > 0) {
    currentCount.style.color = "green";
  }
  if (x < 0) {
    currentCount.style.color = "red";
  }
  if (x === 0) {
    currentCount.style.color = "black";
  }
}

up.addEventListener("click", function () {
  x++;
  currentCount.innerHTML = x;
  color();
});

down.addEventListener("click", function () {
  x--;
  currentCount.innerHTML = x;
  color();
});

reset.addEventListener("click", function () {
  x = 0;
  currentCount.innerHTML = x;
  color();
});
