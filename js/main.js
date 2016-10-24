function titulo(){
	var titulo = document.getElementById('form-signin-heading');
	var nuevoTitulo = 'Por favor inicia sesión';
	titulo.innerHTML = nuevoTitulo;
}
titulo();

function inp(){
	var inp = document.getElementById('inputEmail').placeholder = 'Correo Electrónico';
	var inpDos = document.getElementById('inputPassword').placeholder = 'Contraseña';
}
inp();

function check(){
	var check = document.getElementsByTagName('span')[0].innerHTML = 'Recordar datos';
}
check();

function btn(){
	var btn = document.getElementsByTagName('button')[0].innerHTML = 'Iniciar Sesión';
}
btn();