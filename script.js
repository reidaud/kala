window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);

  var hero = document.querySelector(".hero");
  var why = document.querySelector(".why");
  var intro = document.querySelector(".intro");
  var gallery = document.querySelector(".gallery");
  var mProblem1 = document.querySelector(".mainProblem1");
  var mProblem2 = document.querySelector(".mainProblem2");
  var scrollPosition = window.scrollY;
  var heroHeight = hero.offsetHeight;
  var introHeight = intro.offsetHeight;
    
  hero.style.opacity = 1.3 - (scrollPosition / heroHeight * 1.8);
  intro.style.opacity = 1.8 - (introHeight / scrollPosition * 1.1);
  why.style.opacity = 2.5 - (2.8 * heroHeight / scrollPosition);
  mProblem1.style.opacity = why.style.opacity - .1;
  mProblem2.style.opacity = why.style.opacity - .2;
  gallery.style.opacity = 2.7 - (2 * galleryHeight / scrollPosition);
});