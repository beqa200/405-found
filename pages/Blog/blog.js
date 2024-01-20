const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const arrowRigth = document.getElementById("arrow-right");
const arrowLeft = document.getElementById("arrow-left");
let slideshow = document.getElementById("slideshow");
const posts = document.getElementById("first-sml-post");
console.log(posts);
arrowRigth.addEventListener("click", () => {
  if (slideshow) {
    slideshow.scrollLeft += 500;
    console.log("hiiiiiii");
  }
});
arrowLeft.addEventListener("click", () => {
  if (slideshow) {
    slideshow.scrollLeft -= 500;
  }
});
