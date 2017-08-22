/*jshint esversion: 6*/
console.log('hello');

const el = document.querySelectorAll('.el');
const toolbar = document.getElementById('toolbar');
const canvas = document.getElementById('canvas');
const imageDiv = document.getElementById('image');
const headerDiv = document.getElementById('header');

el.forEach(element => {
  element.addEventListener('dragstart', handleDragStart, false);
  element.addEventListener('dragend', handleDragEnd, false);
});

canvas.addEventListener('dragenter', handleDragEnter, false);
canvas.addEventListener('dragleave', handleDragLeave, false);
canvas.addEventListener('dragover', handleDragOver, false);
canvas.addEventListener('drop', handleDrop, false);

function handleDragStart(e) {
  this.style.opacity = '0.4';
  e.dataTransfer.effectAllowed = 'copy';
  e.dataTransfer.setData('text', this.dataset.type);
}

function handleDragEnd(e) {
  this.style.opacity = '1';
}

function handleDragOver(e) {
  if(e.preventDefault) {
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
  if(e.stopPropagation) {
    e.stopPropagation();
  }

  let data = e.dataTransfer.getData('text');

  switch (data) {
    case 'header':
    let headerEl = document.createElement('div');
    headerEl.className = 'header';
    headerEl.innerText = 'this is a copy header';

    canvas.appendChild(headerEl);
    break;

    case 'image':
    let imageEl = document.createElement('div');
    imageEl.className = 'image';
    imageEl.innerText = 'this is a copy image';

    canvas.appendChild(imageEl);
    break;

    default:
    console.log('bleh');
  }

  this.classList.remove('over');
  return false;
}