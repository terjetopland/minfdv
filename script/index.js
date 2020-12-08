// Brukerens perspektiv:
//Trykk på "Taket" knappen
// hus bilde skal byttes ut

//Scriptet gjør følgende:
// mus over taket og lytte til "klikk"
//img src...House1 byttes ut med House2 

// var Navnpaavariabel = verdi;
// camelCase
// PascalCase 
// UPPERCASE - konstanter

// for aa debugge skriv debug

var knappElement = document.getElementById("KnappTaket");
var bildeElement = document.getElementById("houseImg");

knappElement.addEventListener("click", function(){
    bildeElement.src="./pictures/House2.jpg";
});
