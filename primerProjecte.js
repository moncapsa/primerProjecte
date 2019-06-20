/**
 * MATRIUS
 * @desc calcula 10 valors de cada taula de multiplicar fins a numTaules
 * @param int $numTaules - el número de taules de multiplicar a calcular
 * @return array() - retorna les taules de multiplicar dintre d'un array 
 * d'arrays (matriu)
 * 
 */
function taulesAmbArrays(numTaules){
	var taules = prompt ("Fins a quin número vols tenir taula de multiplicar: ");
	var numTaules = parseInt (taules)
	var resultat = [];
	for (var i=0; i<=numTaules; i++){
		resultat[i]=[];
		for (var j=0; j<=10; j++){
			resultat [i][j]= i*j;
		}
	}
	return resultat;
}
	