// MES VARIABLES!
let redMain = document.getElementById("mainBase");
const redBtn = document.getElementById("redBtn");
const btnExo2 = document.getElementById("btnExo2");
const exo2container = document.getElementById("exo2container");
const exo3btn = document.getElementById("exo3btn");




// MES FONCTIONS !

function mainRed() {
    redMain.classList.toggle("mainRed");
}

function exo2execution() {
    exo2container.classList.toggle("displayNone");
}

function getValue(){
    // le .value me permet de récuperer la valeur écrite dans mon input
    let age = document.getElementById("age").value;
    // genere un element span
    let span = document.createElement("span")
    // declare une variable adultOrMinor
    let adultOrMinor;
    // une condition, si age est sup ou égale à 18
    if (age >= 18) {
        // je rappel ma variable type pour lui enregistré une string
        adultOrMinor = "Adult";
    // Si on rentre pas dnas la premiere condition on execute le esle
    } else {
        // je rappel ma variable type pour lui enregistré une string
        adultOrMinor = "Minor";
    }
    // je modifie textcontent de mon element span
    span.textContent = `A ${age} ans tu es ${adultOrMinor} `;   
    // je cible l'element html dans lequel je veux injecter mon span donc je créer une variable
    let firstSpanElement = document.getElementById("alertContainer");
    // avec la fonction appendChild
    // ca me permet d'injecter span DANS firstSpanElement(qui a pour id alertContainer)
    firstSpanElement.appendChild(span);
}
// Activation de mes fonction!

redBtn.addEventListener("click", mainRed);
btnExo2.addEventListener("click", exo2execution);
exo3btn.addEventListener("click", getValue);
// exemple d'addeventlistenr ()=>{et ici tu mets ta fonction donc pas besoin de créer une fonction tu l'as crée}
// le addEventListener est une fonction qui attend qu'elle fasse ce qu'on lui dit, ici j'ai écrit "click"
// donc elle attend que je clique pour lancer la fonction mainRed par la suite

