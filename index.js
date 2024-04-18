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
		for (let p = 0; p < document.getElementsByClassName(lettre).length; p ++)
		{
			document.getElementsByClassName(lettre)[p].textContent = LETTRE;
			console.log(document.getElementsByClassName(lettre)[p].textContent)
			compteur++
		}

	}

		
}


function mauvaise_reponse(){

	document.getElementById("reponse").textContent=reponses[i];
	document.getElementById(i).style.color = "white";
	document.getElementById(i).style.backgroundColor = "#FF5733";

}


var sons = [
	"son/son0.mp3",
	"son/son1.mp3",
	"son/son2.mp3",
	"son/son3.mp3",
	"son/son4.mp3",
	"son/son5.mp3",
	"son/son6.mp3",
	"son/son7.mp3",
	"son/son8.mp3",
	"son/son9.mp3",
	"son/son10.mp3",
	"son/son11.mp3",
	"son/son12.mp3",
	"son/son13.mp3",
	"son/son14.mp3",
	"son/son15.mp3",
	"son/son16.mp3",
	"son/son17.mp3",
	"son/son18.mp3",
	"son/son19.mp3",
	"son/son20.mp3",
	"son/son21.mp3",
	"son/son22.mp3",
	"son/son23.mp3",
	"son/son24.mp3",
	"son/son25.mp3",

]

var regles = [
	"Artiste, Lieu & Année.",
	"Artiste & Chanson.",
	"Artiste & Chanson.",
	"Artiste & Chanson.",
	"Artiste & Chanson.",
	"Artiste & Chanson.",
	"Presque Blind Test.",
	"Artiste & Titre.",
	"Film & Artiste & Chanson.",
	"Artiste & Titre.",
	"Nom du groupe.",
	"Nom de la chanson.",
	"Artiste & Titre.",
	"Trouver les 4 Artistes et le point commun",
	"Artiste & Titre.",
	"Artiste & Titre.",
	"Nom de la chanson.",
	"Artiste & Titre.",
	"Titre.",
	"Artiste",
	"Le nom de l'artiste au moment où la chanson est sortie.",
	"Artiste & Titre.",
	"Artiste & Titre + Artiste & Titre de la chanson originale.",
	"Artiste & Titre & Artiste de la chanson originale.",
	"Artiste & Titre.",
	"Musicien",

]

var reponses = [
	"Red Hot Chili Peppers - Under The Bridge (Live at Woodstock, 1999)",
	"Set & Match - Billet Bleu",
	"Limp Bizkit - Break Stuff",
	"Renaud - La médaille",
	"Ange - La Bataille du Sucre et la colère des Dieux",
	"Garou - Le petit pain au chocolat",
	"Surtout pas Patrick Bruel - Place des grands hommes",
	"Taylor Swift - Shake It Off",
	"Série noire - Moonlight Fiesta - Duke Ellington",
	"Beyoncé - TEXAS HOLD 'EM",
	"Le Chalutier",
	"La semaine sanglante",
	"Jungeli ft. Imen Es, Alonzo, Abou Debeing & Lossa - Petit Génie",
	"IAM - La lune c est le soleil des loups & Hugo TSR - Objectif Lune & The Police - Walking on the moon & Franck Sinatra - Fly me to the moon",
	"Pierre Groscolas - Lady lay",
	"Avril Lavigne - Complicated",
	"Hymne à Jean Bart",
	"Dany Boon - Tout in haut deuch terril",
	"La Brabançonne",
	"Faya Ganjah",
	"Zbeulito",
	"Raoul de Godewarsvelde - Perds pas l'nord",
	"Le Pénitencier de Johnny Hallyday + The House of the Rising Sun de The Animals",
	"Gad Elmaleh - Armostrong (Claude Nougaro)",
	"Majda Sepe - Šuštarski most",
	"Vid Šketa",
]