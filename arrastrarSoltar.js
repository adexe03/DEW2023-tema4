function dragStart(e) {
  console.log('arrastrando', e.target);
  e.dataTransfer.setData('text/plain', e.target.id);

  e.target.classList.add('selected');
}

function onDragOver(e) {
  // let id = (e.dataTransfer.getData('text/plain'));
  // console.log(id);
  e.preventDefault();
}

function onDrop(e) {
  console.log('soltando elemento');
  const id = e.dataTransfer.getData('text/plain');
  const element = document.getElementById(id);
  element.target.classList.remove('selected');
  box2.append(element);
}