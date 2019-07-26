var n1 = [];
var n2 = [];
var mode = [];
var solution = [];
var memory = [];


function clearCalc() {
  n1.join('');
  n1 = [];
  n2.join('');
  n2 = [];
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
function decimalPoint() {
  n1.push(".");
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
  mode = 2;
  n2 = n1;
  n1 = [];
}
function modeMult() {
  mode = 3;
  n2 = n1;
  n1 = [];
}
function modeDiv() {
  mode = 4;
  n2 = n1;
  n1 = [];
}
function memSave() {
  memory = document.getElementById("output").innerHTML;
}
function memClear() {
  memory = [];
}
function memRecall() {
  document.getElementById("output").innerHTML = memory;
}
function totalIs() {
  if (mode === 1) {
    // n1.join('');
    // n2.join('');
    solution = Number(n1.join('')) + Number(n2.join(''));
    document.getElementById("output").innerHTML = solution;
    mode = 0;
  } else if (mode === 2) {
    solution = Number(n2.join('')) - Number(n1.join(''));
    document.getElementById("output").innerHTML = solution;
    mode = 0;
  } else if (mode === 3) {
    solution = Number(n1.join('')) * Number(n2.join(''));
    document.getElementById("output").innerHTML = solution;
    mode = 0;
  } else if (mode === 4) {
    solution = Number(n2.join('')) / Number(n1.join(''));
    document.getElementById("output").innerHTML = solution;
    mode = 0;
  }
}
// var first = prompt("enter first number");
// var second = prompt("enter second number");
// var arithmetic = prompt("add, subtract, multiply, or divide?");
// var add = Number(first) + Number(second);
// var subtract = Number(first) - Number(second);
// var multiply = Number(first) * Number(second);
// var divide = Number(first) / Number(second);
// if (arithmetic === "add") {alert(add);}
// else if (arithmetic === "subtract") {alert(subtract);}
// else if (arithmetic === "multiply") {alert(multiply);}
// else if (arithmetic === "divide") {alert(divide);}