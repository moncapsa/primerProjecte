/**
* exercicis de la Pla 4 segona tanda
*
*/
function numero(){
	var cadena = [1,2,5,8,7,4,6,9,5,2,3,5];
	document.write (cadena);
	var posicio = 0;
	var comptador = 0;
	var caracter = prompt ("Quin número vols posar?");
	var num = parseInt (caracter);
	for (posicio =0; posicio <= cadena.length; posicio++){
		if (cadena [posicio] >= num){
			comptador++;
			}
		}
	document.write ("<br>");
	document.write ("Hi ha " + comptador + " números majors o iguals a " + num + " en la cadena " + cadena);
}
function llista(){
	var cadena = [1,2,5,8,7,4,6,9,5,2,3,5];
	document.write (cadena);
	var posicio = 0;
	var comptador = 0;
	var lloc = [];
	lloc.length == cadena.length;
	for (posicio = 0; posicio <= cadena.length; posicio++){
		var num =lloc.push(cadena);
		if (cadena [posicio] == num){
			comptador++;
		}
		document.write ("<br>");
		document.write (num + " " + comptador);
		comptador == 0;
	}
}
function multiple2() {
	var numero;
	for (numero =0; numero <= 100; numero++)
		if (numero%2==0){
			document.write (numero + ",");
		}
}
function multiples() {
	var numero = 0;
	var numeroTeclat = prompt("diga'm un número i buscaré els seus múltiples des de 1 fins a 100");
	var multiple = parseInt(numeroTeclat);
	for (numero = 0; numero <= 100; numero++){
		if (numero%multiple == 0){
			document.write (numero + ",");
		}
	}
}
function taules(){
	var ambArrays = [];
	var taules = prompt ("Fins a quin número vols tenir taula de multiplicar: ");
	var numTaules = parseInt (taules);
	var a = prompt ("Quina taula de multiplicar vols: ");
	var i = parseInt(a);
	var b = prompt ("Quin factor vols: ");
	var j = parseInt(b);
	for (var r=0; r<=numTaules; r++){
		ambArrays[r]=[];
		for (var s=0; s<=10; s++){
			ambArrays[r][s] = r*s;
			if (r == i && s == j){
				document.write (a + "x" + b + "=" + (ambArrays [r][s]));	
			}
		}
	}
}
