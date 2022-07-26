const ol = document.querySelector('ol');
const main = document.querySelector('main');

const a = ol.children[4];
const b = ol.children[0];

ol.prepend(a, b);


//-------------------------

const sec = document.querySelectorAll('section');

const sec1 = sec[1];

const fh2 = sec1.children[0] ;




const sec2 = sec[2];

const sh2 = sec2.children[0];

main.appendChild(fh2, sh2);

const footer = document.querySelector('footer');

footer.remove();
