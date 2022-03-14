let input = document.querySelector('input').value;
let img1 = document.querySelector('#b1');
let img2 = document.querySelector('#b2');
let img3 = document.querySelector('#b3');
let img4 = document.querySelector('#b4');
let img5 = document.querySelector('#b5');
let p = document.querySelector('.text');


function click(x){
	x.addEventListener("click", function(){ document.querySelector('.active').src = x.src; })
}

click(img1);
click(img2);
click(img3);
click(img4);
click(img5);
console.log(input);
p.innerHTML = input;

function f(){
	p.innerHTML = document.querySelector('input').value;
}

document.querySelector('input').addEventListener('change', f);