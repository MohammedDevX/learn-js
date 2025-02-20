/* ex1 : 

let nom = document.querySelector('.nom');
let prix = document.querySelector('.prix');
let quantite = document.querySelector('.quantite');
let HT = document.querySelector('.ht');
let TVA = document.querySelector('.tva');
let TTC = document.querySelector('.ttc');

function handleClick () {
    let nomValue = nom.value;
    let prixValue = parseFloat(prix.value);
    let quantiteValue = parseFloat(quantite.value);

    if (nomValue.trim() === "" || isFinite(nomValue)) {
        alert("S'il vous plait saisir le nom de produit");
    } 
    
    if (prix.value.trim() === "" || isNaN(prixValue)) {
        alert("S'il vous plait saisir le prix de produit");
    }

    if (quantite.value.trim() === "" || isNaN(quantiteValue)) {
        alert("S'il vous plait saisir la quantite de produit");
    }

    HT.value = prixValue * quantiteValue;
    TVA.value = parseFloat(HT.value) * quantiteValue;
    TTC.value = parseFloat(HT.value) * parseFloat(TVA.value);
}
*/



/* ex2 : 

let DH = document.querySelector('.dh');
let Dollar = document.querySelector('.dollar');

function DhToDollar () {
    let DHValue = DH.value;

    if (isNaN(parseFloat(DHValue))) {
        Dollar.value = "";
        return;
    }
    else if (parseFloat(DHValue) < 0) {
        alert("Sasir un nombre sup à 0");
        return;
    }

    Dollar.value = parseFloat(DHValue) / 10;
}

function DollarToDh () {
    let DollarValue = Dollar.value;

    if (isNaN(parseFloat(DollarValue))) {
        DH.value = "";
        return;
    }
    else if (parseFloat(DollarValue) < 0) {
        alert("Sasir un nombre sup à 0");
        return;
    }

    DH.value = parseFloat(DollarValue) * 10;
}
*/



/* ex2 :

let DH = document.querySelector('.dh');
let Dollar = document.querySelector('.dollar');
let prix = document.querySelector('.prix');
let result = document.querySelector('.result');

function DhToDollar () {
    console.log(Dollar.checked);
    if (DH.checked === true) {
        result.innerHTML = parseFloat(prix.value) / 10 + " Dollar";
    }
    
    if (Dollar.checked === true) {
        result.innerHTML = parseFloat(prix.value) * 10 + " DH";
    }
}
*/



/* ex4 :

let notes = [10, 17, 5, 13.4, 20, 18.3, 2.5, 9];
let cont = 0;
let somme = 0;
let max = notes[0];

function afficher () {
    for (let i=0; i<notes.length; i++) {
        console.log(`Etudiant n° ${1 + i} : ${notes[i]}`);
    }
}

function moreThan10 () {
    for (let i=0; i<notes.length; i++) {
        if (notes[i] >= 10) {
            console.log(`Etudiant n° ${1 + i} : ${notes[i]}`);
            cont++;
            somme += notes[i];
            if (max < notes[i + 1]) {
                max = notes[i + 1];
            }
        }
    }
    console.log("The number is : " + cont);
    console.log("La moyenne est : " + somme / cont);
    console.log("Le max est : "  + max);
}

afficher();
console.log("**************");
moreThan10();
*/



let T = [];
let affichage = document.querySelector('.affichage');

function ajouter() {
    let num = document.querySelector('.num').value;
    T.push(num);
    console.log(T)
}

function afficher () {
    affichage.innerHTML = "<ul>";
    for (let i = 0; i < T.length; i++) {
        affichage.innerHTML += "<li>" + T[i] + "</li>";
    }
    affichage.innerHTML += "</ul>";
}

function somme () {
    affichage.innerHTML = "<p>La somme est : " + T.reduce((init, curr) => {
        return parseFloat(init) + parseFloat(curr);
    }, 0) +"</p>";
}

function moyenne () {
    affichage.innerHTML = "<p>La moyenne est : " + T.reduce((init, curr) => {
        return (parseFloat(init) + parseFloat(curr)) / T.length;
    }, 0) + "</p>";
}