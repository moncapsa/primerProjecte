/**
 * EXERCICI 1
 * Donada una cadena de caràcters definida dins el programa
 * escriure quantes vegades apareix la lletra "a" i que mostri el resultat
 */
function paraula(){
	var cadena = "programacio";
	var posicio =0;
	var a = "a"
	var comptador = 0;
	for (posicio =0; posicio <= cadena.length; posicio++) {
		if (cadena.charAt (posicio) == a) {
			comptador ++;
			}
	}
	document.write ("Hi ha " + comptador + " lletres (a) dins la paraula " + cadena);
}
function quinaLletra(){
	var cadena = "programacio";
	var posicio = 0;
	var a = prompt ("Quina lletra vols buscar? ");
	var comptador = 0;
	for (posicio = 0 ; posicio <= cadena.length; posicio++) {
		if (cadena.charAt (posicio) == a) {
			comptador ++;
		}
	}
	document.write ("Hi ha " + comptador + " lletres " + a + " dins la paraula " + cadena);
}
function quinaParaula(){
	var cadena = prompt ("Quina paraula vols posar? ");
	var posicio = 0;
	var a = prompt ("Quina lletra vols buscar? ");
	var comptador = 0;
	for (posicio = 0; posicio <= cadena.length; posicio ++){
		if (cadena.charAt (posicio) == a){
			comptador ++;
		}
	}
	document.write ("Hi ha " + comptador + " lletres " + a + " dins la paraula " + cadena);
}
function quinaPosicio(){
	var cadena = prompt ("Quina paraula vols posar?");
	var posicio = 0;
	var a = prompt ("Quina lletra vols buscar?");
	var comptador = 0;
	for (posicio = 0; posicio <= cadena.length; posicio ++){
		if (cadena.charAt (posicio) == a){
			comptador ++;
			document.write ("La primera lletra " + a + " està a la posició " + (posicio+1) + " de la paraula " + cadena);
			break;
		}
	}
}
function programaPosicio(){
	var cadena = prompt ("Quina paraula vols posar?");
	var posicio = 0;
	var a = "a";
	document.write ("La lletra (a) està a la posició" + "<br>");
	for (posicio = 0; posicio <= cadena.length; posicio ++){
		if (cadena.charAt (posicio) == a){
			document.write ((posicio+1));
			document.write ("<br>");
		}
	}
}
function cadenaNumeros(){
	var cadena = [0,1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9];
	var i = 0;
	var n = []
	var comptador = 0;
	for (n = 0; n<=9; n++){
		for (i = 0; i <= cadena.length; i ++){
			if (cadena [i] == n){
				comptador ++;
			}
		}
		document.write (n + " " + comptador);
		document.write ("<br>")
		comptador = 0
		}
}
function caracterNumeric(){
	var cadena = prompt ("Quina paraula vols posar?");
	var posicio = 0;
	var a = "a";
	document.write ("La lletra (a) està a la posició" + "<br>");
	for (posicio = 0; posicio <= cadena.length; posicio ++){
		if(cadena.charAt(posicio) == parseInt (cadena)){
			document.write ("Hi ha un número a la cadena i està a la posició " + (posicio + 1));
			document.write ("<br>");
			document.write (cadena);
		}
		if (cadena.charAt(posicio) == a){
			document.write ((posicio+1));
			document.write ("<br>");
		}
	}
}