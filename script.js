const palette = document.querySelector('#color-palette');
const cor1 = document.querySelector('#color1');
const cor2 = document.querySelector('#color2');
const cor3 = document.querySelector('#color3');
const makeFrame = document.querySelector('#generate-board');
const frameSize = document.querySelector('#board-size');
const frame = document.querySelector('#pixel-board');
const clear = document.querySelector('#clear-board');
let selected = document.querySelector('.selected');
let pickedColor;

function addSelection(target) {
  target.classList.add('selected');
  selected = document.querySelector('.selected');
}

function clearSelection() {
  selected.classList.remove('selected');
}

function pickColor() {
  const selecionado = window.getComputedStyle(selected, null).getPropertyValue('background-color');
  return selecionado;
}

function dye(target) {
  target.style.backgroundColor = pickedColor;
}

function clearFrame() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = '';
  }
}

function randomColor() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;

  return `rgb(${r}, ${g}, ${b})`;
}

function makeRow(number) {
  const row = document.createElement('div');
  row.className = 'row';
  for (let i = 0; i < number; i += 1) {
    const cell = document.createElement('div');
    cell.className = 'pixel';
    row.appendChild(cell);
  }
  frame.appendChild(row);
}

function buildFrame(number) {
  frame.innerHTML = '';
  for (let i = 0; i < number; i += 1) {
    makeRow(number);
  }
}

pickedColor = pickColor(selected);

palette.addEventListener('click', function(event) {
  clearSelection();
  addSelection(event.target);
  pickedColor = pickColor();
});

frame.addEventListener('click', function(event) {
  dye(event.target);
});

clear.addEventListener('click', function() {
  clearFrame();
});

window.onload = function() {
  cor1.style.backgroundColor = randomColor();
  cor2.style.backgroundColor = randomColor();
  cor3.style.backgroundColor = randomColor();
}

makeFrame.addEventListener('click', function() {
  let number = 0;
  if (frameSize.value === '') {
    alert('Board inválido!');
  } else if (frameSize.value < 5 ) {
    number = 5;
    buildFrame(number);
  } else if (frameSize.value > 50) {
    number = 50;
    buildFrame(number);
  } else {
    number = frameSize.value;
    buildFrame(number);
  }
});
