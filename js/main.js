





 //////////////////////////////////////////////// scrollPath//////////////////////////////////////////// 

let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight- window.innerHeight;

window.onscroll= function(){

    let progresHeight = (window.pageYOffset / totalHeight)*100;
    progress.style.height = progresHeight + "%";
}



/////////////////////////////////////////////////// login page ///////////////////////////////////////////

const inputs = document.querySelectorAll(".input");

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});




function validatePhone(){

  const phoneCheck=document.getElementById('PhoneNumber');
  const phoneNumber=document.getElementById('phone').value;
  const error = document.querySelector(".Btn");

  var numbers = /^[0-9]+$/;
  if( phoneNumber.length == 11 && phoneNumber.match(numbers)){
	
    phoneCheck.classList.add('valid');
	  phoneCheck.classList.remove('invalid');
    error.classList.remove('pointer');
   }
   else{
	phoneCheck.classList.add('invalid');
    phoneCheck.classList.remove('valid')
   error.classList.add('pointer');
  }
  if(phoneNumber.length == 0){
	phoneCheck.classList.remove('invalid');
	phoneCheck.classList.remove('valid');
  error.classList.remove('pointer');
  }
 }



 function validatePhoneParent(){

  const phoneParentCheck=document.getElementById('PhoneNumberParent');
  const PhoneNumberParent=document.getElementById('phoneParent').value;
  const phoneNumber=document.getElementById('phone').value;
  const error = document.querySelector(".Btn");


  var numbers = /^[0-9]+$/;
  if( PhoneNumberParent.length == 11 && PhoneNumberParent.match(numbers) && PhoneNumberParent != phoneNumber){
	
    phoneParentCheck.classList.add('valid');
	  phoneParentCheck.classList.remove('invalid');
    error.classList.remove('pointer');
   }
   else{
	phoneParentCheck.classList.add('invalid');
    phoneParentCheck.classList.remove('valid');
    error.classList.add('pointer');
  }
  if(PhoneNumberParent.length == 0){
	phoneParentCheck.classList.remove('invalid');
	phoneParentCheck.classList.remove('valid');
  error.classList.remove('pointer');
  }
 }



 function validatePassword(){

const passwordCheck=document.getElementById('Password');
  const password=document.getElementById('password').value;
  var error = document.querySelector(".Btn");
   
  if( password.length >= 8){
    passwordCheck.classList.add('valid');
	passwordCheck.classList.remove('invalid');
  error.classList.remove('pointer');
   }
   else{
	passwordCheck.classList.add('invalid');
    passwordCheck.classList.remove('valid')
   error.classList.add('pointer');
  }
  if(password.length == 0){
	passwordCheck.classList.remove('invalid');
	passwordCheck.classList.remove('valid');
  error.classList.remove('pointer');
  }
 }



 function validatePasswordConfirm(){

  const passwordCheck=document.getElementById('PasswordConfirm');
    const passwordConfirm=document.getElementById('passwordConf').value;
    const password=document.getElementById('password').value;
    var error = document.querySelector(".Btn");
    
     
    if( passwordConfirm.length >= 8 && passwordConfirm==password){
      passwordCheck.classList.add('valid');
    passwordCheck.classList.remove('invalid');
    error.classList.remove('pointer');
     }
     else{
    passwordCheck.classList.add('invalid');
      passwordCheck.classList.remove('valid');
      error.classList.add('pointer');
    }
    if(password.length == 0){
    passwordCheck.classList.remove('invalid');
    passwordCheck.classList.remove('valid');
    error.classList.remove('pointer');
    }
   }
  
  

 
   
  

//////////////////////////////////////////////////////// drop down ////////////////////////////////////////////////////

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

// dark mode switch
// Select the button
const btnnn = document.querySelector(".mode");
// Select the theme preference from localStorage
const currentTheme = localStorage.getItem("theme");

// If the current theme in localStorage is "dark"...
if (currentTheme == "dark") {
  // ...then use the .dark-theme class
  document.body.classList.add("dark-theme");

}

// Listen for a click on the button 
btnnn.addEventListener("click", function() {
  // Toggle the .dark-theme class on each click
  document.body.classList.toggle("dark-theme");
  
  
  // Let's say the theme is equal to light
  let theme = "light";
  // If the body contains the .dark-theme class...
  if (document.body.classList.contains("dark-theme")) {
    // ...then let's make the theme dark
    theme = "dark";
  }
    // Then save the choice in localStorage
     localStorage.setItem("theme", theme);
});

 


//////////////////////////////////////// toggle  //////////////////////////////////////////////////

let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let cards = document.querySelector('.home-stats');
var DashCards = document.querySelector('.DashCards');
var col = document.querySelectorAll('.col-md-6');
let table = document.querySelector('.col-10');


toggle.onclick = function () {
  navigation.classList.toggle('active');
  main.classList.toggle('active');
  cards.classList.toggle('active');
  table.classList.toggle('active');
  DashCards.classList.toggle('active');
  col.classList.toggle('active');

}


$(document).ready(function () {
  $('#table_id').DataTable();
});