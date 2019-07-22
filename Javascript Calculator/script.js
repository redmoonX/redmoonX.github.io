var n1 = [];
var n2 = [];
var mode = [0];
var solution = [];
function clearCalc() {
  n1.join('');
  n1 = [];
  document.getElementById("output").innerHTML = n1;
}

if (mode < 1) {
function inputOne() {
  n1.push(1);
  document.getElementById("output").innerHTML = n1.join('');
}
function inputTwo() {
  n1.push(2);
  document.getElementById("output").innerHTML = n1.join('');
}
function inputThree() {
  n1.push(3);
  document.getElementById("output").innerHTML = n1.join('');
}
function inputFour() {
  n1.push(4);
  document.getElementById("output").innerHTML = n1.join('');
}
function inputFive() {
  n1.push(5);
  document.getElementById("output").innerHTML = n1.join('');
}
function inputSix() {
  n1.push(6);
  document.getElementById("output").innerHTML = n1.join('');
}
function inputSeven() {
  n1.push(7);
  document.getElementById("output").innerHTML = n1.join('');
}
function inputEight() {
  n1.push(8);
  document.getElementById("output").innerHTML = n1.join('');
}
function inputNine() {
  n1.push(9);
  document.getElementById("output").innerHTML = n1.join('');
}
function inputZero() {
  n1.push(0);
  document.getElementById("output").innerHTML = n1.join('');
}
}
// } else {
// function inputOne() {
//   n2.push(1);
//   document.getElementById("output").innerHTML = n2.join('');
// }
// function inputTwo() {
//   n2.push(2);
//   document.getElementById("output").innerHTML = n2.join('');
// }
// function inputThree() {
//   n2.push(3);
//   document.getElementById("output").innerHTML = n2.join('');
// }
// function inputFour() {
//   n2.push(4);
//   document.getElementById("output").innerHTML = n2.join('');
// }
// function inputFive() {
//   n2.push(5);
//   document.getElementById("output").innerHTML = n2.join('');
// }
// function inputSix() {
//   n2.push(6);
//   document.getElementById("output").innerHTML = n2.join('');
// }
// function inputSeven() {
//   n2.push(7);
//   document.getElementById("output").innerHTML = n2.join('');
// }
// function inputEight() {
//   n2.push(8);
//   document.getElementById("output").innerHTML = n2.join('');
// }
// function inputNine() {
//   n2.push(9);
//   document.getElementById("output").innerHTML = n2.join('');
// }
// function inputZero() {
//   n2.push(0);
//   document.getElementById("output").innerHTML = n2.join('');
// }
// }
function modePlus() {
  mode = 1;
  // document.getElementById("output").innerHTML = n2;
  n2 = n1;
  n1 = [];
}
function modeMinus() {
  
  
}
function modeMult() {
  
  
}
function modeDiv() {
  
  
}