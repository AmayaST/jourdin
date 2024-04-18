var i = 100;
var bonneslettres = 'guitarefolkbsdpnq';
var compteur = 0


function Lancer_musique(id) {
	i = id
	document.getElementById("reponse").textContent="RÉPONSE";
	document.getElementById("enonce").textContent=regles[id];
	lettre = document.getElementById(i).textContent.toLowerCase();
	document.getElementById("audio").setAttribute("src",sons[i])
}


function bonne_reponse()
{
	document.getElementById("reponse").textContent=reponses[i];
	document.getElementById(i).style.color = "white";
	document.getElementById(i).style.backgroundColor = "#C1E1C1";
	
	if (bonneslettres.includes(lettre)) {
		var LETTRE = lettre.toUpperCase();
		for (let p = 0; p < document.getElementsByClassName("u").length; p ++)
		{
			document.getElementsByClassName("u")[p].textContent = LETTRE;
			console.log(document.getElementsByClassName("u")[p].textContent)
			compteur++
		}


	}
	else {
			document.querySelector('body').style.opacity=0.9;

	}

	if (compteur=20) {
		document.getElementById("cadeau").setAttribute("src",arthur.jpg)
	}
		
}


function mauvaise_reponse(){
	document.getElementById("reponse").textContent=reponses[i];
	document.getElementById(i).style.color = "white";
	document.getElementById(i).style.backgroundColor = "#FF5733";

	f (bonneslettres.includes(lettre)) {
		var LETTRE = lettre.toUpperCase();
		for (let p = 0; p < document.getElementsByClassName("u").length; p ++)
		{
			compteur++
		}

		if (compteur=20) {
			console.log("gagné")
		}
}

function voir_le_cadeau(){

}

var sons = [
	"../son/son0.mp3",
	"../son/son1.mp3",
	"../son/son2.mp3",
	"../son/son3.mp3",
	"../son/son4.mp3",
	"../son/son5.mp3",
	"../son/son6.mp3",
	"../son/son7.mp3",
	"../son/son8.mp3",
	"../son/son9.mp3",
	"../son/son10.mp3",
	"../son/son11.mp3",
	"../son/son12.mp3",
	"../son/son13.mp3",
	"../son/son14.mp3",
	"../son/son15.mp3",
	"../son/son16.mp3",
	"../son/son17.mp3",
	"../son/son18.mp3",
	"../son/son19.mp3",
	"../son/son20.mp3",
	"../son/son21.mp3",
	"../son/son22.mp3",
	"../son/son23.mp3",
	"../son/son24.mp3",
	"../son/son25.mp3",

]

var regles = [
	"Artiste, Lieu & Année.",
	"Groupe",
	"Artiste & Chanson.",
	"3",
	"4",
	"Artiste (celui qui fait la reprise) & Chanson.",
	"Presque Blind Test (tout sauf la bonne réponse)",
	"Artiste & Titre.",
	"8",
	"Artiste & Titre.",
	"Nom du groupe.",
	"Nom de la chanson.",
	"Artiste & Titre.",
	"13",
	"Trouver les 4 Artistes et le point commun",
	"15",
	"Nom de la chanson.",
	"17",
	"18",
	"Artiste",
	"Le nom de l'artiste au moment où la chanson est sortie.",
	"Artiste & Titre.",
	"Artiste & Titre + Artiste & Titre de la chanson originale.",
	"Artiste & Titre (Artiste de la chanson originale).",
	"Artiste & Titre.",
	"Musicien",

]

var reponses = [
	"Red Hot Chili Peppers - Under The Bridge (Live at Woodstock, 1999)",
	"Set & Match",
	"Limp Bizkit - Break Stuff",
	"3",
	"4",
	"Garou - Le petit pain au chocolat",
	"Surtout pas Patrick Bruel - Place des grands hommes",
	"Taylor Swift - Shake It Off",
	"8",
	"Beyoncé - TEXAS HOLD 'EM",
	"Le Chalutier",
	"La semaine sanglante",
	"Jungeli ft. Imen Es, Alonzo, Abou Debeing & Lossa - Petit Génie",
	"13",
	"IAM - La lune c'est le soleil des loups & Hugo TSR - Objectif Lune & The Police - Walking on the moon & Franck Sinatra - Fly me to the moon",
	"15",
	"Hymne à Jean Bart",
	"17",
	"18",
	"Faya Ganjah",
	"Zbeulito",
	"Raoul de Godewarsvelde - Perds pas l'nord",
	"Le Pénitencier de Johnny Hallyday + The House of the Rising Sun de The Animals",
	"Gad Elmaleh - Armostrong (Claude Nougaro)",
	"Majda Sepe - Šuštarski most",
	"Vid Šketa",

]
