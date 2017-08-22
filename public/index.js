/*jshint esversion: 6*/
const el = document.querySelectorAll('.el');
const rows = document.querySelectorAll('.row');

el.forEach(element => {
  element.addEventListener('dragstart', handleDragStart, false);
  element.addEventListener('dragend', handleDragEnd, false);
});

rows.forEach(row => {
  row.addEventListener('dragenter', handleDragEnter, false);
  row.addEventListener('dragleave', handleDragLeave, false);
  row.addEventListener('dragover', handleDragOver, false);
  row.addEventListener('drop', handleDrop, false);
});

function handleDragStart(e) {
  this.style.opacity = '0.4';
  e.dataTransfer.effectAllowed = 'copy';
  e.dataTransfer.setData('text', this.dataset.type);
}

function handleDragEnd(e) {
  this.style.opacity = '1';
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = 'copy';
  return false;
}

function handleDragEnter(e) {
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }

  let data = e.dataTransfer.getData('text');
  switch (data) {
    case 'div':
      createEl(e, 'div');
      break;

    case 'image':
      createEl(e, 'div');
      break;

    default:
      console.log('bleh');
  }

  this.classList.remove('over');
  return false;
}

function createEl(e, el) {
  let element = document.createElement(el);
  element.className = el;
  element.style.height = '100%';
  element.classList.add('flex-container');

  e.target.appendChild(element);
}
