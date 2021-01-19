function size() {
  if(window.innerWidth < 768) {
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
window.onresize = function(){if(window.innerWidth < 768) {
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


// function size1() {
//   function size() {
//     if (window.innerWidth < 768) {
//       var x = document.getElementById("hide");
//       if (x.style.display === "block") {
//         x.style.display = "none";
//       } else {
//         x.style.display = "block";
//       };
//     }
//     else {
//       document.getElementById("hide").style.display = "block";
//     };
//   }
//};

  // function blured() {
  //   if (window.innerWidth < 768) {
  //     var x = document.getElementById("hide");
  //     if (x.style.display === "block") {
  //       x.style.display = "none";
  //     };
  //   }


    
// Old method
// window.onresize = function(){
//   document.getElementById("hide").style.display = "block";
// }

// function blured(){
//   document.getElementById("hide").style.display = "none";
// }
