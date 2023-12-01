const tasks = ['desayunar', 'hacer la cama', 'lavarse los dientes', 'sacar al perro', 'corregir los examenes', 'poner las notas'];
const boxes = document.querySelectorAll('.box');
let parent = null;

function taskInit(tasks, boxInit) {
  const box = document.querySelector(boxInit);
  tasks.forEach((task, index) => {
    const div = document.createElement('div');
    div.classList.add('task');
    div.textContent = task;
    div.id = 'task-' + index;
    div.addEventListener('dragstart', dragStart);
    div.addEventListener('dragend', dragEnd);
    div.draggable = true;
    box.append(div);
  });
}

function boxInit(boxes) {
  boxes.forEach(box => {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('drop', drop);
  });
}

function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
  parent = e.target.parentElement;
  e.target.classList.add('selected');
}

function dragEnd(e) {
  e.target.classList.remove('selected');
}

function dragOver(e) {
  if (e.currentTarget !== parent) {
    e.preventDefault();
  }
}

function drop(e) {
  const id = e.dataTransfer.getData('text/plain');
  const element = document.getElementById(id);
  e.currentTarget.append(element);
}

taskInit(tasks, '#todo');
boxInit(boxes);