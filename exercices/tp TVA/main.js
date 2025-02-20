function handleClick () {
    let nom = document.getElementsByClassName('nom')[0].options[document.getElementsByClassName('nom')[0].selectedIndex].value;
    let prix = parseFloat(document.querySelector('.prix').value);
    let quantite = parseInt(document.querySelector('.quantite').value);
    let ht = document.querySelector('.ht');
    let tva = document.querySelector('.tva');
    let ttc = document.querySelector('.ttc');

    console.log(nom);
    if (nom.length === 0 || isFinite(nom) || isNaN(prix) || isNaN(quantite) ) {
        alert("S'il vous plait saisir touts les champs, et saisir le bon type");
        return;
    }

    ht.value = prix * quantite;
    tva.value = ht.value * 0.2;
    ttc.value = ht.value + tva.value;
}

function reset() {
    document.querySelector('.nom').value = "";
    document.querySelector('.prix').value = "";
    document.querySelector('.quantite').value = "";
    document.querySelector('.ht').value = "";
    document.querySelector('.tva').value = "";
    document.querySelector('.ttc').value = "";
}