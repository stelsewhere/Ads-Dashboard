// sidebar

var $container = document.querySelector('.page');
var $expand = document.querySelector('.burger');

$expand.addEventListener('click', function(evt) {
  toggleClass($container, ['-collapsed', '-expanded']);
});

function toggleClass(el, className) {
  if ( Array.isArray(className) ) {
    className.map(function(c) {
      toggleClass(el, c);
    });
  } else {
    var classNames = el.className.split(' ');
    var index;

    el.className = (index = classNames.indexOf(className)) === -1
      ? classNames.join(' ') + ' ' + className
      : splice(classNames, index, 1).join(' ');
  }
}

function splice(arr, index, count) {
  arr.splice(index, count);
  return arr;
}


// modal

let modal = document.getElementById("modal");
let btn = document.getElementById("loadCampaign")
let close = document.getElementsByClassName("cancel-btn");

btn.onclick = function() {
  modal.style.display = "block";
}

close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// stepProgress

let backButton = document.getElementById("backButton");
let nextButton = document.getElementById("nextButton");
let bullets = [ ...document.querySelectorAll('.step__bullet')];

const MAX_STEPS = 4;
let currentStep = 1;

nextButton.addEventListener('click', () => {
 let currentBullet = bullets[currentStep - 1];
 let prevBullet = bullets[currentStep];
 prevBullet.classList.add('current');
 currentBullet.classList.add('completed');
 currentStep++;

});

backButton.addEventListener('click', () => {
  let currentBullet = bullets[currentStep - 1];
  let previousBullet = bullets[currentStep - 2];
  previousBullet.classList.remove('completed');
  previousBullet.classList.remove('current');
  currentStep--;
})





     function validateForm() {
     let input = document.forms["form"]["campaign"].value;
     if (input == "") {
        alert("Fill out your name");
        return false;
        }
}