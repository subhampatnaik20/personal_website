
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  // function myFunction() {
  //   var element = document.body;
  //   element.classList.toggle("dark");
  // }
  
  document.querySelector(".container").addEventListener("click", () => {
    document.querySelector(".sun-logo").classList.toggle("animate-sun");
    // document.querySelector(".moon-logo").classList.toggle("animate-moon");
    document.querySelector("body").classList.toggle("dark");
  })
  