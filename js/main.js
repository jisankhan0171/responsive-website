
var menu = document.querySelector('.hamburger');
var nav = document.querySelector('.main-navbar nav');
var times = document.querySelector('.close');
console.log(nav);

menu.onclick = function(){
	nav.style.display = 'block';
}

times.onclick = function(){
	nav.style.display = 'none';
}