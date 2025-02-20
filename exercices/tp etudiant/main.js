// let elements = [];

// function Ajouter() {
//     let nom = document.querySelector(".nom").value;
//     let prenom = document.querySelector(".prenom").value;
//     let note = document.querySelector(".note").value;
//     let element = {nom: nom, prenom: prenom, note: note}

//     if (nom!=="" && prenom!=="" && note.length!==0) {
//         if (isNaN(nom) && isNaN(prenom) && isFinite(note)) {
//             elements.push(element);
//         } else {
//             alert("Error de siasie");
//         }
//     } else {
//         alert("Error de saisie");
//     }
//     Afficher();
// }

// function Afficher() {
//     let tb = document.querySelector(".tb");
//     tb.innerHTML = "";
    
//     elements.forEach((element, index) => {
//         let newRow = document.createElement("tr");
//         newRow.innerHTML = `<td>${element.nom}</td>
//         <td>${element.prenom}</td>
//         <td>${element.note}</td>
//         <td>
//             <button onclick="modifier(${index})">Modifier</button>
//             <button onclick="supprimer(${index})">Supprimer</button>
//         </td>
//         `
//         tb.appendChild(newRow); 
//     });
// }

// function supprimer(index) {
//     elements.splice(index, 1);
//     Afficher();
// }

// function modifier(index) {
//     let element = elements[index];
//     let nom = document.querySelector(".nom").value = element.nom;
//     let prenom = document.querySelector(".prenom").value = element.prenom;
//     let note = document.querySelector(".note").value = element.note;
//     supprimer();
// }




let table = [];
function Ajouter() {
    let note = document.querySelector(".note").value;
    table.push(note);
    let chaine = JSON.stringify(table);
    localStorage.setItem("table", chaine);
}

function Diseryalisation() {
    let afficher = JSON.parse(localStorage.getItem("table"));
    return afficher;
}

function Afficher() {
    let result = Result();
    result.innerHTML = Diseryalisation().join(", ") 
}

function plusTen() {
    let result = Result();
    let counter = Diseryalisation().filter(num => num>10).length;
    result.innerHTML = `Le nombre des etudiants qui ont plus de 10 est : ${counter}`;
}

function Moyenne() {
    let result = Result();
    let data = Diseryalisation();
    let moyenne = data.reduce((sum, num) => parseFloat(sum) + parseFloat(num), 0) / data.length;
    result.innerHTML = `La moyenne est : ${moyenne}`;
}

function Result() {
    let result = document.querySelector(".result");
    return result;
}

function maxMin() {
    let result = Result();
    let data = Diseryalisation();
    result.innerHTML = `Le max est : ${Math.max(...data)} / le min est : ${Math.min(...data)}`;
}

function Recherche() {
    let num = prompt("Entrer un num");
    let result = Result();
    let data = Diseryalisation();
    let check = data.indexOf(num);
    if (check !== -1) {
        result.innerHTML = `Le nombre ${num} existe`;
    } else {
        result.innerHTML = `Le nombre ${num} n'existe pas`;
    }
}

function test() {
    if (localStorage.getItem("table") !== null) {
        notes = localStorage.getItem("table");
    }
}