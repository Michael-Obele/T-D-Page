function size() {
  if (window.innerWidth < 768) {
    var x = document.getElementById("hide");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    };
  }
  else {
    document.getElementById("hide").style.display = "block";
  };
};
window.onresize = function () {
  if (window.innerWidth < 768) {
    var x = document.getElementById("hide");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    };
  }
  else {
    document.getElementById("hide").style.display = "block";
  };
}


function blured() {
  if (window.innerWidth < 768) {
    document.getElementById("hide").style.display = "none";
  }
  else {
    document.getElementById("hide").style.display = "block";
  };
};



// Old method
// window.onresize = function(){
//   document.getElementById("hide").style.display = "block";
// }

