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
var isreverse = false
var classList1 = knappElement.classList
console.log(classList1)
// Brukerens perspektiv:
// Taket kommer på igjen, ved å klikke en gang til

//Scriptet gjør følgende hvis element har klasse reverse1


if(classList1.contains ("reverse1")) {
    classList1.remove("reverse1");
    knappElement.textContent = bildeElement;
} else {
    classList1.add("reverse1");
    
}
});