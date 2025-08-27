var min = document.getElementsByClassName("minusimg")[0];
var add = document.getElementsByClassName("content-plus-img")[0];
var rem = document.querySelector(".box-text p");
var hr = document.getElementsByClassName("hr1")[0];
var call = 0;

min.addEventListener("click", function () {
  rem.style.display = "none";
  hr.style.display = "none";
  add.style.display = "flex";
  min.style.display = "none";
  console.log("play");
  call = 1;
});

add.addEventListener("click", function () {
  rem.style.display = "block";
  hr.style.display = "block";
  add.style.display = "none";
  min.style.display = "flex";
  console.log("stop");
  call = 0;
});

var nextimg = document.getElementsByClassName("plusimg");
var text = document.getElementsByClassName("text-area");
var minor = document.getElementsByClassName("content-minus-img");

for (let i = 0; i < nextimg.length; i++) {
  let flot = 0; 

  nextimg[i].addEventListener("click", function () {
    var area = text[i].querySelector("textarea");

    if (flot === 0) {
      area.style.display = "flex";

      nextimg[i].style.display = "none";
      minor[i].style.display = "flex";
      console.log("collapsed ");
      flot = 1;
    }
  });

  minor[i].addEventListener("click", function () {
    var area = text[i].querySelector("textarea");

    if (flot === 1) {
      area.style.display = "none";
      nextimg[i].style.display = "flex";
      minor[i].style.display = "none";
      console.log("expanded ");
      flot = 0;
    }
  });
}



var menu = document.getElementsByClassName("menu-item")[0];
var side = document.getElementsByClassName("sidebar")[0];
var clos = document.getElementsByClassName("close")[0];
menu.addEventListener("click", function () {
  side.style.display = "flex";
});

clos.addEventListener("click", function () {
  side.style.display = "none";
});
window.addEventListener("resize", function () {
  if (window.innerWidth > 900) {
    side.style.display = "none";
  }
});


