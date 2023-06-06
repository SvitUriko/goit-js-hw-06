function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputEl = document.querySelector('input');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

function createBoxes(amount){
  const boxes = [];

  for (let i = 0; i < amount; i += 1 ){
    boxes += `<div></div>`;
    boxes.style.width = box.style.height = `${30 + i * 10}px`;
    boxes.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
console.log(boxes);

  boxesEl.innerHTML = boxes;


}