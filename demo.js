let canvas = document.getElementById('canvas_lineas');
let lienzo = canvas.getContext('2d');

let textoLineas = document.getElementById('input_lineas');
let color = document.getElementById('color');
let fondo = document.getElementById('fondo');
let lado = document.getElementById('select-lineas');
let pincel = document.getElementById('tamaño-pincel');
let botonLineas = document.getElementById('boton');

botonLineas.addEventListener('click', dibujoLineasClick);

let ancho = canvas.width;
let espacio = ancho / textoLineas;

function dibujarLineas(
	color,
	xinicial,
	yinicial,
	xfinal,
	yfinal,
	pincel,
	fondo
) {
	lienzo.beginPath();
	lienzo.lineWidth = pincel;
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
	canvas.style.background = fondo;
}
function dibujoLineasClick() {
	let yi, xf;
	let l = 0;
	let numLineas = parseInt(textoLineas.value);
	let espacio = ancho / numLineas;
	var colorcito = color.value;
	let fondito = fondo.value;
	let ladito = lado.value;
	let pincelito = pincel.value;
	if (ladito === 'abajo,izquierda') {
		if (numLineas < 1) {
			alert('que haces cumpa');
		} else {
			for (l; l < numLineas; l++) {
				yi = espacio * l;
				xf = espacio * (l + 1);
				dibujarLineas(colorcito, 0, yi, xf, 300, pincelito, fondito);
				console.log(ladito + ':' + l);
			}
		}
	} else if (ladito === 'abajo,derecha') {
		if (numLineas < 1) {
			alert('que haces cumpa');
		} else {
			for (l; l < numLineas; l++) {
				yi = espacio * l;
				xf = 300 - (l + 1) * espacio;
				dibujarLineas(colorcito, 300, yi, xf, 300, pincelito, fondito);
				console.log(ladito + ': ' + l);
			}
		}
	} else if (ladito === 'arriba,izquierda') {
		for (l = 0; l < numLineas; l++) {
			yi = 300 - l * espacio;
			xf = (l + 1) * espacio;
			dibujarLineas(colorcito, 0, yi, xf, 0, pincelito, fondito);
			console.log(ladito + ': ' + l);
		}
	} else if (ladito === 'arriba,derecha') {
		for (l = 0; l < numLineas; l++) {
			yi = 300 - l * espacio;
			xf = 300 - (l + 1) * espacio;
			dibujarLineas(colorcito, 300, yi, xf, 0, pincelito, fondito);
			console.log(ladito + ': ' + l);
		}
	} else if (ladito === 'todo') {
		if (numLineas < 1) {
			alert('cumpa');
		} else {
			for (l = 0; l <= numLineas; l++) {
				yi = l * espacio;
				xf = espacio * (l + 1);
				xfDos = 300 - (l + 1) * espacio;
				yiDos = 300 - l * espacio;
				dibujarLineas(colorcito, 0, yi, xf, 300, pincelito);
				dibujarLineas(colorcito, 300, yi, xfDos, 300, pincelito);
				dibujarLineas(colorcito, 0, yiDos, xf, 0, pincelito);
				dibujarLineas(colorcito, 300, yiDos, xfDos, 0, pincelito);
				console.log(ladito + ': ' + l);
			}
		}
	}
	dibujarLineas(colorcito, 1, ancho - 1, ancho - 1, ancho - 1);
	dibujarLineas(colorcito, 1, 1, 1, ancho - 1);
	dibujarLineas(colorcito, ancho - 1, 1, ancho - 1, ancho - 1);
	dibujarLineas(colorcito, 1, 1, ancho - 1, 1);
}
