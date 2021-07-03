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

var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";

  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }

  fixStepIndicator(n)
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("form").submit();
    return false;
  }

  showTab(currentTab);
}


function validateForm() {
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }

  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}


function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
    x[n].className += " active";
}
}

