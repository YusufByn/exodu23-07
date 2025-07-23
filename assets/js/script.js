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
    let age = document.getElementById("age").value;
    // en gros au leu de créer la variable en dehors je la créer ici deja
    // le .value me permet de récuperer la valeur écrite dans mon id
    console.log(age);
}

// Activation de mes fonction!

redBtn.addEventListener("click",mainRed);
btnExo2.addEventListener("click", exo2execution);
exo3btn.addEventListener("click", getValue)
// exemple d'addeventlistenr ()=>{et ici tu mets ta fonction donc pas besoin de créer une fonction tu l'as crée}
// le addEventListener est une fonction qui attend qu'elle fasse ce qu'on lui dit, ici j'ai écrit "click"
// donc elle attend que je clique pour lancer la fonction mainRed par la suite

