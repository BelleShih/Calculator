let numbers = document.querySelectorAll('.number');
let num = '';
let total = '';
let input = document.getElementById('input');
let account = false;
let disable = false;
let inputText = '';

let number = (item) => {
  if(input.innerText.length > 9) {
    item = '';
  }
  if(total.length !== 0 && account) {
    input.innerText = item;
    inputText = item;
    total = '';
    num = item;
    account = false;
  } else {
    if(input.innerText.indexOf('0') === 0) {
      if(item === '0'){
        item = '';
      };
    }
    inputText = inputText + item;
    input.innerText = inputText;
    num = num + item;
  };
};

let Point = (item) => {
  if(input.innerText.includes('.')) {
    input.innerText = input.innerText
  } else {
    input.innerText = input.innerText + item;
    num = num + item;
    inputText = inputText + item;
  }
};

let doubleZero = (item) => {
  if(input.innerText.length === 0) {
    input.innerText = '';
  } else {
    input.innerText = input.innerText + item;
    num = num + item;
    inputText = inputText + item;
  }
};

let symbol = (item) => {
  if(total.length !== 0) {
    num = total + item;
    input.innerText = inputText;
    account = false;
    inputText = '';
  } else {
    input.innerText = inputText;
    num = num + item;
    account = false;
    inputText = '';
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
  inputText = '';
};

let del = () => {
  input.innerText = input.innerText.slice(0, -1);
  inputText = inputText.slice(0, -1);
  num = num.slice(0, -1);
};

let equal = () => {
  account = true;
  inputText = '';
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

// TODO
window.addEventListener('keydown', function(e){
  let key = document.querySelector(`td[data-key='${e.keyCode}']`);

  if(e.keyCode === 48) {
    number(key.innerHTML);
  } else if(e.keyCode === 49) {
    number(key.innerHTML);
  } else if(e.keyCode === 50) {
    number(key.innerHTML);
  } else if(e.keyCode === 51) {
    number(key.innerHTML);
  } else if(e.keyCode === 52) {
    number(key.innerHTML);
  } else if(e.keyCode === 53) {
    number(key.innerHTML);
  } else if(e.keyCode === 54) {
    number(key.innerHTML);
  } else if(e.keyCode === 55) {
    number(key.innerHTML);
  } else if(e.keyCode === 56) {
    number(key.innerHTML);
  } else if(e.keyCode === 57) {
    number(key.innerHTML);
  } else if(e.keyCode === 191) {
    symbol(key.innerHTML);
  } else if(e.keyCode === 106) {
    symbol(key.innerHTML);
  } else if(e.keyCode === 189) {
    symbol(key.innerHTML);
  } else if(e.keyCode === 187) {
    symbol(key.innerHTML);
  } else if(e.keyCode === 88) {
    symbol(key.innerHTML);
  } else if(e.keyCode === 8) {
    del();
  } else if(e.keyCode === 190) {
    Point(key.innerHTML);
  } else if(e.keyCode === 13) {
    equal();
  } else if(e.keyCode === 27) {
    ac();
  }
});

let playNumberAudio = () => {
  let audio = document.getElementById('audio1');
  audio.cloneNode().play();
};
let playOtherAudio = () => {
  let audio = document.getElementById('audio2');
  audio.cloneNode().play();
};