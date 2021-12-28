function POW(a) {
  return Math.pow(a, 2);
}

function SQRT(a) {
  return Math.sqrt(a);
}

function Result() {
  if (calculator.display.value.includes("POW")) {
    let a = calculator.display.value;
    let b = a.split("P");
    calculator.displays.value = POW(b[0]);
  } else if (calculator.display.value.includes("SQRT")) {
    let a = calculator.display.value;
    let b = a.split("S");
    calculator.displays.value = SQRT(b[0]);
  } else {
    calculator.displays.value = eval(calculator.display.value);
  }
}

function calculate(a) {
  if (calculator.displays.value != "") {
    calculator.display.value = calculator.displays.value + a;
    calculator.displays.value = "";
  }
}

function clearItem() {
  calculator.display.value = "";
  calculator.displays.value = "";
}
function clearOne() {
  calculator.display.value = pop(calculator.display.value);
}
