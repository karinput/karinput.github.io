// const handleHome=()=>{
// document.getElementById("homepage").style.display ="block";
// document.getElementById("skillpage").style.display ="none";
// document.getElementById("education").style.display ="none";
// document.getElementById("experiencepage").style.display ="none";
// };
  
// const handleSkills=()=>{
// document.getElementById("homepage").style.display ="none";
// document.getElementById("skillpage").style.display ="block";
// document.getElementById("education").style.display ="none";
// document.getElementById("experiencepage").style.display ="none";
// };
  
// const handleEducation=()=>{
// document.getElementById("homepage").style.display ="none";
// document.getElementById("skillpage").style.display ="none";
// document.getElementById("education").style.display ="block";
// document.getElementById("experiencepage").style.display ="none";
// };

// const handleExperience=()=>{
// document.getElementById("homepage").style.display ="none";
// document.getElementById("skillpage").style.display ="none";
// document.getElementById("education").style.display ="none";
// document.getElementById("experiencepage").style.display ="block";
// };

// document.getElementById("home-button").addEventListener("click", handleHome);
// document.getElementById("skill-button").addEventListener("click", handleSkills);
// document.getElementById("education-button").addEventListener("click", handleEducation);
// document.getElementById("experiences-button").addEventListener("click", handleExperiences);
  
// console.log("Started");
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navigation");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
   navbar.classList.remove("sticky");
  }
}