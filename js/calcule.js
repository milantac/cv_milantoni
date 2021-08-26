function calclef(){
	var clef;
// document.getElementById("id_cibler").value permet de récupérer le numero de sécurité social entré dans la page index.html
	
	var numINSEE=document.getElementById("numCV").value;
/* la clef est calcule par le chiffre 97 moins le reste de la division du nombre insee par 97 */
	clef=(97-(numINSEE%97));
	document.getElementById("clefINSEE").innerHTML = clef;	//on actualise le innertext <span> (l'affichage à la vlaeur de la clé)
}