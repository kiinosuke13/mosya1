'use strict';

const hamburger = document.getElementById('hamburger');
const span = document.querySelector('span');
const mask = document.getElementById('mask');
const modal = document.getElementById('modal');

mask.classList.add('hidden');
modal.classList.add('hidden');

hamburger.addEventListener('click',()=>{
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    hamburger.classList.add('active');
});


modal.addEventListener('click',()=>{
    mask.classList.add('hidden');
    modal.classList.add('hidden');
    hamburger.classList.remove('active');
});
