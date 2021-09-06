const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const khien = $('.khien');
const boom = $('.boom');

khien.onmouseover = function(){
    boom.classList.add('active');
}