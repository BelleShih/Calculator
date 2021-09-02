let numbers = document.querySelectorAll('.number');
let num = '';
let total = '';
let input = document.getElementById('input');
let account = false;
let disable = false;

let number = (item) => {
  if(input.innerText.length > 9) {
    item = '';
  }
  if(total.length !== 0 && account) {
    input.innerText = '';
    total = '';
    num = '';
  } else {
    input.innerText = input.innerText + item;
    num = num + item;
  };
};

let Point = (item) => {
  if(input.innerText.includes('.')) {
    input.innerText = input.innerText
  } else {
    input.innerText = input.innerText + item;
    num = num + item;
  }
};

let doubleZero = (item) => {
  if(input.innerText.length === 0) {
    input.innerText = '';
  } else {
    input.innerText = input.innerText + item;
    num = num + item;
  }
};

let symbol = (item) => {
  if(total.length !== 0) {
    num = total + item;
    input.innerText = '';
    account = false;
  } else {
    input.innerText = '';
    num = num + item;
    account = false;
  }
};

let percentage = (item) => {
  input.innerText = input.innerText + item;
  num = num + ('/100');
};

let ac = () => {
  input.innerText = '';
  num = '';
  total = '';
};

let del = () => {
  input.innerText = input.innerText.slice(0, -1);
  num = num.slice(0, -1);
};

let equal = () => {
  account = true;
  if (num.length === 0) {
    input.innerText = '';
  } else {
    let newInput = num.replace(/×/g, '*').replace(/÷/g, '/');
    total = eval(newInput);
    if(total.toString().length > 9) {
      input.innerText = total.toString().slice(0, 10);
    } else if(total.toString().includes('.')) {
      input.innerText = total.toFixed(3);
    } else {
      input.innerText = total;
    }
  }
};