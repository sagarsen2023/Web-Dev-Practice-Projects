var btn = document.querySelector(".Hamburger");
var navBar = document.querySelector("nav ul");
var bar = false;

function closeMenu(event) {
  if (bar === true) {
    var target = event.target;
    if (target !== btn && !navBar.contains(target)) {
      navBar.style.width = "0px";
      bar = false;
    }
  }
}

document.addEventListener("click", closeMenu);

btn.addEventListener("click", function (event) {
  event.stopPropagation(); 
  if (bar === false) {
    navBar.style.width = "150px";
    bar = true;
  } else {
    navBar.style.width = "0px";
    bar = false;
  }
});

