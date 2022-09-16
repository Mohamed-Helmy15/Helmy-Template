let numbers = document.querySelectorAll(".stats .box .number");
let statSec = document.querySelector(".stats");
let started = false;
let skillSec = document.querySelector(".our-skills");
let skills = document.querySelectorAll(
  ".our-skills .container .skills .the-progress span"
);
window.onscroll = function () {
  if (window.scrollY >= statSec.offsetTop) {
    if (!started) {
      numbers.forEach((num) => {
        let count = setInterval(() => {
          num.textContent++;
          if (num.textContent == num.getAttribute("data-end")) {
            clearInterval(count);
          }
        }, 10);
      });
    }
    started = true;
  }
  if (
    window.scrollY >= skillSec.offsetTop &&
    window.scrollY <= skillSec.offsetTop + 600
  ) {
    skills.forEach((skill) => {
      skill.style.width = skill.dataset.width;
    });
  } else {
    skills.forEach((skill) => {
      skill.style.width = 0;
    });
  }
};
